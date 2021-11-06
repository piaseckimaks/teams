import { getSession } from '../../../helpers/session'
import { findUser } from '../../../helpers/user'

export default async function user(req, res) {
  try {
    const session = await getSession(req)
    const user = (session && (await findUser(session))) ?? null

    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}