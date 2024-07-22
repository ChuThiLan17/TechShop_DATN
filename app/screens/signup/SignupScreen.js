import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { YStack, XStack, ScrollView } from "tamagui";

import { useState } from "react";

import Toast from "react-native-toast-message";

import api from "../../services";
import Itext from "../components/Text/Itext";
import InputSignup from "../signin/components/InputSignup";

function SignupScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const _onPressSignUp = async () => {
    if (!validateEmailPassword(name, phone, email, password, rePassword))
      return;
    try {
      let params = {
        name: name,
        email: email,
        password: password,
        mobile: phone,
      };
      const res = await api.auth.registerAccount(params);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: res.data.mes,
        });
        navigation.navigate("Signin");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.response.data.error,
      });
    }
  };

  const validateEmailPassword = (name, phone, email, password, rePassword) => {
    let check = false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (name && name.length > 0) {
      if (regex.test(email)) {
        if (phone && phone.length > 0) {
          if (password.length >= 8 && rePassword.length >= 8) {
            if (password === rePassword) {
              check = true;
            } else {
              Toast.show({
                type: "error",
                text1: "Nhập lại mật khẩu không trùng khớp",
              });
            }
          } else {
            Toast.show({
              type: "error",
              text1: "Mật khẩu phải lớn hơn hoặc bằng 8 kí tự!",
            });
          }
        } else {
          Toast.show({
            type: "error",
            text1: "Số điện thoại không được để trống!",
          });
        }
      } else {
        Toast.show({
          type: "error",
          text1: "Email không hợp lệ!",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Tên không được để trống!",
      });
    }

    return check;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <YStack flex={1} px={22} gap={40}>
          <YStack py={24}>
            <Itext text={"Đăng ký"} size={24} font={"medium"} />
          </YStack>

          <YStack gap={16} flex={1}>
            <InputSignup label={"Name"} onChangeText={setName} />
            <InputSignup label={"Email"} onChangeText={setEmail} />
            <InputSignup label={"Number phone"} onChangeText={setPhone} />
            <InputSignup
              label={"Password"}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <InputSignup
              label={"Confirm password"}
              secureTextEntry={true}
              onChangeText={setRePassword}
            />
          </YStack>

          <YStack flex={1} gap={16} mb={26}>
            <XStack>
              <Itext text={"Tôi đồng ý với chính sách của app"} />
            </XStack>
            <YStack
              py={10}
              als="stretch"
              ai="center"
              bg={"#000"}
              br={16}
              onPress={_onPressSignUp}
            >
              <Itext text={"Đăng ký"} color={"white"} />
            </YStack>
          </YStack>
        </YStack>
      </ScrollView>
      <XStack
        ai="center"
        jc="center"
        onPress={() => navigation.navigate("Signin")}
        py={10}
        gap={8}
        bg={"#eeeaea"}
      >
        <Itext text={"Bạn đã có tài khoản?"} />
        <Itext text={"Đăng nhập"} font={"medium"} />
      </XStack>
    </SafeAreaView>
  );
}

export default SignupScreen;
