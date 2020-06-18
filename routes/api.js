const router = require('express').Router();
const nodemailer = require('nodemailer');
/* the router "/" is the root inside /api from server.js */
router.route('/').post((req, res) => {

    const transport = nodemailer.createTransport({
        service: 'gmail',
        host : "smtp.gmail.com",
        port : "465", /* ssl */
        ssl : true,
        auth: {
            user: process.env.USER, /* you change this to your email on google account */
            pass: process.env.PASS /* and this will be your password */
        }
    });

    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mailOptions = {
        from: '', /* having issue with this even with data it will be default to your email used */
        to: '', /* where will the email be sent */
        subject: subject,
        text: "FROM: "+ email + " MESSAGE: " + message /* the issue with the from button thats why I included the email here */
    };

    transport.sendMail(mailOptions, (err, info) => {
        err ? res.json(res.status(400).json("Error " + err)) : res.json("Email sent." + info); /* for logging purposes */
    });

});

module.exports = router ;