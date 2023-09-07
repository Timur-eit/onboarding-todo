import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { AppLoader } from '@/_components/app-loader';
import { AppError } from '@/_components/app-error';
import {
  TNormalizedItemData,
  getIsListError,
  getIsListLoading,
  getListData,
} from '../_redux/todo-list';
import styles from './index.module.scss';
import { List } from './_components/list';

const BLOCK_NAME = 'Home-page';
const cn = classnames.bind(styles);

type TProps = {
  listData: TNormalizedItemData[];
  isLoading: boolean;
  isError: boolean;
};

const PageWrapper = memo(({ listData, isLoading, isError }: TProps) => {
  if (isLoading) {
    return <AppLoader />;
  }
  if (isError) {
    return <AppError />;
  }

  return (
    <div className={cn(BLOCK_NAME)} data-page="home-page">
      <MainLayout>
        <Card>
          <Text color="black" size="h1" text="Todo list" />
          <List listData={listData} />
        </Card>
      </MainLayout>
    </div>
  );
});

const mapStateToProps = (state) => ({
  listData: getListData(state),
  isLoading: getIsListLoading(state),
  isError: getIsListError(state),
});

export const Page = connect(mapStateToProps)(PageWrapper);
