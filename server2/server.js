const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const keys = require("./config/keys"); // Configuration file for keys

require("./services/passport"); // Passport configuration

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser
app.use(
  session({
    secret: keys.cookieKey, // Secret for session encryption
    resave: false, // Do not save unmodified sessions
    saveUninitialized: false, // Do not save uninitialized sessions
    cookie: { secure: false }, // Set to true if using HTTPS
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

app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(req.user);
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
