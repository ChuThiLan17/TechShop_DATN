import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

import { API_URL } from "../../config";
import api from "../../httpclient";

async function getInfoUser() {
  return await api.v1.get("/user/current/");
}

async function postChangePassword(params) {
  return await api.v1.post("/user/changepass", { params });
}

async function updateUser(params) {
  return await api.v1.put("/user/current", { params });
}

async function updateAddress(address) {
  return await api.v1.put("/user/address", { address: address });
}

async function putAddress(params) {
  return await api.v1.put("/user/putaddress", { params });
}

async function deleteAddress(addressId) {
  return await api.v1.delete(`/user/address/${addressId}`);
}

async function uploadAvartar(file) {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   "Content-Type": "multipart/form-data",
  // };

  const formData = new FormData();

  formData.append("avatar", {
    uri: file.uri,
    type: file.type,
    name: file.fileName,
  });

  return await axios.put(`${API_URL}/user/avatar`, formData, { headers });
}

async function verifyTokenEmail(token) {
  return await api.v1.put(`/user/finalregister/${token}`);
}

export default {
  getInfoUser,
  postChangePassword,
  updateUser,
  uploadAvartar,
  updateAddress,
  putAddress,
  deleteAddress,
  verifyTokenEmail,
};
