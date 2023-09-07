import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { AltContent } from '@/_components/alt-content';
import {
  TNormalizedItemData,
  getLoadings,
  getListData,
  getErrors,
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
  if (isLoading || isError) {
    return <AltContent error={isError} loading={isLoading} />;
  }

  return (
    !isLoading &&
    !isError && (
      <div className={cn(BLOCK_NAME)} data-page="home-page">
        <MainLayout>
          <Card>
            <Text color="black" size="h1" text="Todo list" />
            <List listData={listData} />
          </Card>
        </MainLayout>
      </div>
    )
  );
});

const mapStateToProps = (state) => ({
  listData: getListData(state),
  isLoading: getLoadings(state).isListLoading,
  isError: getErrors(state).isListError,
});

export const Page = connect(mapStateToProps)(PageWrapper);
