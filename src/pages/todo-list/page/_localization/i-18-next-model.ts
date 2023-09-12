export enum ETranslateTodoGroups {
  TITLES = 'titles',
  FIELDS_LABELS = 'fieldLabels',
  BUTTON_LABELS = 'buttonLabels',
  VALIDATION_ERRORS = 'validationErrors',
}

export type Ti18NextTodoModel = {
  [ETranslateTodoGroups.TITLES]: {
    list: string;
    create: string;
    edit: string;
    delete: string;
  };
  [ETranslateTodoGroups.FIELDS_LABELS]: {
    title: string;
    createDate: string;
    description: string;
  };
  [ETranslateTodoGroups.BUTTON_LABELS]: {
    create: string;
    edit: string;
    save: string;
    cancel: string;
    submit: string;
  };
  [ETranslateTodoGroups.VALIDATION_ERRORS]: {
    title: string;
    description: string;
  };
};
