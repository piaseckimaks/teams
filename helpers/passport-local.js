import Local from 'passport-local'
import { validatePassword, validateUser } from '../controllers/UserController'

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
  validateUser(username)
    .then((user) => {
      console.log('user from pass-local: ',user)
      if (user && validatePassword(user, password)) {
        console.log('validate user:', validatePassword(user,password))
        done(null, user)
      } else {
        done(new Error('Invalid username or password!'))
      }
    })
    .catch((error) => {
      console.log('error passport-local:', error)
      done(error)
    })
})