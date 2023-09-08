const {
  getFullList,
  deleteItem,
  createItem,
  updateItem,
} = require('../../models/todo-list/index');

const getTodoListController = async (req, res) => {
  const todoList = await getFullList();
  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      data: todoList,
      additionalErrors: null,
    });
  }, 800);
};

const deleteTodoItemController = async (req, res) => {
  const { id } = req.body;
  await deleteItem(id);
  res.status(200).json({
    error: false,
    errorText: '',
    data: { id },
    additionalErrors: null,
  });
};

const createTodoItemPostController = async (req, res) => {
  const newItem = await createItem(req.body);
  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      data: { newItem },
      additionalErrors: null,
    });
  }, 1300);
};

const updateTodoItemPutController = async (req, res) => {
  const updatedItem = await updateItem(req.body);
  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      data: updatedItem,
      additionalErrors: null,
    });
  }, 1300);
};

module.exports = {
  getTodoListController,
  deleteTodoItemController,
  createTodoItemPostController,
  updateTodoItemPutController,
};
