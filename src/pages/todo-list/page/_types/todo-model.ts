export type TListItem = {
  id?: string;
  title: string;
  description: string;
  createDate: string;
};

export type TConvertedListItem = TListItem & {
  radioValue: string;
  content: {
    title: string;
    createDate: string;
    description: string;
  };
};
