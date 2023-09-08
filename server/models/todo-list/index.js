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
        radioValue: 'c8ab1e82-afb5-464e-9c84-dc6b311da0e7',
        title: 'Настроить окружение',
        content: {
          title: 'Настроить окружение',
          description:
            'Рабочая учетка, vpn, права админа, terminal, git, gitlab, nvm, vscode и т.д.',
          createDate: '2023-09-04T11:13:15.126Z',
        },
      },
      {
        id: 'c8ab1e82-afb5-464e-9c84-dc6b312da0e3',
        radioValue: 'c8ab1e82-afb5-464e-9c84-dc6b312da0e3',
        title: 'Что-то сделать',
        content: {
          title: 'Что-то сделать',
          description: 'Описание того, что надо сделать',
          createDate: '2023-09-04T11:16:45.126Z',
        },
      },
    ],
  })
  .write();

const todoDataBase = database.get('todoList');

const getFullList = () => todoDataBase.value();

const deleteItem = (id) => todoDataBase.remove({ id }).write();

const createItem = async (body) => {
  const { title, description } = body;

  const id = uniqueId('todoId_');
  const newItem = {
    id,
    radioValue: id,
    title,
    content: {
      title,
      description,
      createDate: new Date().toISOString(),
    },
  };

  await todoDataBase.push(newItem).write();

  return newItem;
};
const updateItem = async (body) => {
  const { id, title, description } = body;
  const item = todoDataBase.find({ id });
  const { createDate } = item.value().content;

  await item
    .assign({ title })
    .assign({ content: { title, description, createDate } })
    .write();

  return item;
};

module.exports = { getFullList, deleteItem, createItem, updateItem };
