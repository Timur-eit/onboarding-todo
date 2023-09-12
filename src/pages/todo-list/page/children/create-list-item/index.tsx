import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { CreatePage } from './page';
import { CREATE_ITEM_PAGE_PAGE_NODE } from './_constants';
import { storeInjectConfig } from './store-inject-config';

const pageNode = CREATE_ITEM_PAGE_PAGE_NODE;

const action = async ({ fromState, toState }) => ({
  title: i18next.t(i18nKeyMap.titles.create),
  content: (
    <AppLayout>
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return (
              <ReduxStoreLoader
                fromState={fromState}
                storeInjectConfig={storeInjectConfig()}
                toState={toState}
              >
                <CreatePage />
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
