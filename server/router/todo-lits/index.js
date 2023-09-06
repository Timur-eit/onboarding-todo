const express = require('express');
const {
  getTodoListController,
  deleteTodoItemController,
  createTodoItemPostController,
  updateTodoItemPutController,
} = require('../../controllers/todo-list');

const todoListRouter = express.Router();

todoListRouter.get('/get-all', getTodoListController);
todoListRouter.delete('/delete-item', deleteTodoItemController);
todoListRouter.post('/create-item', createTodoItemPostController);
todoListRouter.put('/update-item', updateTodoItemPutController);

module.exports.todoListRouter = todoListRouter;
