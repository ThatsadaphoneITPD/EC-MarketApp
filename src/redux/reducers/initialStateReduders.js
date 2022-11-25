import {
  UserListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  RoleListReducer,
  userProfileReducer,
} from "./userReducers";
import { categoryListReducer } from "./categoryReducers";
import {
  productListReducer,
  productItemReducer,
  productCreateReducer,
  productEditReducer,
  productDeleteReducer,
} from "./productReducers";
import { cartReducer } from "./cartReducer";
import { categoriedProductReducer } from "./categoriedProductReducers";
import {
  orderShoperListReducer,
  orderShoperCancleReducer,
  orderShoperReciveDone,
  orderShoperGetItem,
} from "./orderReducers";
import { searchItemReducer } from "./searchItemReducer";
import {
  AccessMerchantStoreReducer,
  merchantItemDeliver,
  getStoreSale,
} from "./storeReducers";
import { sendReducer, getMessageReducer } from "./chatReducer";

export const initialAllReducers = {
  userList: UserListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  updateUser: userUpdateReducer,
  //
  rolesList: RoleListReducer,
  //
  categoryList: categoryListReducer,
  categoriedProduct: categoriedProductReducer,
  //
  productList: productListReducer,
  productItem: productItemReducer,
  productCreate: productCreateReducer,
  EditItem: productEditReducer,
  ProOneDelete: productDeleteReducer,
  //
  cartItem: cartReducer,
  //
  userOrder: orderShoperListReducer,
  //
  search: searchItemReducer,
  cancelOrder: orderShoperCancleReducer,
  reciveOrder: orderShoperReciveDone,
  getOrderItem: orderShoperGetItem,
  //
  merchantStore: AccessMerchantStoreReducer,
  orderDeliver: merchantItemDeliver,
  sale: getStoreSale,
  //
  sendChat: sendReducer,
  getChat: getMessageReducer,
};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const productListStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
const cartItemStorage = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];
const numCartsStorage = localStorage.getItem("numberCart")
  ? JSON.parse(localStorage.getItem("numberCart"))
  : [];

export const initialStateLocalStorage = {
  userLogin: { userInfo: userInfoFromStorage },
  productList: { products: productListStorage },
  cartItem: { carts: cartItemStorage, numberCart: numCartsStorage },
};
