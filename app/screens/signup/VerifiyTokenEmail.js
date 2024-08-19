import { useNavigation } from "@react-navigation/native";

import { useCallback, useLayoutEffect, useState } from "react";

import { View, XStack, YStack } from "tamagui";

import { TextInput } from "react-native";

import Toast from "react-native-toast-message";

import api from "../../services";
import Itext from "../components/Text/Itext";

function VerifyTokenEmail() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const [token, setToken] = useState();

  const onPress = async () => {
    if (!token) return;
    try {
      const res = await api.user.verifyTokenEmail(token);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Đăng ký tài khoản thành công vui lòng đăng nhập",
        });
        navigation.navigate("Signin");
      } else {
        Toast.show({
          type: "error",
          text1: res.data.res,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.response.mes,
      });
    }
  };

  return (
    <View f={1} bg="#fff">
      <YStack p={16} gap={16}>
        <Itext
          text={"Vui lòng nhập mã OTP đã được gửi vào email của bạn"}
          font={"medium"}
          size={20}
        />
        <YStack gap={8}>
          <TextInput onChangeText={setToken} style={{ height: 40 }} />
          <View h={1} bg="#939393"></View>
        </YStack>

        <YStack bg="#000" py={10} br={16} ai="center" onPress={onPress}>
          <Itext text={"Xác nhận"} color={"#fff"} />
        </YStack>
        {/* <XStack gap={8} als="center">
          <Itext text={"Bạn chưa nhận được mã"} />
          <View>
            <Itext text={"Gửi lại"} color={"#2971f0"} />
          </View>
        </XStack> */}
      </YStack>
    </View>
  );
}

export default VerifyTokenEmail;
