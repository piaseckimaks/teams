import passport from 'passport'
import { localStrategy } from '../../../helpers/passport-local'
import nextConnect from 'next-connect'
import { makeSession } from '../../../helpers/session'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
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
        const sessionData = {...user}
        console.log('from: login: ', sessionData)

        await makeSession(res, sessionData)

        res.status(200).send({done: true})
      }
      catch(error){
        console.log(error)
        res.status(401).send({done: false, error: error.message})
      }
    }
  )