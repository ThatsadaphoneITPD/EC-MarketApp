import {
  CATEGORIEDPRODUCT_LIST_REQUEST,
  CATEGORIEDPRODUCT_LIST_SUCCESS,
  CATEGORIEDPRODUCT_LIST_FAIL,
} from "../constants/categoriedProductReducers.js";

export const categoriedProductReducer = (
  state = { cateproduct: [] },
  action
) => {
  switch (action.type) {
    case CATEGORIEDPRODUCT_LIST_REQUEST:
      return { cateproloading: true };
    case CATEGORIEDPRODUCT_LIST_SUCCESS:
      return { cateproloading: false, cateproduct: action.payload };
    case CATEGORIEDPRODUCT_LIST_FAIL:
      return { cateproloading: false, cateproerror: action.payload };
    default:
      return state;
  }
};
