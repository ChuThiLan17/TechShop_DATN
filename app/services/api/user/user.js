import api from "../../httpclient";

async function getInfoUser() {
  return await api.v1.get("/user/current/");
}

export default {
  getInfoUser,
};
