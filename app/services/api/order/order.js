import api from "../../httpclient";

async function createOrder(params) {
  return await api.v1.post("/order", { params });
}

export default {
  createOrder,
};
