const nodemailer = require("nodemailer");
const user = "your-gmail"; //your-email

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass: "your-app-password", //read line #18
  },
});

/*
Google no longer supports the use of third-party apps or 
devices which ask you to sign in to your Google Account 
using only your username and password.

So now - https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul:
1- https://myaccount.google.com/security
2- Enable 2FA
3- Create App Password for Email
   https://support.google.com/mail/answer/185833?hl=en
   (once you have done 2FA it appears below that option)
4- Copy that password (16 characters) into the pass parameter in Nodemailer auth.
*/

class Email {
  static async send(msg, error = false) {
    console.log(`Sending email ${error ? "error alert" : "alert"}...`);

    transporter.sendMail({
      to: user,
      from: user,
      subject: error ? "Scraper Error" : "Scraper Results",
      html: msg,
    });

    console.log(`Alert sent successfully.`);
  }
}

module.exports = Email;
