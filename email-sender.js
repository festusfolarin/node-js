const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "xxxx@yahoo.com",
    pass: "yqmueksftcbyerox",
  },
});

const mailOptions = {
  from: "xxxx@yahoo.com",
  to: "yyyy@yahoo.com",
  subject: "Testing Email sender using Node.js",
  text: "Nothing to see here, but it works",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("sending failed", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
