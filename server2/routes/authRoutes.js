const router = require('express').Router();
const passport = require('passport');

// Route to start Google OAuth flow
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // Scopes for access
}));

// Callback route for Google to redirect to
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    // Successful authentication, redirect home or to another route
    res.redirect('/profile'); // Adjust the redirect as needed
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

// Route to check if the user is authenticated
router.get('/current_user', (req, res) => {
    res.send(req.user); // Send user data
});

module.exports = router;
