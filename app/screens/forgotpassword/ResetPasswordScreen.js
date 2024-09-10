import { useNavigation, useRoute } from "@react-navigation/native";

import { useCallback, useLayoutEffect, useState } from "react";

import { View, YStack } from "tamagui";

import Toast from "react-native-toast-message";

import api from "../../services";
import Itext from "../components/Text/Itext";
import InputSignup from "../signin/components/InputSignup";

function ResetPasswordScreen() {
  const navigation = useNavigation();
  const { token } = useRoute().params;

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Đổi mật khẩu",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const [password, setPassword] = useState("");
  const onPress = async () => {
    if (!password) return;
    try {
      let params = {
        password: password,
        token: token,
      };
      const res = await api.auth.resetPassword(params);
      if (res.data.success) {
        Toast.show({ type: "success", text1: res.data.mes });
        navigation.navigate("Signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View flex={1} bg={"#fff"} gap={8} p={16}>
      <InputSignup
        label={"Mật khẩu"}
        onChangeText={setPassword}
        secureTextEntry={true}
      ></InputSignup>
      <InputSignup
        label={"Xác nhận mật khẩu"}
        secureTextEntry={true}
      ></InputSignup>

      <YStack bg={"#000"} ai="center" py={10} br={16} mt={20} onPress={onPress}>
        <Itext text={"Xác nhận"} color={"#fff"} />
      </YStack>
    </View>
  );
}

export default ResetPasswordScreen;
