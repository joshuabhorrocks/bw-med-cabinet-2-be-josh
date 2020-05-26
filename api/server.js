const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/user-router.js');
const cannabisRouter = require("../cannabis/cannabis-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/cannabis', cannabisRouter); // authenticate,
// server.use('/api/user', userRouter) // authenticate,

module.exports = server;