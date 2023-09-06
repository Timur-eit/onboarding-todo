export type ListItemType = {
  id?: string;
  title: string;
  description: string;
  createDate: string;
};

export type ConvertedListItem = ListItemType & {
  radioValue: string;
  content: {
    title: string;
    description: string;
  };
};
