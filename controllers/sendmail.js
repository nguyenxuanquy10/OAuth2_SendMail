const nodemailer = require('nodemailer'); // khai báo sử dụng module nodemailer
const sendMail = (req, res, next) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({ // config mail server
        service: "Gmail",
        host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
            user: 'nguyenxuanquy1106@gmail.com',
            pass: 'zxcvbnm11062002'
        },

    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Nguyen Quy',
        to: 'quykaba@gmail.com',
        subject: 'Test Nodemailer',
        text: 'You recieved message from ' + req.body.email,
        html: '<p>You have got a new message</b><ul><li>Username:' + req.body.email + '<li>Email:' + req.body.email + '</li><li>Nội dung:' + req.body.content + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function(err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
}
module.exports = { sendMail }