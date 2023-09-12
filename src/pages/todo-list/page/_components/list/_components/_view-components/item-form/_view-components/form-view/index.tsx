import { memo } from 'react';
import { Field } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import classnames from 'classnames/bind';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormFieldNames } from '../../types';
import { TTodoFormErrors } from '../../validation';
import styles from './index.module.scss';

const BLOCK_NAME = 'Form';
const cn = classnames.bind(styles);

type TProps = {
  submit: React.FormEventHandler<HTMLFormElement>;
  cancel: () => void;
  validation: {
    errors: TTodoFormErrors;
    touched: TTodoFormErrors;
  };
};

export const FormView = memo(
  ({ submit, cancel, validation: { touched, errors } }: TProps) => (
    <form className={cn(BLOCK_NAME)} onSubmit={submit}>
      <Field
        component={FormSimpleInput}
        externalErrorMessage={
          touched[ItemFormFieldNames.TITLE] && errors[ItemFormFieldNames.TITLE]
        }
        id={ItemFormFieldNames.TITLE}
        label={i18next.t(i18nKeyMap.fieldLabels.title)}
        name={ItemFormFieldNames.TITLE}
        placeholder={i18next.t(i18nKeyMap.fieldLabels.title)}
        required
      />

      <Field
        component={FormTextAreaInput}
        externalErrorMessage={
          touched[ItemFormFieldNames.DESC] && errors[ItemFormFieldNames.DESC]
        }
        id={ItemFormFieldNames.DESC}
        label={i18next.t(i18nKeyMap.fieldLabels.description)}
        name={ItemFormFieldNames.DESC}
        placeholder={i18next.t(i18nKeyMap.fieldLabels.description)}
        required
        rows={5}
      />

      <div className={cn(`${BLOCK_NAME}__button-block`)}>
        <ButtonLink
          text={i18next.t(i18nKeyMap.buttonLabels.submit)}
          type="submit"
          variant="accent"
        />
        <ButtonLink
          onClick={cancel}
          text={i18next.t(i18nKeyMap.buttonLabels.cancel)}
          type="button"
          variant="remove"
        />
      </div>
    </form>
  ),
);
