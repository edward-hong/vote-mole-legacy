[![Build Status](https://travis-ci.org/edward-hong/vote-mole.svg?branch=master)](https://travis-ci.org/edward-hong/vote-mole)
[![Coverage Status](https://coveralls.io/repos/github/edward-hong/vote-mole/badge.svg?branch=master)](https://coveralls.io/github/edward-hong/vote-mole?branch=master)
[![Dependencies Status](https://david-dm.org/edward-hong/vote-mole.svg)](https://david-dm.org/edward-hong/vote-mole)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

# Vote Mole

A polling app built with the MERN stack. You can find the live website
[here](https://vote-mole.herokuapp.com/)

![Image of Vote Mole](https://res.cloudinary.com/avatarhzh/image/upload/v1509887327/build-a-voting-app/logo.svg)

## Installation

`git clone https://github.com/edward-hong/vote-mole.git`

or download the
[zipped file](https://github.com/edward-hong/vote-mole/archive/master.zip) and
unzip

## Usage Example

User can choose to vote on existing polls or make their own polls. To vote on
poll, simply click on one of the existing poll questions and select which option
you want to vote for and click the "Submit" button.

To create a poll, first you have to login in. User can login with Facebook,
Google or Github. Once logged in, click "Add Poll" in the navigation bar at the
top and fill out the form and the click "Submit"

![Add poll form](https://res.cloudinary.com/avatarhzh/image/upload/v1511567427/build-a-voting-app/add-poll.png)

Note you must add at least 2 options to the poll.

## Development Setup

After cloning or downloading the repo, type `yarn dev` in the terminal and
the server and client servers will start. Client server is on port 3000, server
side server is on port 5000. To just run server side server, from root directory
type `yarn start`. To just run client server, from root directory type `cd client && yarn start`

Note that before starting the server the following environment variables should
be defined:

| Variable Name       | Description                                          |
| ------------------- | ---------------------------------------------------- |
| SESSION_SECRET      | Secret cookie key for login session. Can be anything |
| MONGO_URL           | URL of your MongoDB database                         |
| GOOGLE_CLIENT_ID    | Client ID of your Google+ API credentials            |
| GOOGLE_SECRET_KEY   | Corresponding secret key to API credentials          |
| FACEBOOK_CLIENT_ID  | App ID of registered Facebook app                    |
| FACEBOOK_SECRET_KEY | Corresponding secret key to app                      |
| GITHUB_CLIENT_ID    | Client ID of Github OAuth app                        |
| GITHUB_SECRET_KEY   | Corresponding secret key to OAuth app                |
| TWITTER_CLIENT_ID   | Client ID of Twitter app                             |
| TWITTER_SECRET_KEY  | Corresponding secret key to the app                  |


Add the environment variables in a `.env` file in the root directory.

You will also need a Redis server running on port 6379.

## Meta

Edward Hong – [@EdwardHong527](https://twitter.com/EdwardHong527)

Distributed under the ISC license.

## Contributing

1. Fork it from this [link](https://github.com/edward-hong/voting-app)
2. Create a feature branch `git checkout -b feature/fooBar`
3. Commit your changes `git commit -am 'Add some fooBar`
4. Push to the branch `git push origin feature/fooBar`
5. Create a new Pull Request

## Attribution

The loading spinner was created by Miguel Ambrosi. The code for the spinner was gotten from [https://icons8.com/cssload/en/spinners](https://icons8.com/cssload/en/spinners). Terms of Use: [https://icons8.com/cssload/en/terms_of_use](https://icons8.com/cssload/en/terms_of_use)