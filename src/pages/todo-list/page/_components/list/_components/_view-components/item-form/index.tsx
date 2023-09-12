import { memo, useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { TListItem } from '@/pages/todo-list/_redux/todo-list';
import { ItemFormFieldNames, TItemFormValues } from './types';
import { todoFormValidation } from './validation';
import { FormView } from './_view-components/form-view';

type TProps = {
  isEdit: boolean;
  itemData?: TListItem;
  handleSubmit: (values: TItemFormValues) => void;
  handleCancel: () => void;
};

export const ItemFormView = memo(
  ({ isEdit, itemData, handleSubmit: onSubmit, handleCancel }: TProps) => {
    const formInitValues = useMemo((): TItemFormValues => {
      if (isEdit) {
        return {
          [ItemFormFieldNames.TITLE]: itemData?.title,
          [ItemFormFieldNames.DESC]: itemData?.description,
        };
      }

      return {
        [ItemFormFieldNames.TITLE]: null,
        [ItemFormFieldNames.DESC]: null,
      };
    }, [isEdit, itemData?.description, itemData?.title]);

    useEffect(() => {
      const escapeHandler = (event: KeyboardEvent): void => {
        if (event.key === 'Escape' || event.key === 'Esc') {
          handleCancel();
        }
      };
      window.addEventListener('keydown', escapeHandler);

      return () => {
        window.removeEventListener('keypress', escapeHandler);
      };
    }, [handleCancel]);

    return (
      <Form
        initialValues={formInitValues}
        onSubmit={onSubmit}
        validate={todoFormValidation}
      >
        {({ handleSubmit, errors, touched }) => (
          <FormView
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            validation={{ errors, touched }}
          />
        )}
      </Form>
    );
  },
);
