const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const cors = require("cors"); // Import cors
const keys = require("./config/keys"); // Configuration file for keys

const Oppurtunity = require("./models/oppurtunityModel"); // Import Oppurtunity model
require("./services/passport"); // Passport configuration

const app = express();

// Middleware setup
app.use(cors()); // Use CORS middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser
app.use(
  session({
    secret: keys.cookieKey, // Secret for session encryption
    resave: false, // Do not save unmodified sessions
    saveUninitialized: false, // Do not save uninitialized sessions
    cookie: { 
      secure: process.env.NODE_ENV === 'production', // Secure cookies in production
      httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
      sameSite: 'lax', // Helps prevent CSRF attacks
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", require("./routes/authRoutes"));

// MongoDB connection
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running!", status: "success" });
  });

app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(req.user);
});

app.post('/api/opportunities', async (req, res) => {
  const opportunity = new Oppurtunity(req.body);
  try {
    await opportunity.save();
    res.status(201).json(opportunity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/opportunities', async (req, res) => {
  try {
    const opportunities = await Oppurtunity.find();
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use(cors({
  origin: 'localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
