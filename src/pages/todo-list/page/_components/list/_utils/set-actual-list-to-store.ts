import { getTodoList } from '@/api/requests/get-todo-list-all';
import {
  ETodoErrors,
  ETodoLoadings,
  setErrorsAction,
  setListAction,
  setLoadingsAction,
} from '@/pages/todo-list/_redux/todo-list';

type TParams = {
  setList: typeof setListAction;
  setErrors: typeof setErrorsAction;
  setLoadings: typeof setLoadingsAction;
};

export const setActualListToStore = async ({
  setList,
  setErrors,
  setLoadings,
}: TParams): Promise<void> => {
  setErrors({ [ETodoErrors.GET_ALL]: false });
  setLoadings({ [ETodoLoadings.GET_ALL]: true });
  try {
    const { data, error, errorText } = await getTodoList();
    if (error) {
      throw new Error(errorText || 'get list network error');
    }
    setList(data);
  } catch (error) {
    setErrors({ [ETodoErrors.GET_ALL]: true });
  } finally {
    setLoadings({ [ETodoLoadings.GET_ALL]: false });
  }
};
