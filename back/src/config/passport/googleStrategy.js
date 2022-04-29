import oauth2 from "passport-google-oauth20";
import passport from "passport";
import { createAccessToken } from "../../util/createJWT";

const GoogleStrategy = oauth2.Strategy;

export const googleStrategy = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "http://localhost:5001/auth/google/callback",
            },
            function (accessToken, refreshToken, profile, cb) {
                console.log("구글 로그인 유저 프로필 >>", profile);
                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });
                // const accessToken = createAccessToken() // jwt 발급
                return cb(null, profile);
            },
        ),
    );
};