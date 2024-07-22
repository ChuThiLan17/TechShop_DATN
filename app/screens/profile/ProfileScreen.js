import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useCallback, useEffect, useLayoutEffect } from "react";

import { View } from "tamagui";

import api from "../../services";
import { useAuthContext } from "../../core/AuthProvider";
import { ACCESS_TOKEN_KEY } from "../../services/httpclient";

import ProfileListButton from "./component/component/ProfileListButton";

function ProfileScreen() {
  const navigation = useNavigation();
  const { logout } = useAuthContext();

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

  const _onPressLogout = async () => {
    try {
      const res = await api.auth.logout();
      if (res.data.success) {
        await logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        text={"Địa chỉ"}
        onPress={() => navigation.navigate("ListAddress")}
      />
      {/* <ProfileListButton icon={"noti"} text={"Thông báo"} /> */}
      <ProfileListButton
        icon={"setting"}
        text={"Đổi mật khẩu"}
        onPress={() => navigation.navigate("ChangePass")}
      />
      <ProfileListButton
        icon={"logout"}
        text={"Đăng xuất"}
        onPress={_onPressLogout}
      />
    </View>
  );
}

export default ProfileScreen;
