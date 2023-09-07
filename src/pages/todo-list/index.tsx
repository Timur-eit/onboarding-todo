import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  injectAsyncReducer,
  injectAsyncSaga,
} from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import Page from './page';
import { TODO_LIST_PAGE_NAME } from './page/_constants';
import reducerTodoList, {
  TODO_LIST_REDUCER_NAME,
  getTodoListDataAction,
} from './_redux/todo-list';
import { getTodoListDataWatcherSaga } from './_redux/todo-list/sagas/get-todo-list-data-watcher-saga';

const pageNode = TODO_LIST_PAGE_NAME;

const action = async ({ store }) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  injectAsyncReducer({
    store,
    name: TODO_LIST_REDUCER_NAME,
    reducer: reducerTodoList,
  });

  injectAsyncSaga({
    store,
    name: 'getTodoListDataWatcherSaga',
    saga: getTodoListDataWatcherSaga,
  });

  store.dispatch(getTodoListDataAction());

  return {
    title: 'Todo',
    content: (
      <AppLayout>
        <RouteNode nodeName={pageNode}>
          {({ route, content }) => {
            if (route.name === pageNode) {
              return <Page />;
            }

            return content;
          }}
        </RouteNode>
      </AppLayout>
    ),
  };
};

export default action;
