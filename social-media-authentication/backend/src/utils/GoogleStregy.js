const { LoginWithGoogle } = require('../controller/AuthController');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

exports.GoogleProvider  = new GoogleStrategy({
     clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},async function(access,refresh,profile,cb){
  await  LoginWithGoogle(profile,cb)
})
