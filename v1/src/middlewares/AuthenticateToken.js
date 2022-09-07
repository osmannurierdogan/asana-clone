const httpStatus = require("http-status");
const { verifyAccessToken } = require("../scripts/utils/Tokens.js");
const authenticateToken = (req, res, next) => {
  // req.headers["authorization"]
  // const authorizationHeader = req.headers.authorization;
  // const token = authorizationHeader && authorizationHeader.split(" ")[1];
  const token = req.headers?.authorization?.split(" ")[1] || null;
  if (token === null) {
    return res.status(httpStatus.UNAUTHORIZED).send({
      error: "To be able to execute this process, you need to login!",
    });
  }
  const verifiedToken = verifyAccessToken(
    token,
    process.env.ACCESS_TOKEN_SECRET_KEY
  );
  if (!verifiedToken) {
    return res
      .status(httpStatus.FORBIDDEN)
      .send({ error: "Token has been expired." });
  }
  req.user = verifiedToken;
  // console.log("req.user :>> ", req.user);
  // console.log("verifiedToken :>> ", verifiedToken);
  next();
};
module.exports = authenticateToken;
