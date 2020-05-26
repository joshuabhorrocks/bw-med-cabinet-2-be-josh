const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || "thesecretsauce";

    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        // the token is invalid
        res.status(401).json({ message: "You Shall Not Pass!" });
      } else {
        // the token is good
        req.jwt = decodedToken;
        
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please provide the correct authentication information" });
  }
};