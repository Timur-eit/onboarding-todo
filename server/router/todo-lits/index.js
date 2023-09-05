const express = require('express');
const {
  getTodoListController,
  deleteTodoItemController,
  createTodoItemPostController,
  updateTodoItemPutController,
} = require('../../controllers/todo-list');

const todoListRouter = express.Router();

todoListRouter.get('/', getTodoListController);
todoListRouter.delete('/', deleteTodoItemController);
todoListRouter.post('/', createTodoItemPostController);
todoListRouter.put('/', updateTodoItemPutController);

module.exports.todoListRouter = todoListRouter;
