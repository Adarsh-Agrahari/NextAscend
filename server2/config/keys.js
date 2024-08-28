// config/keys.js

// Load environment variables from .env file
require('dotenv').config();

// Export configuration values
module.exports = {
  mongoURI: process.env.MONGO_URI,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY
};
