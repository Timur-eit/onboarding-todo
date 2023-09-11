import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import {
  CREATE_ITEM_WATCHER_SAGA_NAME,
  TODO_LIST_REDUCER_NAME,
} from '@/pages/todo-list/_redux/todo-list';
import { createItemWatcherSaga } from '@/pages/todo-list/_redux/todo-list/sagas/create-item-watcher-saga';
import reducerTodoList from '@/pages/todo-list/_redux/todo-list/reducer';
import { Page } from './page';
import { CREATE_ITEM_PAGE_PAGE_NODE } from './_constants';

const pageNode = CREATE_ITEM_PAGE_PAGE_NODE;

const action = async ({ fromState, toState }) => ({
  title: 'CreateNewItem',
  content: (
    <AppLayout>
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return (
              <ReduxStoreLoader
                fromState={fromState}
                storeInjectConfig={{
                  reducersToInject: [
                    {
                      name: TODO_LIST_REDUCER_NAME,
                      reducer: reducerTodoList,
                    },
                  ],
                  sagasToInject: [
                    {
                      name: CREATE_ITEM_WATCHER_SAGA_NAME,
                      saga: createItemWatcherSaga,
                    },
                  ],
                }}
                toState={toState}
              >
                <Page />
              </ReduxStoreLoader>
            );
          }

          return content;
        }}
      </RouteNode>
    </AppLayout>
  ),
});

export default action;
