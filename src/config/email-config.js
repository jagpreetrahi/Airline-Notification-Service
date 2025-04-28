const nodemailer = require("nodemailer");
const {GMAIL_PASS , GMAIL_USER}  = require('../config/server_config')

const transporter = nodemailer.createTransport({
    service : 'gmail',
    
    auth : {
        user : GMAIL_USER,
        pass : GMAIL_PASS
    }
})

module.exports = transporter