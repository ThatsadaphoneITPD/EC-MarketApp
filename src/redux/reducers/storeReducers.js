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

export const AccessMerchantStoreReducer = (state = { store: [] }, action) => {
  switch (action.type) {
    case MERCHANTSTORE_REQUEST:
      return { orderShoperloading: true };
    case MERCHANTSTORE_SUCCESS:
      return {
        storeloading: false,
        sucessstore: true,
        meessagestore: action.payload.message,
        store: action.payload,
      };
    case MERCHANTSTORE_FAIL:
      return {
        storeloading: true,
        sucessstore: false,
        meessagestorerror: action.payload.message,
        store: action.payload,
      };

    default:
      return state;
  }
};

export const merchantItemDeliver = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_ORDERITEM_STATUS_REQUEST:
      return { deliverloading: true };
    case MERCHANT_ORDERITEM_STATUS_SUCCESS:
      return {
        deliverloading: false,
        sucessDeliver: true,
        messageDeliver: action.payload.message,
      };
    case MERCHANT_ORDERITEM_STATUS_FAIL:
      return {
        deliverloading: true,
        sucessDeliver: false,
        errDeliver: action.payload,
      };
    default:
      return state;
  }
};
export const getStoreSale = (state = {}, action) => {
  switch (action.type) {
    case STORE_SALE_REQUEST:
      return { Saleloading: true };
    case STORE_SALE_SUCCESS:
      return {
        saleloading: false,
        sucessSale: true,
        saleReport: action.payload.sale,
        market: action.payload.market,
        messageDeliver: action.payload.message,
      };
    case STORE_SALE_FAIL:
      return {
        saleloading: true,
        sucessSale: false,
        errSale: action.payload,
      };
    default:
      return state;
  }
};
