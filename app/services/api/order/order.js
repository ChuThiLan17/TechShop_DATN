import api from "../../httpclient";

async function createOrder(params) {
  return await api.v1.post("/order", { params });
}

async function getOrder() {
  return await api.v1.get("/order/");
}
export default {
  createOrder,
  getOrder,
};
