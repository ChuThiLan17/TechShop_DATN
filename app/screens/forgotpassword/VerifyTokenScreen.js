import { useNavigation } from "@react-navigation/native";

import { useCallback, useLayoutEffect, useState } from "react";

import { View, YStack } from "tamagui";

import { TextInput } from "react-native";

import api from "../../services";
import Itext from "../components/Text/Itext";

function VerifiyTokenScreen() {
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

  const [token, setToken] = useState("");

  const onPress = async () => {
    if (!token) return;
    let params = {
      token: token,
    };
    try {
      const res = await api.auth.verifyResetPass(params);
      if (res.data.success) {
        navigation.navigate("ResetPass", { token: token });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View flex={1} bg={"#fff"}>
      <YStack p={16} gap={16}>
        <Itext text={"Nhập mã code"} font={"bold"} size={20} />
        <Itext text={"Quý khách vui lòng nhập mã cod đã được gửi về email"} />
        <YStack gap={8} mt={10}>
          <TextInput placeholder="Code" onChangeText={setToken} />
          <View h={1} bg={"#1a202c1a"} />
        </YStack>

        <YStack
          bg={"#000"}
          ai="center"
          py={10}
          br={16}
          mt={20}
          onPress={onPress}
        >
          <Itext text={"Xác nhận"} color={"#fff"} />
        </YStack>
      </YStack>
    </View>
  );
}

export default VerifiyTokenScreen;
