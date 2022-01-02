import { PrismaClient } from "@prisma/client";
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// const testUser = {
//     id: 1,
//     firstname: 'Maks',
//     lastname: 'Piasecki',
//     email: 'piaseckimaks94@gmail.com',
//     hashed_password: '52fe1b87abb8f222d5f909de2b2ddc27570c6d224c350691dba494073cde44571a6069416f68ab7c1a9d9731ae750e983ce5c4513525f61cd6aa85c43a067741',
//     salt: '606685b4f7b394b8be9ad2e799768676',
//     reg_date: '2021-11-12T17:24:30.000Z'
//   }


async function getUserByEmail( { email } ){
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    console.log(user);

    return user;
}

async function getUserById( { id } ){
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    });

    console.log(user);

    return user;
}

async function addUserToDB( user ){

    const userExist = await prisma.users.findUnique({
        where: {
            email: user.email
        }
    });

    console.log(userExist)

    if(userExist)
        throw new Error('Email already registered!');

    const newUser = await prisma.users.create({
        data: { ...user }
    })
    

    console.log('from helper:', newUser)

    return newUser
}

// getUserByEmail(testUser);
// getUserByEmail({ email: 'piaseckimaks94@gmai.com' });

// getUserById(testUser)
// getUserById({id: 99})

// addUserToDB({ firstname: 'Jim', lastname: 'Bim', email: 'jim@bim.com', hashed_password: 'JIM', salt: '25'})
// addUserToDB({ firstname: 'Jimmy', lastname: 'Bimmy', email: 'jim2@bim.com', hashed_password: 'JI222', salt: '25'}).then(user=> console.log(user)).catch(err => console.log(err))
// getUserByEmail({email: 'jim@bim.com'})

export { getUserByEmail, getUserById, addUserToDB}