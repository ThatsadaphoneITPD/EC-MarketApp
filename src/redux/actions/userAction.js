import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  //
  ROLES_LIST_REQUEST,
  ROLES_LIST_SUCCESS,
  ROLES_LIST_FAIL,
  //
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  //
  USER_LOGOUT,
  //
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  //
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  //
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../constants/userReducers";
import axios from "axios";
import { serviceAPI } from "../../service";

export const Getlistrole = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ROLES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${serviceAPI.URL}/api/users`, config);

    dispatch({
      type: ROLES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ROLES_LIST_FAIL,
      payload: message,
    });
  }
};

export const GetlistUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USERS_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(`${serviceAPI.URL}/api/users`, config);

    dispatch({
      type: USERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_LIST_FAIL,
      payload: message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${serviceAPI.URL}/api/users/login`,
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register =
  (username, email, password, profileImage) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${serviceAPI.URL}/api/users/register`,
        { username, email, password, profileImage },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const getUserProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${serviceAPI.URL}/api/users/profile/user`,
      config
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_PROFILE_FAIL,
      payload: message,
    });
  }
};
export const updateProfile =
  (role = "", first = "", last = "", age = "", username = "", url = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      };

      const { data } = await axios.put(
        `${serviceAPI.URL}/api/users/profile/user?roleId=${role}&first=${first}&last=${last}&age=${age}&username=${username}&url=${url}`,
        {},
        config
      );

      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
