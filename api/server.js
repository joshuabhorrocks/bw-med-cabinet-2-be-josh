const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const flavorRouter = require('../flavors/flavors-effects/flavor-router');
const effectRouter = require('../flavors/flavors-effects/effect-router');
const flaskRouter = require('../api-request/flask-router');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/', authRouter); // signup and login
server.use('/api/user', authenticate, userRouter);
server.use('/api/user', authenticate, flavorRouter);
server.use('/api/user', authenticate, effectRouter);
server.use('/api/user', authenticate, flaskRouter);

server.use("/", (req, res) => {
    return res.status(200).json({message: "Server is up"})
})

module.exports = server;