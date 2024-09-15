import api from "../../httpclient";

async function createOrder(params) {
  return await api.v1.post("/order", { params });
}

async function getOrder() {
  return await api.v1.get("/order/");
}

async function postRatting(params) {
  return await api.v1.put("product/ratings", { params });
}

export default {
  createOrder,
  getOrder,
  postRatting,
};
