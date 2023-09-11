import { memo, useCallback, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonLink, FormSimpleInput } from '@wildberries/ui-kit';
import i18next from 'i18next';
import classnames from 'classnames/bind';
import { TListItem } from '@/pages/todo-list/_redux/todo-list';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormFieldNames, TItemFormValues } from './types';
import { todoFormValidation } from './validation';
import styles from './index.module.scss';

const BLOCK_NAME = 'ToDoForm';
const cn = classnames.bind(styles);

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
      <div className={cn(BLOCK_NAME)}>
        <Form
          initialValues={getFormInitValues()}
          onSubmit={submitHandler}
          render={({ handleSubmit }) => (
            <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
              <div>
                <Field name={ItemFormFieldNames.TITLE}>
                  {({ input, meta }) => (
                    <FormSimpleInput
                      externalErrorMessage={
                        meta.touched && meta.error && meta.error
                      }
                      id={ItemFormFieldNames.TITLE}
                      input={input}
                      label={i18next.t(i18nKeyMap.fieldLabels.title)}
                      meta={meta}
                      name={ItemFormFieldNames.TITLE}
                      placeholder={i18next.t(i18nKeyMap.fieldLabels.title)}
                      required
                    />
                  )}
                </Field>
              </div>

              <div>
                <Field name={ItemFormFieldNames.DESC}>
                  {({ input, meta }) => (
                    <FormSimpleInput
                      externalErrorMessage={
                        meta.touched && meta.error && meta.error
                      }
                      id={ItemFormFieldNames.DESC}
                      input={input}
                      label={i18next.t(i18nKeyMap.fieldLabels.description)}
                      meta={meta}
                      name={ItemFormFieldNames.DESC}
                      placeholder={i18next.t(
                        i18nKeyMap.fieldLabels.description,
                      )}
                      required
                    />
                  )}
                </Field>
              </div>

              <div className={cn(`${BLOCK_NAME}__button-block`)}>
                <ButtonLink
                  text={i18next.t(i18nKeyMap.buttonLabels.submit)}
                  type="submit"
                  variant="accent"
                />
                <ButtonLink
                  onClick={cancelHandler}
                  text={i18next.t(i18nKeyMap.buttonLabels.cancel)}
                  type="button"
                  variant="remove"
                />
              </div>
            </form>
          )}
          validate={todoFormValidation}
        />
      </div>
    );
  },
);
