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
import styles from './index.module.scss';

const BLOCK_NAME = 'Form';
const cn = classnames.bind(styles);

type TProps = {
  submit: React.FormEventHandler<HTMLFormElement>;
  cancel: () => void;
};

export const FormView = memo(({ submit, cancel }: TProps) => (
  <form className={cn(BLOCK_NAME)} onSubmit={submit}>
    <Field name={ItemFormFieldNames.TITLE}>
      {({ input, meta }) => (
        <FormSimpleInput
          externalErrorMessage={meta.touched && meta.error && meta.error}
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

    <Field name={ItemFormFieldNames.DESC}>
      {({ input, meta }) => (
        <FormTextAreaInput
          externalErrorMessage={meta.touched && meta.error && meta.error}
          id={ItemFormFieldNames.DESC}
          input={input}
          label={i18next.t(i18nKeyMap.fieldLabels.description)}
          meta={meta}
          name={ItemFormFieldNames.DESC}
          placeholder={i18next.t(i18nKeyMap.fieldLabels.description)}
          required
          rows={5}
        />
      )}
    </Field>

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
));
