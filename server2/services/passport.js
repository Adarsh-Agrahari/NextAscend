const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    // Check if user already exists
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
        return done(null, existingUser);
    }
    // Create a new user if not found
    const newUser = await new User({ googleId: profile.id }).save();
    done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user ID to session
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id); // Find user by ID
    done(null, user);
});
