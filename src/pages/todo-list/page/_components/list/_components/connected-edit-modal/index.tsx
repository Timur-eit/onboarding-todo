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
  initLoadManagerAction,
  setEditIItemIdAction,
  setEditModalOpenAction,
} from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { updateListConfig } from '@/pages/todo-list/store-inject-config/update-list-config';
import { TItemFormValues } from '../_view-components/item-form/types';
import { EditModalContentView } from '../_view-components/edit-modal-content';
import { getUpdateRequestBody } from '../../_utils/get-update-request-body';
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
  initLoadManager: typeof initLoadManagerAction;
};

type TProps = TState & TDispatch;

const ConnectedEditModalWrapper = ({
  isOpen,
  listItem,
  setEditModalOpen,
  setEditItemId,
  loadings,
  errors,
  initLoadManager,
}: TProps) => {
  const isLoading = loadings[ETodoLoadings.UPDATE_ITEM];
  const isError = errors[ETodoErrors.UPDATE_ITEM];

  const handleClose = useCallback(
    () => setEditModalOpen(false),
    [setEditModalOpen],
  );

  const handleSubmit = useCallback(
    (formValues: TItemFormValues) => {
      if (listItem) {
        initLoadManager({
          requestConfigList: [
            updateListConfig(
              getUpdateRequestBody({ initItemData: listItem, formValues }),
            ),
          ],
        });
      }
    },
    [initLoadManager, listItem],
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
  initLoadManager: initLoadManagerAction,
};

export const ConnectedEditModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedEditModalWrapper);
