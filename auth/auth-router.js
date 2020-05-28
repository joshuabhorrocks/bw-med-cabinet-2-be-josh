const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const Users = require("../users/user-model.js");
const { isValid } = require("../users/user-service.js");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then(user => {
        const token = createToken(user);

        res.status(201).json({message: "You have successfully registered", token})
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "Please provide username and password",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({username: username})
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          // produce (sign) and send the token
          const token = createToken(user);
          const id = user.id;

          res.status(200).json({id, token});
        } else {
          res.status(401).json({message: "Invalid credentials"});
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "Please provide username and password",
    });
  }
});

function createToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    preferences: user.preferences
};

const secret = process.env.JWT_SECRET || "thesecretsauce";

  const options = {
    expiresIn: "1d"
}

  return jwt.sign(payload, secret, options);
}

module.exports = router;