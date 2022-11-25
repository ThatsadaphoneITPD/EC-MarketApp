import {
  SEARCH_ITEM_REQUEST,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAIL,
} from "../constants";
import axios from "axios";
import { serviceAPI } from "../../service";

export const getSearchItemAction = (key) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEARCH_ITEM_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/productSearch/searchAll/all?keyword=${key}`,
      config
    );

    dispatch({
      type: SEARCH_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: SEARCH_ITEM_FAIL,
      payload: message,
    });
  }
};
