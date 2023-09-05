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
        name: 'Настроить окружение',
        description:
          'Рабочая учетка, vpn, права админа, terminal, git, gitlab, nvm, vscode и т.д.',
        createDate: '2023-09-04T11:13:15.126Z',
      },
      {
        id: 'c8ab1e82-afb5-464e-9c84-dc6b312da0e3',
        name: 'Что-то сделать',
        description: 'Описание того, что надо сделать',
        createDate: '2023-09-04T11:16:45.126Z',
      },
    ],
  })
  .write();

const todoDataBase = database.get('todoList');

const getFullList = () => todoDataBase.value();

const deleteItem = (id) => todoDataBase.remove({ id }).write();

const createItem = async (body) => {
  const { name, description } = body;
  const newItem = {
    id: uniqueId('todoId_'),
    name,
    description,
    createDate: new Date().toISOString(),
  };

  await todoDataBase.push(newItem).write();

  return newItem;
};
const updateItem = async (body) => {
  const { id, name, description } = body;
  const item = await todoDataBase
    .find({ id })
    .assign({ name, description })
    .write();

  return item;
};

module.exports = { getFullList, deleteItem, createItem, updateItem };
