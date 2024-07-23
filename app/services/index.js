import auth from "./api/auth/auth";
import cart from "./api/cart/cart";
import home from "./api/home/home";
import order from "./api/order/order";
import user from "./api/user/user";

const api = {
  auth,
  user,
  home,
  cart,
  order,
};

export default api;
