import api from "../../httpclient";

async function getCategoty() {
  return await api.v1.get("/prodcategory/");
}

export default {
  getCategoty,
};
