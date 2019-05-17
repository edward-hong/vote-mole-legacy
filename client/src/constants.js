// ================
// Frontend Paths
// ================
export const HOME_PATH = '/'
export const POLL_PATH = '/poll/:id'
export const POLL_BRANCH_PATH = '/poll/'
export const POLLS_USER_PATH = '/my_polls'

// ================
// Backend Paths
// ================

// Auth Paths
export const AUTH_CURRENT_USER_PATH = '/api/auth/current_user'
export const AUTH_LOGOUT_PATH = '/api/auth/logout'
export const AUTH_GOOGLE_LOGIN_PATH = '/api/auth/google'

// Poll Paths
export const POLL_SUBMIT_PATH = '/api/poll/submit'
export const POLL_INFO_BRANCH_PATH = '/api/poll/info/'
export const POLL_DELETE_PATH = '/api/poll/delete/'
export const POLLS_ALL_PATH = '/api/poll/all'
export const POLLS_GET_USER_PATH = '/api/poll/user/'

// ================
// Colours
// ================

export const COLOURS = {
	primary: '#21252a',
	google: '#ec371b',
	googleShadow: 'rgba(236, 55, 27, 0.5)',
	twitter: '#009cfa',
	twitterShadow: ' rgba(0, 156, 250, 0.5)',
	error: '#dc3545',
	success: '#00b55b',
	gray: '#ccc',
	pageLinkHover: 'rgba(33, 37, 41, 0.7)',
}

// ================
// Redux Types
// ================

// Auth types
export const AUTH_FETCH_USER_TYPE = '@auth/FETCH_USER'
export const AUTH_FETCH_USER_RECEIVED_TYPE = '@auth/FETCH_USER_RECEIVED'

// Polls types
export const POLLS_ALL_TYPE = '@polls/FETCH_ALL_POLLS'
export const POLLS_ALL_RECEIVED_TYPE = '@polls/FETCH_ALL_POLLS_RECEIVED'
export const POLLS_CLEAR_TYPE = '@polls/CLEAR_POLLS'
export const POLLS_USER_TYPE = '@polls/FETCH_USER_POLLS'
export const POLLS_USER_RECEIVED_TYPE = 'polls/FETCH_USER_POLLS_RECEIVED'

// Poll types

export const POLL_INFO_TYPE = '@poll/FETCH_POLL'
export const POLL_INFO_RECEIVED_TYPE = '@poll/FETCH_POLL_RECEIVED'
export const POLL_CLEAR_TYPE = '@poll/CLEAR_POLL'
