import { memo } from 'react';
import classnames from 'classnames/bind';
import { TListItem } from '@/pages/todo-list/_redux/todo-list';
import { AltContent } from '@/_components/alt-content';
import { ItemFormView } from '../item-form';
import { TItemFormValues } from '../item-form/types';
import styles from './index.module.scss';

const COMPONENT_STYLE_NAME = 'EditModalContent';
const cn = classnames.bind(styles);

type TProps = {
  isLoading: boolean;
  isError: boolean;
  editData: {
    listItem: TListItem;
    handleCancel: () => void;
    handleSubmit: (values: TItemFormValues) => void;
  };
};

export const EditModalContentView = memo(
  ({
    isLoading,
    isError,
    editData: { listItem, handleCancel, handleSubmit },
  }: TProps) => {
    if (isLoading || isError) {
      return (
        <div className={cn(COMPONENT_STYLE_NAME)}>
          <div className={cn(`${COMPONENT_STYLE_NAME}__alt-content`)}>
            <AltContent error={isError} loading={isLoading} />
          </div>
        </div>
      );
    }

    return (
      <div className={cn(COMPONENT_STYLE_NAME)}>
        <ItemFormView
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          isEdit
          itemData={listItem}
        />
      </div>
    );
  },
);
