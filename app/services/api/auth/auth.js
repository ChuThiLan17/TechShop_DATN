import api from "../../httpclient";

async function registerAccount(params) {
  return await api.v1.post("/user/register/", { params });
}

async function login(params) {
  console.log("params",params);
  return await api.v1.post("/user/login/",{ params });
}

export default {
  registerAccount,
  login,
};
