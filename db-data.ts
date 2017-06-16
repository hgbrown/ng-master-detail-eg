/*
 {
   'subject': '',
   'body': '',
   'from': '',
   'to': '',
   'createdOn': moment('2017-01-19 13:00:23', 'YYYY-MM-DD HH:mm:ss').unix(),
   'read': false,
   'delivered': false
 }
 */
import * as moment from 'moment';

export const dbData = {
  'messages' : [
    {
      'subject': 'Closing early today',
      'body': 'Hi Henry, we will be closing early today at 3pm. Enjoy your weekend!',
      'from': 'Jan',
      'to': 'Henry',
      'createdOn': moment('2017-06-15 09:05:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Today we celebrate!!',
      'body': 'Please join us in the break room to celebrate our independence day',
      'from': 'Chris',
      'to': 'Mike',
      'createdOn': moment().subtract(50, 'seconds').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Late today',
      'body': 'I am going to get to the office around 11 am today, please go ahead and have the pies without me.',
      'from': 'Chris',
      'to': 'Henry',
      'createdOn': moment('2017-05-14 07:10:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Leave Reminder',
      'body': 'If you are taking leave, please remember to get your leave forms signed and delivered today',
      'from': 'Mike',
      'to': 'Henry',
      'createdOn': moment('2017-04-13 12:25:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Happy Birthday Juan',
      'body': 'Happy Birthday Juan - Hope you have a fantastic day!',
      'from': 'Henry',
      'to': 'Juan',
      'createdOn': moment('2017-03-20 11:25:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Happy Valentines day',
      'body': 'Happy valentines day - enjoy the chocolates I left for you on your desk.',
      'from': 'Juan',
      'to': 'Chris',
      'createdOn': moment('2017-02-14 10:10:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Please deploy to production',
      'body': 'Please deploy the new version of the application to production some time today.',
      'from': 'Mike',
      'to': 'Henry',
      'createdOn': moment('2017-02-11 16:10:00', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
    {
      'subject': 'Greetings',
      'body': 'Hello, World!',
      'from': 'Chris',
      'to': 'Jan',
      'createdOn': moment('2017-01-19 13:00:23', 'YYYY-MM-DD HH:mm:ss').unix(),
      'read': false,
      'delivered': false
    },
  ]
};
