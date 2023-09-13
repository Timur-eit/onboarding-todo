import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Modal, Text } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import {
  ETodoErrors,
  ETodoLoadings,
  TListItem,
  TTodoListState,
  getCompleteStatuses,
  getErrors,
  getIsOpen,
  getListItem,
  getLoadings,
  setEditIItemIdAction,
  setEditIModalOpenAction,
  updateItemAction,
} from '@/pages/todo-list/_redux/todo-list';
import { AltContent } from '@/_components/alt-content';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormView } from '../_view-components/item-form';
import { TItemFormValues } from '../_view-components/item-form/types';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'EditModal';
const cn = classnames.bind(styles);

type TStateMap = {
  isOpen: boolean;
  listItem: TListItem;
  loadings: TTodoListState['loadings'];
  errors: TTodoListState['errors'];
  completeState: ReturnType<typeof getCompleteStatuses>;
};

type TDispatchMap = {
  setEditIModalOpen: typeof setEditIModalOpenAction;
  setEditItemId: typeof setEditIItemIdAction;
  updateItem: typeof updateItemAction;
};

type TProps = TStateMap & TDispatchMap;

const ConnectedEditModalWrapper = ({
  isOpen,
  listItem,
  setEditIModalOpen,
  setEditItemId,
  loadings,
  errors,
  completeState,
  updateItem,
}: TProps) => {
  const isLoading = loadings[ETodoLoadings.UPDATE_ITEM];
  const isError = errors[ETodoErrors.UPDATE_ITEM];
  const { isEdited } = completeState;

  const close = useCallback(
    () => setEditIModalOpen(false),
    [setEditIModalOpen],
  );

  const handleSubmit = useCallback(
    ({ title, description }: TItemFormValues) => {
      if (listItem) {
        updateItem({ id: listItem.id, title, description });
      }
    },
    [listItem, updateItem],
  );

  const handleCancel = useCallback(() => {
    setEditIModalOpen(false);
    setEditItemId(null);
  }, [setEditIModalOpen, setEditItemId]);

  useEffect(() => {
    if (isEdited) {
      handleCancel();
    }
  }, [handleCancel, isEdited]);

  const modalContent = useMemo(() => {
    if (isLoading || isError) {
      return (
        <div className={cn(`${COMPONENT_STYLE_NAME}__alt-content`)}>
          <AltContent error={isError} loading={isLoading} />
        </div>
      );
    }

    return (
      <ItemFormView
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        isEdit
        itemData={listItem}
      />
    );
  }, [handleCancel, handleSubmit, isError, isLoading, listItem]);

  return (
    <Modal isOpened={isOpen} isShowCloseIcon onClose={close}>
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <Text
          color="black"
          size="h2"
          text={i18next.t(i18nKeyMap.titles.edit)}
        />
        {modalContent}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: getIsOpen(state),
  listItem: getListItem(state),
  loadings: getLoadings(state),
  errors: getErrors(state),
  completeState: getCompleteStatuses(state),
});

const mapDispatchToProps = {
  setEditIModalOpen: setEditIModalOpenAction,
  setEditItemId: setEditIItemIdAction,
  updateItem: updateItemAction,
};

export const ConnectedEditModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedEditModalWrapper);
