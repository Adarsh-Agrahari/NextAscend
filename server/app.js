const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// IMPORT ROUTERS
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const oppurtunityRouter = require('./routes/oppurtunityRoutes');
const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');

const app = express();

// dotenv.config({ path: './config.env' }); // <- connecting the enviroment variables
dotenv.config();

// MIDLEWARES ->>
app.enable('trust proxy');

console.log('REMOTE: ', process.env.REMOTE);

app.use(cors({ credentials: true, origin: process.env.REMOTE })); // <- CORS configuration, in case if you wanted to implemented authorization
app.options(process.env.REMOTE, cors());

console.log(`ENV = ${process.env.NODE_ENV}`);
app.use(morgan('dev')); // <- Logs res status code and time taken

const limiter = rateLimit({
    // <- Limits the number of api calls that can be made per IP address
    max: 1000, // max number of times per windowMS
    windowMs: 60 * 60 * 1000,
    message:
        '!!! Too many requests from this IP, Please try again in 1 hour !!!',
});

app.use('/api/v1', limiter);

app.use((req, res, next) => {
    // <- Serves req time and cookies

    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    if (req.cookies) console.log(req.cookies);
    next();
});

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use(express.json({ limit: '100mb' })); // <- Parses Json data
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // <- Parses URLencoded data
app.use(cookieParser()); // <- parses cookie data
app.use(mongoSanitize()); // <- Data Sanitization aganist NoSQL query Injection.
app.use(xss()); // <- Data Sanitization against xss

app.use(compression());

// USE ROUTERS
app.use('/api/v1/auth/', authRouter); // <- Calling the auth router
app.use('/api/v1/user/', userRouter); // <- Calling the user router
app.use('/api/v1/oppurtunity/', oppurtunityRouter); // <- Calling the oppurtunity router

app.all('*', (req, res, next) => {
    // <- Middleware to handle Non-existing Routes
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(errorController); // <- Error Handling Middleware

module.exports = app;
