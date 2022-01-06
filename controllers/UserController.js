import crypto from 'crypto'
import prisma from '../database'

export async function createUser({ firstname, lastname, email, password }) {
  
  try
  {
    //check if user already exist in DB
    const userExist = await prisma.users.findUnique({
        where: {
          email: email
        }
      });

    if(userExist)
        throw new Error('Email already registered!');

    
    //making hashed password and salt to store in DB
    const salt = crypto.randomBytes(16).toString('hex')
    const hashed_password = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex')

    //preparing user object from made propertis
    const user = {
      firstname,
      lastname,
      email,
      hashed_password,
      salt,
    }
  
    //creating user in DB
    const newUser = await prisma.users.create({
        data: { ...user }
    })
  
  return newUser
  }
  catch(err)
  {
    throw err
  }
}

export async function validateUser( username ){
  const user = await prisma.users.findUnique({
      where: {
          email: username
      }
  });


  return user;
}

// lookup for the user in DB by id
export async function getUserName( id ) {

  const user = await prisma.users.findUnique({
      where: {
          id: id
      },
      select: {
        firstname: true,
        lastname: true,
      }
  });

  return user;
}



//validating user by password
export function validatePassword(user, inputPassword) {
  
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')

  const passwordsMatch = user.hashed_password === inputHash
  
  return passwordsMatch ? true : false;
}