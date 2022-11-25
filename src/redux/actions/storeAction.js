import {
  MERCHANTSTORE_REQUEST,
  MERCHANTSTORE_SUCCESS,
  MERCHANTSTORE_FAIL,
  //
  MERCHANT_ORDERITEM_STATUS_REQUEST,
  MERCHANT_ORDERITEM_STATUS_SUCCESS,
  MERCHANT_ORDERITEM_STATUS_FAIL,
  //
  STORE_SALE_REQUEST,
  STORE_SALE_SUCCESS,
  STORE_SALE_FAIL,
} from "../constants/StoreReducers";
import axios from "axios";
import { serviceAPI } from "../../service";

export const getMerchantStore = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MERCHANTSTORE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/stores/merchentshop`,
      config
    );

    dispatch({
      type: MERCHANTSTORE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MERCHANTSTORE_FAIL,
      payload: message,
    });
  }
};
export const putItemSend = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_REQUEST,
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
      `${serviceAPI.URL}/api/stores/orderitem/item?keyid=${id}&delivery=Sending`,
      {},
      config
    );

    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_FAIL,
      payload: message,
    });
  }
};

export const putItemArrive = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_REQUEST,
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
      `${serviceAPI.URL}/api/stores/orderitem/item?keyid=${id}&delivery=Arrive`,
      {},
      config
    );

    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MERCHANT_ORDERITEM_STATUS_FAIL,
      payload: message,
    });
  }
};

export const getStoreSale = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STORE_SALE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/stores/shopsale`,
      config
    );

    dispatch({
      type: STORE_SALE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: STORE_SALE_FAIL,
      payload: message,
    });
  }
};
