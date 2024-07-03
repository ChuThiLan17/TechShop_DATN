import { useNavigation } from "@react-navigation/native";

import { useCallback, useEffect, useLayoutEffect } from "react";

import { View } from "tamagui";

import api from "../../services";

import ProfileListButton from "./component/component/ProfileListButton";

function ProfileScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Quản lý tài khoản",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const fetchData = async () => {
    try {
      const res = await api.auth.registerAccount();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View flex={1} bg={"#fff"} gap={30} px={26} pt={36}>
      <ProfileListButton
        icon={"person"}
        text={"Thông tin tài khoản"}
        onPress={() => navigation.navigate("UpdateInfo")}
      />
      <ProfileListButton icon={"bag"} text={"Giỏ hàng"} />
      <ProfileListButton
        icon={"ship"}
        text={"Đơn hàng đã mua"}
        onPress={() => navigation.navigate("Order")}
      />
      <ProfileListButton icon={"noti"} text={"Thông báo"} />
      <ProfileListButton icon={"setting"} text={"Đổi mật khẩu"} />
      <ProfileListButton icon={"logout"} text={"Đăng xuất"} />
    </View>
  );
}

export default ProfileScreen;
