import api from "../../httpclient";

async function putCart(params) {
  return await api.v1.put("/user/cart/", { params });
}

async function deleteCart(pid, color) {
  return await api.v1.delete(`/user/remove-cart/${pid}/${color}`);
}

export default {
  putCart,
  deleteCart,
};
