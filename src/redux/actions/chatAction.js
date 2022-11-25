import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  //
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
} from "../constants";
import axios from "axios";
import { serviceAPI } from "../../service";

export const getMessage = (from, to) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.post(
      `${serviceAPI.URL}/api/messages/getmessage`,
      { from, to },
      config
    );

    dispatch({
      type: GET_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_MESSAGE_FAIL,
      payload: message,
    });
  }
};
export const sendMessage =
  (from, to, message) => async (dispatch, getState) => {
    try {
      dispatch({ type: SEND_MESSAGE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      };

      const { data } = await axios.post(
        `${serviceAPI.URL}/api/messages/addmessage`,
        { from, to, message },
        config
      );

      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: message,
      });
    }
  };
