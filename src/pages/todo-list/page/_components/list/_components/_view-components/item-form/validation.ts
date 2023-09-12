import i18next from 'i18next';
import { todoLocalizationMap as i18nKeyMap } from '@/pages/todo-list/page/_localization/localization-map';
import { ItemFormFieldNames, TItemFormValues } from './types';

export type TTodoValidationErrorMessages = {
  [key in ItemFormFieldNames]?: {
    required: string;
  };
};

const todoFormErrors: TTodoValidationErrorMessages = {
  [ItemFormFieldNames.TITLE]: {
    required: i18next.t(i18nKeyMap.validationErrors.title),
  },
  [ItemFormFieldNames.DESC]: {
    required: i18next.t(i18nKeyMap.validationErrors.description),
  },
};

export type TTodoFormErrors = { [key in ItemFormFieldNames]?: string };

export const todoFormValidation = ({
  title,
  description,
}: TItemFormValues): TTodoFormErrors => {
  const errors = {};

  if (!title) {
    errors[ItemFormFieldNames.TITLE] = todoFormErrors.title.required;
  }
  if (!description) {
    errors[ItemFormFieldNames.DESC] = todoFormErrors.description.required;
  }

  return errors;
};
