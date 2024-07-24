import auth from "./api/auth/auth";
import cart from "./api/cart/cart";
import home from "./api/home/home";
import order from "./api/order/order";
import user from "./api/user/user";
import product from "./api/products/ProductsService";
const api = {
  auth,
  user,
  home,
  cart,
  order,
  product,
};

export default api;
