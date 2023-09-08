const express = require('express');
const { todoListRouter } = require('./todo-lits');
const { i18nRouter } = require('./i18n');

const rootRouter = express.Router();
rootRouter.use('/todo-list', todoListRouter);
rootRouter.use('/I18N', i18nRouter);

module.exports.rootRouter = rootRouter;
