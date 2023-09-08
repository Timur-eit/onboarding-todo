import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import styles from './index.module.scss';
import { List } from './_components/list';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Home-page';

// todo добавить реализацию лоадера (после подключения redux)
export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <MainLayout>
      <Card>
        <Text
          color="black"
          size="h1"
          text={i18next.t(`${APP_NAMESPACE}:todo.list.listTitle`)}
        />
        <List />
      </Card>
    </MainLayout>
  </div>
));
