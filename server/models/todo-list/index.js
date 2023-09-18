const path = require('path');
const { uniqueId } = require('lodash');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join(
  'server',
  'models',
  'todo-list',
  'data.json',
);
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

// Set some defaults
database
  .defaults({
    todoList: [
      {
        id: 'c8ab1e82-afb5-464e-9c84-dc6b311da0e7',
        title: 'Настроить окружение',
        createDate: '2023-09-04T11:13:15.126Z',
        description:
          'Рабочая учетка, vpn, права админа, terminal, git, gitlab, nvm, vscode и т.д.',
      },
      {
        id: 'c8ab1e82-afb5-464e-9c84-dc6b312da0e3',
        title: 'Что-то сделать',
        createDate: '2023-09-04T11:16:45.126Z',
        description: 'Описание того, что надо сделать',
      },
    ],
  })
  .write();

const todoDataBase = database.get('todoList');

const getFullList = () => todoDataBase.value();

const deleteItem = (id) => todoDataBase.remove({ id }).write();

const createItem = async (body) => {
  const { title, description } = body;

  const newItem = {
    id: uniqueId('todoId_'),
    title,
    createDate: new Date().toISOString(),
    description,
  };

  await todoDataBase.push(newItem).write();

  return newItem;
};
const updateItem = async (body) => {
  const { id, title, description } = body;
  const assignedValues = {};
  if (title) {
    assignedValues.title = title;
  }
  if (description) {
    assignedValues.description = description;
  }

  const item = await todoDataBase.find({ id }).assign(assignedValues).write();

  return item;
};

module.exports = { getFullList, deleteItem, createItem, updateItem };
