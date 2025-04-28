const dotenv = require('dotenv');

dotenv.config();



module.exports = {
    PORT : process.env.PORT,   // process.env is to provide an access to all the environment variables
    GMAIL_USER  : process.env.GMAIL_USER,
    GMAIL_PASS : process.env.GMAIL_PASS
}