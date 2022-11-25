import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
} from "../constants/categoryReducers";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORIES_LIST_REQUEST:
      return { loading: true };
    case CATEGORIES_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORIES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
