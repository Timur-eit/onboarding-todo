import { useCallback, useEffect, useState } from 'react';
import { AccordionItemType } from '@wildberries/ui-kit';
import { getTodoList } from '@/api/requests/get-todo-list-all';
import { normalizeListData } from './helpers';

type NormalizedItemData = AccordionItemType;

export const useList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<NormalizedItemData[]>([]);

  const fetchListData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getTodoList();
      const { error, data } = response;
      // TODO типизировать data
      if (!error && data) {
        const normalizeData = normalizeListData(data);
        setList(() => normalizeData);
      }
    } catch (err) {
      // TODO обработка ошибок с бэка
      // снеки ?
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
