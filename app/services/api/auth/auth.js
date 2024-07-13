import api from "../../httpclient";

async function registerAccount(params) {
  return await api.v1.post("/user/register/", { params });
}

async function login(params) {
  return await api.v1.post("/user/login/", { params });
}

async function logout() {
  return await api.v1.get("/user/logout/");
}

export default {
  registerAccount,
  login,
  logout,
};
