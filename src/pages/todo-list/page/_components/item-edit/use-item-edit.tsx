import { useEffect, useState } from 'react';
import { ListItemType } from '../../types';

type ItemCardType = ListItemType;

const mockData: ItemCardType = {
  id: '1',
  title: 'title',
  description: 'description',
  createDate: new Date().toLocaleString(),
};

export const useItemEdit = () => {
  // TODO получение itemId через params ?
  const [isLoading, setIsLoading] = useState(false);
  const [itemCard, setItemCard] = useState<ItemCardType | null>(null);

  useEffect(() => {
    // TODO fetch card by ID request
    const mockFetch = async () => {
      setIsLoading(true);
      try {
        await new Promise((res) => {
          setTimeout(() => res(setItemCard(mockData)), 1200);
        });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    mockFetch();
  }, []);

  return { isLoading, itemCard };
};
