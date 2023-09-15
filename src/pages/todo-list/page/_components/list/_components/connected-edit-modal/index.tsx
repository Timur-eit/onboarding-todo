import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Modal } from '@wildberries/ui-kit';
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
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { updateTodoItem } from '@/api/requests/update-todo-item';
import { TItemFormValues } from '../_view-components/item-form/types';
import { EditModalContentView } from '../_view-components/edit-modal-content';
import { setActualListToStore } from '../../_utils/set-actual-list-to-store';
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
  setList: typeof setListAction;
  setErrors: typeof setErrorsAction;
  setLoadings: typeof setLoadingsAction;
};

type TProps = TState & TDispatch;

const ConnectedEditModalWrapper = ({
  isOpen,
  listItem,
  setEditModalOpen,
  setEditItemId,
  loadings,
  errors,
  setList,
  setErrors,
  setLoadings,
}: TProps) => {
  const isLoading = loadings[ETodoLoadings.UPDATE_ITEM];
  const isError = errors[ETodoErrors.UPDATE_ITEM];

  const handleClose = useCallback(
    () => setEditModalOpen(false),
    [setEditModalOpen],
  );

  const handleSubmit = useCallback(
    async ({ title, description }: TItemFormValues) => {
      if (listItem) {
        setErrors({ [ETodoErrors.UPDATE_ITEM]: false });
        setLoadings({ [ETodoLoadings.UPDATE_ITEM]: true });
        try {
          const { error, errorText } = await updateTodoItem({
            id: listItem.id,
            title,
            description,
          });

          if (error) {
            throw new Error(errorText || 'update item network error');
          }
          setEditModalOpen(false);
          setEditItemId(null);
          setActualListToStore({ setList, setErrors, setLoadings });
        } catch (error) {
          setErrors({ [ETodoErrors.UPDATE_ITEM]: true });
        } finally {
          setLoadings({ [ETodoLoadings.UPDATE_ITEM]: false });
        }
      }
    },
    [
      listItem,
      setEditItemId,
      setEditModalOpen,
      setErrors,
      setList,
      setLoadings,
    ],
  );

  const handleCancel = useCallback(() => {
    setEditModalOpen(false);
    setEditItemId(null);
  }, [setEditModalOpen, setEditItemId]);

  return (
    <Modal
      isOpened={isOpen}
      isShowCloseIcon
      onClose={handleClose}
      title={i18next.t(i18nKeyMap.titles.edit)}
    >
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <EditModalContentView
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          isError={isError}
          isLoading={isLoading}
          listItem={listItem}
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
  setErrors: setErrorsAction,
  setLoadings: setLoadingsAction,
  setList: setListAction,
};

export const ConnectedEditModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedEditModalWrapper);
