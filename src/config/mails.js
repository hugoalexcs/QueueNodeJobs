export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
  }; 
/* export default {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a00873d8d49a6a',
      pass: '355f07bd9893f9'
    },
  }; 
 */