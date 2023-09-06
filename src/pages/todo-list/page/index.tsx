import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import styles from './index.module.scss';
import { List } from './_components/list';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Home-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <MainLayout>
      <Card>
        <Text color="black" size="h1" text="Todo list" />
        <List />
      </Card>
    </MainLayout>
  </div>
));
