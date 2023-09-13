import { memo, useCallback } from 'react';
import { ButtonLink } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import {
  setEditIItemIdAction,
  setEditIModalOpenAction,
} from '@/pages/todo-list/_redux/todo-list';

type TDispatchMap = {
  setEditIModalOpen: typeof setEditIModalOpenAction;
  setEditItemId: typeof setEditIItemIdAction;
};

type TProps = { itemId: string } & TDispatchMap;

export const ConnectedEditButtonWrapper = memo(
  ({ itemId, setEditItemId, setEditIModalOpen }: TProps) => {
    const handleClick = useCallback(() => {
      setEditIModalOpen(true);
      setEditItemId(itemId);
    }, [itemId, setEditIModalOpen, setEditItemId]);

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
  setEditIModalOpen: setEditIModalOpenAction,
  setEditItemId: setEditIItemIdAction,
};

export const ConnectedEditButton = connect(
  null,
  mapDispatchToProps,
)(ConnectedEditButtonWrapper);
