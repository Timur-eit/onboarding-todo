import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { ETranslateTodoGroups, Ti18NextTodoModel } from './i-18-next-model';

const SUB_NAMESPACE = 'todo';

export const todoLocalizationMap: Ti18NextTodoModel = {
  [ETranslateTodoGroups.TITLES]: {
    list: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.TITLES}.list`,
    create: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.TITLES}.create`,
    edit: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.TITLES}.edit`,
    delete: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.TITLES}.delete`,
  },
  [ETranslateTodoGroups.FIELDS_LABELS]: {
    createDate: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.FIELDS_LABELS}.createDate`,
    description: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.FIELDS_LABELS}.description`,
  },
  [ETranslateTodoGroups.BUTTON_LABELS]: {
    create: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.BUTTON_LABELS}.create`,
    edit: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.BUTTON_LABELS}.edit`,
    save: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.BUTTON_LABELS}.save`,
    cancel: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.BUTTON_LABELS}.cancel`,
    submit: `${APP_NAMESPACE}:${SUB_NAMESPACE}.${ETranslateTodoGroups.BUTTON_LABELS}.submit`,
  },
};
