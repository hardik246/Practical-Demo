import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
};

export const cartList = (data) => {
  return {
    type: "CART_LIST",
    payload: data,
  };
};

export const quantityUp = (id) => {
  return {
    type: "QUANTITY_UP",
    payload: id,
  };
};

export const quantityDown = (id) => {
  return {
    type: "QUANTITY_DOWN",
    payload: id,
  };
};

export const viewProduct = (data) => {
  return {
    type: "VIEW_LIST",
    payload: data,
  };
};

export const removeFromCart = (data) => {
  console.log(data);
  return {
    type: "REMOVE_CART",
    payload: data,
  };
};

export default {
  cartList,
  quantityUp,
  quantityDown,
  viewProduct,
  removeFromCart,
};
