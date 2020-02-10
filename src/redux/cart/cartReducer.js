import { CartActionTypes } from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";
import CartItem from "../../components/cart-item/CartItem";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          CartItem => CartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducers;
