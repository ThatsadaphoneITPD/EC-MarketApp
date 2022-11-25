import {
  CATEGORIEDPRODUCT_LIST_REQUEST,
  CATEGORIEDPRODUCT_LIST_SUCCESS,
  CATEGORIEDPRODUCT_LIST_FAIL,
} from "../constants";
import axios from "axios";
import { serviceAPI } from "../../service";

export const getCategoriedProduct = (category) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIEDPRODUCT_LIST_REQUEST });

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/productSearch/category/item?categories=${category}`
    );

    dispatch({
      type: CATEGORIEDPRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CATEGORIEDPRODUCT_LIST_FAIL,
      payload: message,
    });
  }
};
