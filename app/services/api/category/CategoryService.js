import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../../httpclient";

export const getAllCategory = async () => {
    const token = await AsyncStorage.getItem("accessToken");
    const headers = {
        Authorization: token,
        "Content-Type": "application/json",
    };
    return await api.v1.get("prodcategory/", { headers });
}