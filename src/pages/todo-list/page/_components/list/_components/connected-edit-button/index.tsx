import { memo, useCallback } from 'react';
import { ButtonLink } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import {
  setEditIItemIdAction,
  setEditModalOpenAction,
} from '@/pages/todo-list/_redux/todo-list';

type TDispatch = {
  setEditModalOpen: typeof setEditModalOpenAction;
  setEditItemId: typeof setEditIItemIdAction;
};

type TProps = { itemId: string } & TDispatch;

export const EditButtonWrapper = memo(
  ({ itemId, setEditItemId, setEditModalOpen }: TProps) => {
    const handleClick = useCallback(() => {
      setEditModalOpen(true);
      setEditItemId(itemId);
    }, [itemId, setEditModalOpen, setEditItemId]);

    return (
      <ButtonLink
        onClick={handleClick}
        size="small"
        text={i18next.t(i18nKeyMap.buttonLabels.edit)}
        variant="adaptive"
      />
    );
  },
);

const mapDispatchToProps = {
  setEditModalOpen: setEditModalOpenAction,
  setEditItemId: setEditIItemIdAction,
};

export const ConnectedEditButton = connect(
  null,
  mapDispatchToProps,
)(EditButtonWrapper);
