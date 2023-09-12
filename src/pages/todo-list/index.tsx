import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ListPage } from './page';
import { TODO_LIST_PAGE_NAME } from './page/_constants';
import { storeInjectConfig } from './store-inject-config';

const pageNode = TODO_LIST_PAGE_NAME;

const action = async ({ store, toState, fromState }) => ({
  title: i18next.t(i18nKeyMap.titles.list),
  content: (
    <AppLayout>
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return (
              <ReduxStoreLoader
                fromState={fromState}
                storeInjectConfig={storeInjectConfig({ store })}
                toState={toState}
              >
                <ListPage />
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
