import passport from 'passport'
import nextConnect from 'next-connect'

function authenticate(method, req, res){

}


passport.authenticate(method, { session: false }, (error, token) => {
    if (error) {
      reject(error)
    } else {
      resolve(token)
    }
  })(req, res)