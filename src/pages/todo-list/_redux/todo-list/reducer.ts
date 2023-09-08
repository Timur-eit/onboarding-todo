import {
  SET_ERRORS,
  SET_LOADINGS,
  setErrorsAction,
  setLoadingsAction,
  setListAction,
  SET_LIST,
} from './actions';
import { ETodoLoadErrorState, TTodoListState } from './types';

const initialLoadingErrorState = {
  [ETodoLoadErrorState.GET_ALL]: false,
  [ETodoLoadErrorState.ADD_ITEM]: false,
  [ETodoLoadErrorState.UPDATE_ITEM]: false,
  [ETodoLoadErrorState.DELETE_ITEM]: false,
};

export const initialState: TTodoListState = {
  loadings: { ...initialLoadingErrorState },
  errors: { ...initialLoadingErrorState },
  listData: [],
};

export type TActions = ReturnType<
  typeof setErrorsAction | typeof setListAction | typeof setLoadingsAction
>;

const reducer = (
  state: TTodoListState = initialState,
  { type, payload }: TActions,
): TTodoListState => {
  switch (type) {
    case SET_LOADINGS: {
      return {
        ...state,
        loadings: {
          ...state.loadings,
          ...payload,
        },
      };
    }
    case SET_ERRORS: {
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        },
      };
    }
    case SET_LIST:
      return {
        ...state,
        listData: payload,
      };
    default:
      return state;
  }
};

export default reducer;
