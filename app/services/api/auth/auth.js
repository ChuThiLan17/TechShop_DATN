import api from "../../httpclient";

async function registerAccount() {
  return await api.v1.get("product/");
}

export default {
  registerAccount,
};
