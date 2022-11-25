import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
} from "../constants";
import axios from "axios";
import { serviceAPI } from "../../service";

export const listCategories = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORIES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/categories`,
      config
    );

    dispatch({
      type: CATEGORIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CATEGORIES_LIST_FAIL,
      payload: message,
    });
  }
};
