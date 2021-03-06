
import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './cookies'

const TOKEN_SECRET = process.env.TOKEN_SECRET

export async function makeSession(res, sessionData){
    const dtCreated = Date.now()
    const sessionObj = { ...sessionData, dtCreated, maxAge: MAX_AGE}
    console.log('token',TOKEN_SECRET)
    const token = await Iron.seal(sessionObj, TOKEN_SECRET, Iron.defaults)
    setTokenCookie(res, token)
}

export async function getSession(req){
    console.log('cookies from session:', req.cookies)
    const token = getTokenCookie(req)
    console.log('token from /helpers/session:', token)
    if(!token) 
        return {}

    const sessionData = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
    const dtExpires = sessionData.dtCreated + sessionData.maxAge * 1000

    if(Date.now() > dtExpires)
        throw new Error('Session expired!')

    console.log('session data: ',sessionData)
    return sessionData
}