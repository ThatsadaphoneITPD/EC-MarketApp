import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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
  //
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  ROLES_LIST_REQUEST,
  ROLES_LIST_SUCCESS,
  ROLES_LIST_FAIL,
} from "../constants";

export const UserListReducer = (state = { accounts: [] }, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { loading: true };
    case USERS_LIST_SUCCESS:
      return { loading: false, accounts: action.payload };
    case USERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const RoleListReducer = (state = { roles: [] }, action) => {
  switch (action.type) {
    case ROLES_LIST_REQUEST:
      return { loading: true };
    case ROLES_LIST_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: false };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: true, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, update: action.payload, usersuccess: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload, usersuccess: false };
    default:
      return state;
  }
};
export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };
    case USER_PROFILE_SUCCESS:
      return { loading: false, userFile: action.payload, file: true };
    case USER_PROFILE_FAIL:
      return { loading: false, errorFile: action.payload, file: true };
    default:
      return state;
  }
};
