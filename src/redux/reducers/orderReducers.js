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
} from "../constants/orderReducers";

export const orderShoperListReducer = (
  state = { shopperorder: [] },
  action
) => {
  switch (action.type) {
    case ORDERSHOPER_LIST_REQUEST:
      return { orderShoperloading: true };
    case ORDERSHOPER_LIST_SUCCESS:
      return { orderShoperloading: false, shopperorder: action.payload };
    case ORDERSHOPER_LIST_FAIL:
      return { orderShoperloading: true, orderShoperror: action.payload };

    default:
      return state;
  }
};

export const orderShoperCancleReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDERSHOPER_CANCEL_REQUEST:
      return { orderCancleloading: true };
    case ORDERSHOPER_CANCEL_SUCCESS:
      return {
        orderCancleloading: false,
        sucess: true,
        messagedata: action.payload.message,
      };
    case ORDERSHOPER_CANCEL_FAIL:
      return {
        orderCancleloading: true,
        sucess: false,
        messageerror: action.payload,
      };
    default:
      return state;
  }
};
export const orderShoperReciveDone = (state = {}, action) => {
  switch (action.type) {
    case ORDERSHOPER_RECIVE_DONE_REQUEST:
      return { reciveorderloading: true };
    case ORDERSHOPER_RECIVE_DONE_SUCCESS:
      return {
        reciveorderloading: false,
        sucessDone: true,
        messagerecive: action.payload.message,
      };
    case ORDERSHOPER_RECIVE_DONE_FAIL:
      return {
        reciveorderloading: true,
        sucessDone: false,
        sucessDone: action.payload,
      };
    default:
      return state;
  }
};
export const orderShoperGetItem = (state = {}, action) => {
  switch (action.type) {
    case ORDERSHOPER_RECIVE_ITEM_REQUEST:
      return { reciveorderloading: true };
    case ORDERSHOPER_RECIVE_ITEM_SUCCESS:
      return {
        reciveorderloading: false,
        sucessOritem: true,
        messagereciveitem: action.payload.message,
      };
    case ORDERSHOPER_RECIVE_ITEM_FAIL:
      return {
        reciveorderloading: true,
        sucessOritem: false,
        errorreciveitem: action.payload.message,
      };
    default:
      return state;
  }
};
