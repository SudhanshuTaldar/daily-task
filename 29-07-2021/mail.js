var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sudhanshutaldar98@gmail.com',
    pass: 'Taldar@123'
  }
});

var mailOptions = {
  from: 'sudhanshutaldar98@gmail.com',
  to: 'sudhanshu.t.addweb@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});