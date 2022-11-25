import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  //
  PRODUCTS_CREATE_REQUEST,
  PRODUCTS_CREATE_SUCCESS,
  PRODUCTS_CREATE_FAIL,
  //
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
  //
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  //
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants";

import axios from "axios";
import { serviceAPI } from "../../service";

export const getListProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${serviceAPI.URL}/api/products`, config);

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
    localStorage.setItem("products", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createProductAction = (input) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTS_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    // Create form submission for post and upload files
    const formData = new FormData();
    // Deflat input file to single file array for appending to formdata for uploading
    input.files
      .reduce((p, c) => [...p, c.file], [])
      .forEach((file) => {
        formData.append("files", file);
      });
    // Append post body to form data
    Object.keys(input).forEach((key) => {
      if (Array.isArray(input[key])) {
        input[key].forEach((item) => {
          formData.append(key, item);
        });
        return;
      }
      formData.append(key, input[key]);
    });

    const { data } = await axios.post(
      `${serviceAPI.URL}/api/products/create`,
      formData,
      config
    );

    dispatch({
      type: PRODUCTS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_CREATE_FAIL,
      payload: message,
    });
  }
};
export const getProductByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_ITEM_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/products/` + id,
      config
    );

    dispatch({
      type: PRODUCT_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_ITEM_FAIL,
      payload: message,
    });
  }
};
export const EditItemAction = (id, input) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_EDIT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };
    // Create form submission for post and upload files
    const formData = new FormData();
    // Deflat input file to single file array for appending to formdata for uploading
    input.files
      .reduce((p, c) => [...p, c.file], [])
      .forEach((file) => {
        formData.append("files", file);
      });
    // Append post body to form data
    Object.keys(input).forEach((key) => {
      if (Array.isArray(input[key])) {
        input[key].forEach((item) => {
          formData.append(key, item);
        });
        return;
      }
      formData.append(key, input[key]);
    });

    const { data } = await axios.put(
      `${serviceAPI.URL}/api/products/${id}`,
      formData,
      config
    );

    dispatch({
      type: PRODUCT_EDIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message,
    });
  }
};
export const deletProductByIdAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.delete(
      `${serviceAPI.URL}/api/products/` + id,
      config
    );

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
