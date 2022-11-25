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

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productItemReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return { loading: false };
    case PRODUCT_ITEM_SUCCESS:
      return { loading: true, success: true, detail: action.payload };
    case PRODUCT_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_CREATE_REQUEST:
      return { loading: true };
    case PRODUCTS_CREATE_SUCCESS:
      return { loading: false, success: true, product: [action.payload] };
    case PRODUCTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productEditReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { editloading: true };
    case PRODUCT_EDIT_SUCCESS:
      return { editloading: false, success: true, mesaage: action.payload };
    case PRODUCT_EDIT_FAIL:
      return { editloading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { DelProloading: true };
    case PRODUCT_DELETE_SUCCESS:
      return {
        DelProloading: false,
        success: true,
        mesaage: action.payload.mesaage,
      };
    case PRODUCT_DELETE_FAIL:
      return { DelProloading: true, error: action.payload };

    default:
      return state;
  }
};
