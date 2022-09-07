const JWT = require("jsonwebtoken");
const generateAccessToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.ACCESS_TOKEN_SECRET_KEY
  );
};
const generateRefreshToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
};
const verifyAccessToken = (token, key) => {
  return JWT.verify(token, key, (error, user) => {
    if (error) {
      console.log("verifyAccessToken error :>> ", error);
      return error;
    }
    return user?._doc;
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
};
