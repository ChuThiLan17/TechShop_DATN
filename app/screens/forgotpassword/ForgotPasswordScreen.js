import { useNavigation } from "@react-navigation/native";

import { useCallback, useLayoutEffect, useState } from "react";

import { View, YStack } from "tamagui";

import Toast from "react-native-toast-message";

import api from "../../services";
import Itext from "../components/Text/Itext";
import InputSignup from "../signin/components/InputSignup";

function ForgotPasswordScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Quên mật khẩu",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const onPress = async () => {
    if (!email) return;
    let params = {
      email: email,
    };
    try {
      const res = await api.auth.forgotPassword(params);
      if (res.data.success) {
        navigation.navigate("Verify");
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.response.data.mes,
      });
    }
  };

  return (
    <View flex={1} bg={"#fff"}>
      <YStack p={16} gap={16}>
        <Itext text={"Nhập email để lấy lại mật khẩu"} />
        <InputSignup label={"Email"} onChangeText={setEmail} />

        <YStack
          bg={"#000"}
          py={10}
          br={16}
          ai="center"
          mt={24}
          onPress={onPress}
        >
          <Itext text={"Xác nhận"} color={"#fff"} />
        </YStack>
      </YStack>
    </View>
  );
}

export default ForgotPasswordScreen;
