import { config } from '../config'
const moment = require('moment')

export const validateLogin = creds =>  {

  let validate = {
    isValidated: false,
    message: null
  }

  if (!creds.password || !creds.email) {
    validate.message = config.validateUser.messages.missingFields
    return validate
  }

  validate.isValidated = true
  return validate
}

export const validateRegistration = user => {
  let validate = {
    isValidated: false,
    message: null
  }

  console.log(user)

  if (!user.password || !user.email || !user.firstName || !user.lastName || !user.dob || !user.verifyPassword) {
    validate.message = config.validateUser.messages.missingFields
    return validate
  }

  if (user.password !== user.verifyPassword) {
    validate.message = config.validateUser.messages.cannotVerifyPassword 
    return validate
  }

  console.log(moment().diff(moment(user.dob), 'days'))
  if (moment().diff(moment(user.dob), 'days') < 6570) {
    validate.message = config.validateUser.messages.userNotOfAge
    return validate
  }


  validate.isValidated = true
  return validate
}