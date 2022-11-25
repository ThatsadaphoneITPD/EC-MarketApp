import {
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  CLEAR_CART,
} from "../constants/cartReducer";

export const cartReducer = (state = { carts: [], numberCart: 0 }, action) => {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload._id,
          quantity: 1,
          shop: action.payload.store,
          name: action.payload.title,
          desc: action.payload.content,
          image: action.payload.attachments[0].online_url,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload._id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload._id,
            quantity: 1,
            name: action.payload.title,
            shop: action.payload.store,
            desc: action.payload.content,
            image: action.payload.attachments[0].online_url,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
      let addCartNum = state.numberCart + 1;
      localStorage.setItem("numberCart", JSON.stringify(addCartNum));
      return {
        ...state,
        numberCart: addCartNum,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.carts[action.payload].quantity++;
      let addMore = state.carts.filter((item) => {
        return (item = state.carts[action.payload].quantity + 1);
      });
      localStorage.setItem("carts", JSON.stringify(addMore));
      return {
        ...state,
        carts: addMore,
      };
    case DECREASE_QUANTITY:
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.carts[action.payload].quantity--;
      }
      let decreseMore = state.carts.filter((item) => {
        return (item = state.carts[action.payload].quantity - 1);
      });
      localStorage.setItem("carts", JSON.stringify(decreseMore));
      return {
        ...state,
        carts: decreseMore,
      };
    case DELETE_CART:
      let quantity_ = state.carts[action.payload].quantity;
      let itemFilter = state.carts.filter((item) => {
        return item.id != state.carts[action.payload].id;
      });
      localStorage.setItem("carts", JSON.stringify(itemFilter));
      let deleteCartNum = state.numberCart - quantity_;
      localStorage.setItem("numberCart", JSON.stringify(deleteCartNum));
      return {
        ...state,
        numberCart: deleteCartNum,
        carts: itemFilter,
      };
    case CLEAR_CART:
      return { ...state, numberCart: 0, carts: [] };
    default:
      return state;
  }
};
