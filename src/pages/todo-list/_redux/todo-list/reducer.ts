import {
  SET_ERRORS,
  SET_LOADINGS,
  setErrorsAction,
  setLoadingsAction,
  setListAction,
  SET_LIST,
  SET_EDIT_MODAL_OPEN,
  setEditModalOpenAction,
  setEditIItemIdAction,
  SET_EDIT_ITEM_ID,
} from './actions';
import { ETodoErrors, ETodoLoadings, TTodoListState } from './types';

export const initialState: TTodoListState = {
  loadings: {
    [ETodoLoadings.GET_ALL]: false,
    [ETodoLoadings.ADD_ITEM]: false,
    [ETodoLoadings.UPDATE_ITEM]: false,
    [ETodoLoadings.DELETE_ITEM]: false,
  },
  errors: {
    [ETodoErrors.GET_ALL]: false,
    [ETodoErrors.ADD_ITEM]: false,
    [ETodoErrors.UPDATE_ITEM]: false,
    [ETodoErrors.DELETE_ITEM]: false,
  },
  listData: [],
  isEditModalOpen: false,
  editItemId: null,
};

type TActions = ReturnType<
  | typeof setErrorsAction
  | typeof setListAction
  | typeof setLoadingsAction
  | typeof setEditModalOpenAction
  | typeof setEditIItemIdAction
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
    case SET_LIST: {
      return {
        ...state,
        listData: payload,
      };
    }
    case SET_EDIT_MODAL_OPEN: {
      return {
        ...state,
        isEditModalOpen: payload,
      };
    }
    case SET_EDIT_ITEM_ID: {
      return {
        ...state,
        editItemId: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
