export enum ItemFormFieldNames {
  TITLE = 'title',
  DESC = 'description',
}

export type TItemFormValues = {
  [ItemFormFieldNames.TITLE]: string | null;
  [ItemFormFieldNames.DESC]: string | null;
};
