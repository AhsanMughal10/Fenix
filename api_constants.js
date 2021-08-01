const ERROR_STATUS = '400'
const SUCCESS_STATUS = '200'
const NOT_REGISTERED = 'User is not registered'
const INTERNAL_ERROR = 'Some internal error occurred'
const WRONG_CRED = 'Wrong password entered'
const LOGIN_SUCCESS = ' logged In successfully'
const INVALID_USERNAME = 'Invalid or empty username entered'
const INVALID_PASSWORD = 'Invalid or empty password entered'
const SHORT_PASSWORD = 'Password too small, It should be atleast 6 characteres long.'
const DUPLICATE_USER = 'Username is already registered'
const SINGUP_SUCCESS = 'You have been registered successfully'

const DATABASE_CONNECTED = "MongoDB Connected Successfully"
const DATABASE_ERROR = 'Error connecting to MongoDB'

module.exports = { ERROR_STATUS ,  SUCCESS_STATUS ,NOT_REGISTERED , INTERNAL_ERROR , WRONG_CRED , LOGIN_SUCCESS , INVALID_USERNAME ,
    INVALID_PASSWORD , DUPLICATE_USER ,  SINGUP_SUCCESS ,  DATABASE_CONNECTED ,  DATABASE_ERROR}