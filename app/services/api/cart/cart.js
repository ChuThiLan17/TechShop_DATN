import api from "../../httpclient";

async function putCart(params) {
  return await api.v1.put("/user/cart/", { params });
}

export default {
  putCart,
};
