import passport from 'passport'
import { localStrategy } from '../../../helpers/passport-local'
import nextConnect from 'next-connect'
import { makeSession } from '../../../helpers/session'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        console.log('reject', error)
        reject(error)
      } else {
        console.log('resolve token', token)
        resolve(token)
      }
    })(req, res)
  })

passport.use(localStrategy)

export default nextConnect()
  .use(passport.initialize())
  .post(
    async function(req, res){
      
      try{
        const user = await authenticate('local', req, res)
        await makeSession(res, user.id)

        res.status(200).send({done: true})
      }
      catch(error){
        console.log(error)
        res.status(401).send({done: false, error: error.message})
      }
    }
  )