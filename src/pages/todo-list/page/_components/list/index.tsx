import { memo } from 'react';
import { AppLoader } from '@/_components/app-loader';
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

        // TODO комопоент отображения элемента списка
        // return <ListItem key={index} createDate={createDate} title={title} />;
        return (
          <div key={index}>
            <span>{title}</span>
            <span>{createDate}</span>;
          </div>
        );
      })}
    </div>
  );
});
