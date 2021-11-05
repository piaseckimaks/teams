import passport from 'passport'
import Local from 'passport-local'
import nextConnect from 'next-connect'
import { makeSession } from '../../../helpers/session'

const users = [
  {username: 'maks', password: 'maks'}
]

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

passport.use(
  new Local.Strategy(
    function(username, password, done){
     try{
        const user = users.find(el => el.username === username && el.password === password)
      
        if(!user)
          return done(null, false, {message: 'Incorrect username or passowrd!'})

        return done(null, user)
    }
    catch(err){
      console.log(err)
      return done(err)
    }
    }
  )
)

export default nextConnect()
  .use(passport.initialize())
  .post(
    async function(req, res){
      try{
        const user = authenticate('local', req, res)
        const sessionData = {...user}

        await makeSession(res, sessionData)

        res.status(200).done({done: true})
      }
      catch(error){
        console.log(error)
        res.status(401).send({done: false, error: error.message})
      }
    }
  )