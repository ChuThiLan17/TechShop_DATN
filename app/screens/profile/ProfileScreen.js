import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useCallback, useEffect, useLayoutEffect } from "react";

import { View, XStack } from "tamagui";

import api from "../../services";
import { useAuthContext } from "../../core/AuthProvider";
import { ACCESS_TOKEN_KEY } from "../../services/httpclient";
import Itext from "../components/Text/Itext";

import ProfileListButton from "./component/component/ProfileListButton";

function ProfileScreen() {
  const navigation = useNavigation();
  const { isLoggedIn, logout } = useAuthContext();

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
      logout();
    }
  };

  return (
    <View flex={1} bg={"#fff"} gap={30} px={26} pt={36}>
      {isLoggedIn ? (
        <>
          <ProfileListButton
            icon={"person"}
            text={"Thông tin tài khoản"}
            onPress={() => navigation.navigate("UpdateInfo")}
          />
          <ProfileListButton
            icon={"bag"}
            text={"Giỏ hàng"}
            onPress={() => navigation.navigate("CartDetailScreens")}
          />
          <ProfileListButton
            icon={"ship"}
            text={"Địa chỉ"}
            onPress={() => navigation.navigate("ListAddress")}
          />
          {/* <ProfileListButton icon={"noti"} text={"Thông báo"} /> */}

          <ProfileListButton
            icon={"ship"}
            text={"Lịch sử mua hàng"}
            onPress={() => navigation.navigate("Order")}
          />
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
        </>
      ) : (
        <View gap={16}>
          <Itext
            text={"Bạn cần phải đăng nhập để sử dụng các chức năng của App"}
            textAlign={"center"}
          />

          <XStack gap={16}>
            <View
              f={1}
              bg={"#000"}
              py={10}
              br={16}
              ai="center"
              jc="center"
              onPress={() => navigation.navigate("Signup")}
            >
              <Itext text={"Đăng Ký"} color={"#fff"} />
            </View>
            <View
              f={1}
              bg={"#000"}
              py={10}
              br={16}
              ai="center"
              jc="center"
              onPress={() => navigation.navigate("Signin")}
            >
              <Itext text={"Đăng nhập"} color={"#fff"} />
            </View>
          </XStack>
        </View>
      )}
    </View>
  );
}

export default ProfileScreen;
