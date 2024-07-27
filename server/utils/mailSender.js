const nodemailer = require("nodemailer");
require("dotenv").config(); // Correctly call the config method

// console.log(
//   process.env.MAIL_HOST,
//   process.env.MAIL_USER,
//   process.env.MAIL_PASS
// );

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // Use 465 for secure connection (set secure: true)
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER, // Ensure the from address is a valid email
      to: email,
      subject: title,
      html: body,
    });

    console.log("Info of sent mail - ", info);
    return info;
  } catch (error) {
    console.log(error);
    console.log("Error while sending mail (mailSender) - ", email);
  }
};

module.exports = mailSender;
