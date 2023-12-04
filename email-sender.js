// email-sender.js
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahmedosigbeleme112@gmail.com",
    pass: "Kalimanti@123",
  },
});

// setup email data with unicode symbols
const mailOptions = {
  from: "ahmedosigbeleme112@gmail.com",
  to: "chloedeepak002@gmail.com",
  subject: "Hello from Node.js",
  text: "Hello, this is a test email from Node.js!",
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
