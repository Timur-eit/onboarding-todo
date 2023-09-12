import { memo, useCallback, useEffect } from 'react';
import { Form } from 'react-final-form';
import { TListItem } from '@/pages/todo-list/_redux/todo-list';
import { ItemFormFieldNames, TItemFormValues } from './types';
import { todoFormValidation } from './validation';
import { FormView } from './_view-components/form-view';

type TProps = {
  isEdit: boolean;
  itemData?: TListItem;
  submitHandler: (values: TItemFormValues) => void;
  cancelHandler: () => void;
};

export const ItemFormView = memo(
  ({ isEdit, itemData, submitHandler, cancelHandler }: TProps) => {
    const getFormInitValues = useCallback((): TItemFormValues => {
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
          cancelHandler();
        }
      };
      window.addEventListener('keydown', escapeHandler);

      return () => {
        window.removeEventListener('keypress', escapeHandler);
      };
    }, [cancelHandler]);

    return (
      <Form
        initialValues={getFormInitValues()}
        onSubmit={submitHandler}
        render={({ handleSubmit }) => (
          <FormView cancel={cancelHandler} submit={handleSubmit} />
        )}
        validate={todoFormValidation}
      />
    );
  },
);
