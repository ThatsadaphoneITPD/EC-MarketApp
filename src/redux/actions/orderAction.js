import {
  ORDERSHOPER_LIST_REQUEST,
  ORDERSHOPER_LIST_SUCCESS,
  ORDERSHOPER_LIST_FAIL,
  ORDERSHOPER_CANCEL_REQUEST,
  ORDERSHOPER_CANCEL_SUCCESS,
  ORDERSHOPER_CANCEL_FAIL,
  ORDERSHOPER_RECIVE_DONE_REQUEST,
  ORDERSHOPER_RECIVE_DONE_SUCCESS,
  ORDERSHOPER_RECIVE_DONE_FAIL,
  ORDERSHOPER_RECIVE_ITEM_REQUEST,
  ORDERSHOPER_RECIVE_ITEM_SUCCESS,
  ORDERSHOPER_RECIVE_ITEM_FAIL,
} from "../constants";
import axios from "axios";
import { serviceAPI } from "../../service";

export const getShopperOrder = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDERSHOPER_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/orders/shoper/items`,
      config
    );

    dispatch({
      type: ORDERSHOPER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDERSHOPER_LIST_FAIL,
      payload: message,
    });
  }
};

export const cancelledOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERSHOPER_CANCEL_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.put(
      `${serviceAPI.URL}/api/orders/shoper/order/${id}`,
      {},
      config
    );

    dispatch({
      type: ORDERSHOPER_CANCEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDERSHOPER_CANCEL_FAIL,
      payload: message,
    });
  }
};

export const reciveOrderDone = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERSHOPER_RECIVE_DONE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.put(
      `${serviceAPI.URL}/api/orders/shoper/reciveAllCatalog?orderid=${id}`,
      {},
      config
    );

    dispatch({
      type: ORDERSHOPER_RECIVE_DONE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDERSHOPER_RECIVE_DONE_FAIL,
      payload: message,
    });
  }
};

export const getOrderItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERSHOPER_RECIVE_ITEM_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.put(
      `${serviceAPI.URL}/api/stores/shoper/recive_order?keyid=${id}`,
      {},
      config
    );

    dispatch({
      type: ORDERSHOPER_RECIVE_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDERSHOPER_RECIVE_ITEM_FAIL,
      payload: message,
    });
  }
};
