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

async function forgotPassword(params) {
  return await api.v1.get("/user/forgotpassword/", { params });
}

async function resetPassword(params) {
  return await api.v1.put("/user/resetpassword/", { params });
}

async function verifyResetPass(params) {
  return await api.v1.post("/user/verifyresetpass", { params });
}

export default {
  registerAccount,
  login,
  logout,
  forgotPassword,
  resetPassword,
  verifyResetPass,
};
