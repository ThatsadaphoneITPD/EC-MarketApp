import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  //
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
} from "../constants/chatMessageReducers";

export const sendReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return { loading: true };
    case SEND_MESSAGE_SUCCESS:
      return { loading: false, sendMSSG: action.payload };
    case SEND_MESSAGE_FAIL:
      return { loading: false, sendError: action.payload };
    default:
      return state;
  }
};

export const getMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return { loading: true };
    case GET_MESSAGE_SUCCESS:
      return { loading: false, getMSSG: action.payload };
    case GET_MESSAGE_FAIL:
      return { loading: false, getError: action.payload };
    default:
      return state;
  }
};
