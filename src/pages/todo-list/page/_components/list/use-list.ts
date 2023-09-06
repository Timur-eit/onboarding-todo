import { useCallback, useEffect, useState } from 'react';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import { ConvertedListItem } from '../../_types/todo-model';
import { normalizeListData } from './helpers';

export const useList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<ConvertedListItem[]>([]);
  // isError

  const fetchListData = useCallback(async () => {
    setIsLoading(true);
    try {
      // todo delay
      const response = await getTodoList();

      const { error, data } = response;

      // TODO типизировать data
      if (!error && data) {
        const normalizeData = normalizeListData(data);
        setList(() => normalizeData);
      }
    } catch (err) {
      // TODO обработка ошибок с бэка !!
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
