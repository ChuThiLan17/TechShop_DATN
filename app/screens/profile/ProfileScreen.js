import { useNavigation } from "@react-navigation/native";

import { useCallback, useLayoutEffect } from "react";

import { View } from "tamagui";

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

  return (
    <View flex={1} bg={"#fff"} gap={30} px={26} pt={36}>
      <ProfileListButton
        icon={"person"}
        text={"Thông tin tài khoản"}
        onPress={() => navigation.navigate("UpdateInfo")}
      />
      <ProfileListButton icon={"bag"} text={"Giỏ hàng"} />
      <ProfileListButton icon={"ship"} text={"Đơn hàng đã mua"} />
      <ProfileListButton icon={"noti"} text={"Thông báo"} />
      <ProfileListButton icon={"setting"} text={"Cài đặt"} />
      <ProfileListButton icon={"logout"} text={"Đăng xuất"} />
    </View>
  );
}

export default ProfileScreen;
