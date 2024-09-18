import AsyncStorage from "@react-native-async-storage/async-storage";

import api, { ACCESS_TOKEN_KEY } from "../../httpclient";

export const getAllProducts = async () => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  return await api.v1.get("product/", { headers });
};

async function getProduct(params) {
  return await api.v1.get("product/", { params });
}
async function getCategory(params) {
  return await api.v1.get("prodcategory/");
}

async function getDetailById(id) {
  return await api.v1.get(`product/detai/${id}`);
}

async function getNotification() {
  return await api.v1.get(`notification/`);
}

export default {
  getProduct,
  getCategory,
  getDetailById,
  getNotification,
};
