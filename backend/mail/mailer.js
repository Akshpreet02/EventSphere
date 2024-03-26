const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // your SMTP username
      pass: process.env.APP_PASSWORD // your SMTP password
    }
});

  const sendEmail = async (mailOptions) => {
    try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Email sent: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error sending email: ', error);
      throw error; // Rethrow the error so calling function can handle it
    }
};
  
  module.exports = { sendEmail };