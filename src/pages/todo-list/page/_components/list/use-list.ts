import { useCallback, useEffect, useState } from 'react';
import { ListItemType } from '../../_types/todo-model';

const mockData: ListItemType[] = [
  {
    id: 'id1',
    title: 'title1',
    description: 'description1',
    createDate: 'createDate1',
  },
  {
    id: 'id2',
    title: 'title2',
    description: 'description2',
    createDate: 'createDate2',
  },
  {
    id: 'id3',
    title: 'title3',
    description: 'description3',
    createDate: 'createDate3',
  },
  {
    id: 'id4',
    title: 'title4',
    description: 'description4',
    createDate: 'createDate4',
  },
];

export const useList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<ListItemType[]>([]);

  const fetchListData = useCallback(async () => {
    setIsLoading(true);
    try {
      // todo fetchApi
      setTimeout(() => Promise.resolve(setList(() => mockData)), 1000);
    } catch (err) {
      // TODO обработка ошибок с бэка
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListData();
  }, [fetchListData]);

  return { isLoading, list };
};
