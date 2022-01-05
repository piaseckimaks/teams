
import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './cookies'

const TOKEN_SECRET = process.env.TOKEN_SECRET

export async function makeSession(res, id){
    const dtCreated = Date.now()
    const sessionObj = { id, dtCreated, maxAge: MAX_AGE}
    const token = await Iron.seal(sessionObj, TOKEN_SECRET, Iron.defaults)
    setTokenCookie(res, token)
}

export async function getSession(req){
    const token = getTokenCookie(req)
    if(!token) 
        return null

    const sessionData = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
    const dtExpires = sessionData.dtCreated + sessionData.maxAge * 1000

    if(Date.now() > dtExpires)
        throw new Error('Session expired!')

    return sessionData
}