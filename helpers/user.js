import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import mysql from 'mysql2'

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// const connection = mysql.createConnection({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USER,
//   password : process.env.DB_PWD,
//   database : process.env.DB_NAME
// });
 


const users = [
  {
    id: 'fdc6c3c8-3dc8-4a92-ad64-02b7bc2d040d',
    createdAt: 1636547315283,
    username: 'maksym@piasecki.xyz',
    hash: 'da65481d4b41420726d524f207cc6836c39ae6d193f0c269ac5bccc9a65b4d9b905a2e686a8834b0870919f070f7ce877d8adffb78f045c7cfb165aef065a23f',
    salt: '3f4a1301fc31263ef53a708feafc6308'
  },{
    id: '33e95629-c961-4b06-8997-0d7532190d4a',
    createdAt: 1636716308391,
    username: 'piaseckimaks94@gmail.com',
    hash: 'a24ae75c6e139f3fcea21f2b8a1fc3f330e98afd2de4f4e1da0c0016bf38987497ece5a74dea71f7eed158e880e1e38762f34d130af0a4fa091e86c3224f11fe',
    salt: '9ac5b17ec6b3439f4abbc49cd1af776e'
  }
]

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }

  // This is an in memory store for users, there is no data persistence without a proper DB
  users.push(user)

  // connection.connect();
 
  // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results[0].solution);
  // });
  
  // connection.end();

  console.log(users)

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
    console.log('from /user/findUser', username)
   users.forEach((user) => {console.log(user.username) })
  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user.username === username)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
    console.log('hash received: ',inputHash)
    console.log('hash saved: ',user.hash)
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}