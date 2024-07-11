import { useNavigation } from "@react-navigation/native";

import { View, YStack, XStack } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState } from "react";

import Toast from "react-native-toast-message";

import api from "../../services";
import Itext from "../components/Text/Itext";

import InputSignup from "./components/InputSignup";

function SigninScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onPressSignIn = async () => {
    if (!validate(email, password)) return;
    let params = {
      email: email,
      password: password,
    };
    try {
      const res = await api.auth.login(params);
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (email) => {
    let check = false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      check = true;
    } else {
      Toast.show({
        type: "error",
        text1: "Email không hợp lệ!",
      });
    }
    if (password && password.length >= 8) {
      check = true;
    } else {
      Toast.show({
        type: "error",
        text1: "Mật khẩu phải lớn hơn hoặc bằng 8 kí tự",
      });
    }
    return check;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} pt={70} px={24}>
        <YStack gap={4}>
          <Itext text={"Chào mừng bạn"} font={"medium"} size={24} />
          <Itext
            text={"Đăng nhập để tiếp tục"}
            size={16}
            color={"#818181"}
          ></Itext>
        </YStack>

        <YStack gap={26} mt={70}>
          <InputSignup label={"Email"} onChangeText={setEmail} />
          <InputSignup
            label={"Password"}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </YStack>
        <View als="flex-end" mt={22}>
          <Itext text={"Quên mật khẩu ?"} size={16} color={"#2971f0"}></Itext>
        </View>
        <YStack mt={80} gap={28}>
          <YStack
            ai="center"
            bg={"#000"}
            br={16}
            py={10}
            onPress={_onPressSignIn}
          >
            <Itext text={"Đăng nhập"} color={"#fff"} />
          </YStack>

          <YStack als="center">
            <Itext text={"-Hoặc-"} />
          </YStack>
          <YStack
            als="stretch"
            br={16}
            borderColor={"#1a202c1a"}
            borderWidth={1}
            ai="center"
            py={10}
          >
            <Itext text={"Đăng nhập với google"} />
          </YStack>
        </YStack>
      </View>
      <XStack
        ai="center"
        jc="center"
        onPress={() => navigation.navigate("Signup")}
        py={10}
        gap={8}
        bg={"#eeeaea"}
      >
        <Itext text={"Bạn chưa có tài khoản?"} />
        <Itext text={"Đăng ký"} font={"medium"} />
      </XStack>
    </SafeAreaView>
  );
}

export default SigninScreen;
