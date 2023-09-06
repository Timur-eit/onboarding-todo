const BASIC_URL = 'http://localhost:8081';
const PREFIX_URL = `${BASIC_URL}/api/v1`;
const TODO_LIST_GENERAL_URL = `${PREFIX_URL}/todo-list`;

export const todoListGetAllEndpoint = `${TODO_LIST_GENERAL_URL}/get-all`;
export const todoListDeleteItemEndpoint = `${TODO_LIST_GENERAL_URL}/delete-item`;
export const todoListCreateItemEndpoint = `${TODO_LIST_GENERAL_URL}/create-item`;
export const todoListUpdateItemEndpoint = `${TODO_LIST_GENERAL_URL}/update-item`;
