import { useCallback, useEffect, useState } from 'react';
import { ListItemType } from '../../types';

const mockData: ListItemType[] = [
  {
    id: 'id1',
    title: 'title1',
    description: 'description',
    createDate: 'createDate1',
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
