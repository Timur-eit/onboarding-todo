import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Modal, Text } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import {
  ETodoErrors,
  ETodoLoadings,
  TListItem,
  TTodoListState,
  getErrors,
  getIsOpen,
  getListItem,
  getLoadings,
  setEditIItemIdAction,
  setEditIModalOpenAction,
  updateItemAction,
} from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { TItemFormValues } from '../_view-components/item-form/types';
import { EditModalContentView } from '../_view-components/edit-modal-content';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'EditModal';
const cn = classnames.bind(styles);

type TStateMap = {
  isOpen: boolean;
  listItem: TListItem;
  loadings: TTodoListState['loadings'];
  errors: TTodoListState['errors'];
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
  updateItem,
}: TProps) => {
  const isLoading = loadings[ETodoLoadings.UPDATE_ITEM];
  const isError = errors[ETodoErrors.UPDATE_ITEM];

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

  return (
    <Modal isOpened={isOpen} isShowCloseIcon onClose={close}>
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <Text
          color="black"
          size="h2"
          text={i18next.t(i18nKeyMap.titles.edit)}
        />
        <EditModalContentView
          editData={{ listItem, handleCancel, handleSubmit }}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: getIsOpen(state),
  listItem: getListItem(state),
  loadings: getLoadings(state),
  errors: getErrors(state),
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
