import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
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

  const submitHandler = useCallback(
    ({ title, description }: TItemFormValues) => {
      if (listItem) {
        updateItem({ id: listItem.id, title, description });
      }
    },
    [listItem, updateItem],
  );

  const cancelHandler = useCallback(() => {
    setEditIModalOpen(false);
    setEditItemId(null);
  }, [setEditIModalOpen, setEditItemId]);

  useEffect(() => {
    if (isEdited) {
      cancelHandler();
    }
  }, [cancelHandler, isEdited]);

  // TODO i18n + title

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
        handleCancel={cancelHandler}
        handleSubmit={submitHandler}
        isEdit
        itemData={listItem}
      />
    );
  }, [cancelHandler, isError, isLoading, listItem, submitHandler]);

  return (
    <Modal isOpened={isOpen} isShowCloseIcon onClose={close}>
      <div className={cn(COMPONENT_STYLE_NAME)}>{modalContent}</div>
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
