import { fetchProducts } from "./AllActions";
import { cartList } from "./AllActions";
import { quantityUp } from "./AllActions";
import { quantityDown } from "./AllActions";
import { viewProduct } from "./AllActions";
import { removeFromCart } from "./AllActions";

const actions = {
  fetchProducts,
  cartList,
  quantityUp,
  quantityDown,
  viewProduct,
  removeFromCart,
};

export default actions;
