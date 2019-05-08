const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const auth = require('./routes/auth')

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })

const { PORT, NODE_ENV, SESSION_SECRET, MONGO_URL } = process.env

require('./models/User')
require('./auth/setupPassport')

mongoose.connect(MONGO_URL, {
	useCreateIndex: true,
	useFindAndModify: false,
	useNewUrlParser: true,
})

mongoose.Promise = global.Promise

const commonSessionInfo = { secret: SESSION_SECRET }

const sessionInfo =
	NODE_ENV === 'production'
		? {
				...commonSessionInfo,
				store: new MongoStore({
					mongooseConnection: mongoose.connection,
				}),
		  }
		: { ...commonSessionInfo, saveUninitialized: true, resave: true }

const app = express()

app.use(express.json())

app.use(session(sessionInfo))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)

if (NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
	})
}

const port = PORT || 5000

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
