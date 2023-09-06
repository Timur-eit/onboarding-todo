const express = require('express');
const { todoListRouter } = require('./todo-lits');

const rootRouter = express.Router();
rootRouter.use('/todo-list', todoListRouter);

module.exports.rootRouter = rootRouter;
