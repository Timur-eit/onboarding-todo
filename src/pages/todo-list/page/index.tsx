import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { AppLoader } from '@/_components/app-loader';
import { AppError } from '@/_components/app-error';
import {
  NormalizedItemData,
  getIsListError,
  getIsListLoading,
  getListData,
} from '../_redux/todo-list';
import styles from './index.module.scss';
import { List } from './_components/list';

const BLOCK_NAME = 'Home-page';
const cn = classnames.bind(styles);

export type PropsType = {
  listData: NormalizedItemData[];
  isLoading: boolean;
  isError: boolean;
};

const Page = memo(({ listData, isLoading, isError }: PropsType) => {
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

export default connect(mapStateToProps)(Page);
