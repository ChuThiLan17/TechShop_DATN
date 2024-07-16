import api from "../../httpclient";

async function getInfoUser() {
  return await api.v1.get("/user/current/");
}

async function postChangePassword(params) {
  return await api.v1.post("/user/changepass", { params });
}

export default {
  getInfoUser,
  postChangePassword,
};
