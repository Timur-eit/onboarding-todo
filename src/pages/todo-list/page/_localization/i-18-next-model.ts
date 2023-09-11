export enum ETranslateTodoGroups {
  TITLES = 'titles',
  FIELDS_LABELS = 'fieldLabels',
  BUTTON_LABELS = 'buttonLabels',
}

export type Ti18NextTodoModel = {
  [ETranslateTodoGroups.TITLES]: {
    list: string;
    create: string;
    edit: string;
    delete: string;
  };
  [ETranslateTodoGroups.FIELDS_LABELS]: {
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
};
