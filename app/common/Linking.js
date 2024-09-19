import * as Linking from "expo-linking";

export const linking = {
  prefixes: ["techshop://"],
  config: {
    screens: {
      Home: "home",
      DetailNoti: "notification/:id", // Màn hình chi tiết thông báo với ID
    },
  },
};
