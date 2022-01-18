import prisma from "../database";

//get all messages for user
export async function getUserMessages( id ){
    
    const messages = await prisma.messages.findMany({
        where: {
            senderId: id
        },
        include: {
            Users_Messages_receiverIdToUsers: true,
        }
    });
  
    return messages;
  }
  
  //get messages from certain conversation
  export async function getConversationMessages( senderId, receiverId ){
  
    const messages = await prisma.messages.findMany({
      where: {
        senderId: senderId,
        receiverId: receiverId
      }
    })
  
    return messages
  }
  
  //get latest message from conversation
  export async function getLatestMsg(){
  
    const message = await prisma.messages.findFirst({
      where: {
        senderId: senderId,
        receiverId: receiverId 
      },
      orderBy: {
        timestamp: 'desc'
      }
    })
  
    return message
  }

export async function addNewFriend(id){
  const newFriend = await prisma.friend.create({
    data: {
      friendId: id,
      
    }
  })
}