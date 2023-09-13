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
  setEditModalOpenAction,
  updateItemAction,
} from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { TItemFormValues } from '../_view-components/item-form/types';
import { EditModalContentView } from '../_view-components/edit-modal-content';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'EditModal';
const cn = classnames.bind(styles);

type TState = {
  isOpen: boolean;
  listItem: TListItem;
  loadings: TTodoListState['loadings'];
  errors: TTodoListState['errors'];
};

type TDispatch = {
  setEditModalOpen: typeof setEditModalOpenAction;
  setEditItemId: typeof setEditIItemIdAction;
  updateItem: typeof updateItemAction;
};

type TProps = TState & TDispatch;

const ConnectedEditModalWrapper = ({
  isOpen,
  listItem,
  setEditModalOpen,
  setEditItemId,
  loadings,
  errors,
  updateItem,
}: TProps) => {
  const isLoading = loadings[ETodoLoadings.UPDATE_ITEM];
  const isError = errors[ETodoErrors.UPDATE_ITEM];

  const close = useCallback(() => setEditModalOpen(false), [setEditModalOpen]);

  const handleSubmit = useCallback(
    ({ title, description }: TItemFormValues) => {
      if (listItem) {
        updateItem({ id: listItem.id, title, description });
      }
    },
    [listItem, updateItem],
  );

  const handleCancel = useCallback(() => {
    setEditModalOpen(false);
    setEditItemId(null);
  }, [setEditModalOpen, setEditItemId]);

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
  setEditModalOpen: setEditModalOpenAction,
  setEditItemId: setEditIItemIdAction,
  updateItem: updateItemAction,
};

export const ConnectedEditModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedEditModalWrapper);
