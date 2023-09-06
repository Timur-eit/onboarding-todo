import { memo } from 'react';
import { ListItem } from '../list-item';
import { AppLoader } from '../app-loader';
import { useList } from './use-list';

export const List = memo(() => {
  const { isLoading, list } = useList();

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <div className="">
      {list.map((item, index) => {
        const { title, createDate } = item;

        return <ListItem key={index} createDate={createDate} title={title} />;
      })}
    </div>
  );
});
