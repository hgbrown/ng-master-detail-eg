import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

console.log('Initializing Firebase database ... ');

initializeApp(firebaseConfig);

const messagesRef = database().ref('messages');

dbData.messages.forEach( message => {
  console.log('adding message: ', message.subject);
  const messageRef = messagesRef.push({
    'subject': message.subject,
    'body': message.body,
    'from': message.from,
    'to': message.to,
    'createdOn': message.createdOn,
    'position': -1 * message.createdOn,
    'read': message.read,
    'delivered': message.delivered
  });
  console.log('added message: ' + message.subject + ' with key: ' + messageRef.key);
});
