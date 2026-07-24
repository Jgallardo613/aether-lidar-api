const express = require('express');
const passport = require('passport');
const router = express.Router();

// Start GitHub login
router.get('/github', passport.authenticate('github'));

// GitHub redirects back here after login
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

// Logout
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;