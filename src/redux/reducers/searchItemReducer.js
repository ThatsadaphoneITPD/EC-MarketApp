import {
  SEARCH_ITEM_REQUEST,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAIL,
} from "../constants";
export const searchItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_ITEM_REQUEST:
      return { searchloading: false };
    case SEARCH_ITEM_SUCCESS:
      return {
        searchloading: true,
        success: true,
        searchItem: action.payload.searchdata,
      };
    case SEARCH_ITEM_FAIL:
      return { searchloading: false, error: action.payload };
    default:
      return state;
  }
};
