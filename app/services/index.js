import auth from "./api/auth/auth";
import home from "./api/home/home";
import user from "./api/user/user";
import product from "./api/products/ProductsService";
const api = {
  auth,
  user,
  home,
  product,
};

export default api;
