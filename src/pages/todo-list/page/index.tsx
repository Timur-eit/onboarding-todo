import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { connect } from 'react-redux';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import { AltContent } from '@/_components/alt-content';
import {
  getLoadings,
  getErrors,
  TTodoListState,
  ETodoLoadErrorState,
} from '../_redux/todo-list';
import styles from './index.module.scss';
import { List } from './_components/list';

const BLOCK_NAME = 'Home-page';
const cn = classnames.bind(styles);

type TProps = {
  loadings: TTodoListState['loadings'];
  errors: TTodoListState['errors'];
};

const PageWrapper = memo(({ loadings, errors }: TProps) => {
  const isLoading = loadings[ETodoLoadErrorState.GET_ALL];
  const isError = errors[ETodoLoadErrorState.GET_ALL];

  if (isLoading || isError) {
    return <AltContent error={isError} loading={isLoading} />;
  }

  return (
    <div className={cn(BLOCK_NAME)} data-page="home-page">
      <MainLayout>
        <Card>
          <Text color="black" size="h1" text="Todo list" />
          <List />
        </Card>
      </MainLayout>
    </div>
  );
});

const mapStateToProps = (state) => ({
  loadings: getLoadings(state),
  errors: getErrors(state),
});

export const Page = connect(mapStateToProps)(PageWrapper);
