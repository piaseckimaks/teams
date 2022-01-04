import crypto from 'crypto'
import { getUserByEmail, getUserById, addUserToDB } from '../database'

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

 


const users = [
  
]

export async function createUser({ firstname, lastname, email, password }) {
  
  try
  {
    // Here you should create the user and save the salt and hashed password (some dbs may have
    // authentication methods that will do it for you so you don't have to worry about it):
    const salt = crypto.randomBytes(16).toString('hex')
    const hashed_password = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex')

    const user = {
      firstname,
      lastname,
      email,
      hashed_password,
      salt,
    }
  
    const newUser = await addUserToDB(user);

    return newUser
  }
  catch(err)
  {
    throw err
  }
}

// Here you should lookup for the user in your DB
export async function findUser( {username: email} ) {

  const user = await getUserByEmail( {email} )

  return user

  // This is an in memory store for users, there is no data persistence without a proper DB
  
}

export async function getUserData( {username: email }){
  const user = await getAllUserData({ email })

  return user
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
    console.log('hash received: ', inputHash)
    console.log('hash saved: ', user.hashed_password)
    const passwordsMatch = user.hashed_password === inputHash

  console.log(passwordsMatch)
  
  return passwordsMatch ? true : false;
}