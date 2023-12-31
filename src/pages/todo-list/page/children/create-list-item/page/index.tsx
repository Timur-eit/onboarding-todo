import React, { memo } from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '@/_components/main-layout';
import { Card } from '@/_components/card-layout';
import {
  ETodoErrors,
  ETodoLoadings,
  TTodoListState,
  getErrors,
  getLoadings,
} from '@/pages/todo-list/_redux/todo-list';
import { AltContent } from '@/_components/alt-content';
import { ConnectedCreateItem } from './_components/connected-create-item';

type TProps = {
  loadings: TTodoListState['loadings'];
  errors: TTodoListState['errors'];
};

const CreatePageWrapper = memo(({ loadings, errors }: TProps) => {
  const isLoading = loadings[ETodoLoadings.ADD_ITEM];
  const isError = errors[ETodoErrors.ADD_ITEM];

  if (isLoading || isError) {
    return <AltContent error={isError} loading={isLoading} />;
  }

  return (
    <MainLayout>
      <Card>
        <ConnectedCreateItem />
      </Card>
    </MainLayout>
  );
});

const mapStateToProps = (state) => ({
  loadings: getLoadings(state),
  errors: getErrors(state),
});

export const CreatePage = connect(mapStateToProps)(CreatePageWrapper);
