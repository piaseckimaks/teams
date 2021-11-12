import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import mysql from 'mysql2/promise'

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const configDB = {
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PWD,
  database : process.env.DB_NAME
}
 


const users = [
  
]

export async function createUser({ firstname, lastname, username, password }) {
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

  connection.connect();
 
  connection.query(`INSERT INTO vercel.Users (firstname, lastname, email, hashed_password, salt) VALUES ('${firstname}', '${lastname}', '${username}', '${hash}', '${salt}')`, function (error, results, fields) {
    if (error) throw error;
    console.log('The result is: ', results);
  });
  
  connection.end();

  console.log(users)

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username, email }) {

  const connection = await mysql.createConnection(configDB);

  const [rows, fields] = await connection.execute(`SELECT * FROM Users WHERE email='${username || email}';`)
  console.log(rows)
  const user = rows[0]

  return user
  

  
  // This is an in memory store for users, there is no data persistence without a proper DB
  
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
    console.log('hash received: ',inputHash)
    console.log('hash saved: ',user.hashed_password)
  // const passwordsMatch = user.hash === inputHash

  const connection = await mysql.createConnection(configDB);

  const [rows, fields] = await connection.execute(`SELECT * FROM Users WHERE hashed_password='${inputHash}';`)

  return rows.length > 0 ? true : false
}