import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, YStack, XStack, ScrollView } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState } from "react";

import Toast from "react-native-toast-message";

import { useDispatch, useSelector } from "react-redux";

import api from "../../services";
import { KEY_ACTION_SET } from "../../constants/KeyRedux";
import { KEY_STORAGE_USER } from "../../constants/KeyStorage";
import { useAuthContext } from "../../core/AuthProvider";
import { ACCESS_TOKEN_KEY } from "../../services/httpclient";
import Itext from "../components/Text/Itext";
import { setUserAction } from "../../redux/action/loginAction";

import InputSignup from "./components/InputSignup";

function SigninScreen(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const rootState = useSelector((state) => state.loginReducer);
  //console.log("rootState",rootState);

  const dispatch = useDispatch();

  const _onPressSignIn = async () => {
    if (!validate(email, password)) return;
    let params = {
      email: email,
      password: password,
    };
    try {
      const res = await api.auth.login(params);
      if (res.data.success) {
        const user_data = res.data.userData;

        dispatch(setUserAction(KEY_ACTION_SET.SET_USER, { user: user_data }));
        await Promise.all([
          AsyncStorage.setItem(ACCESS_TOKEN_KEY, res.data.accessToken),
          AsyncStorage.setItem(
            KEY_STORAGE_USER.USER_DATA,
            JSON.stringify(user_data)
          ),
        ]);
        navigation.navigate("Tabbar");
      }
    } catch (error) {
      console.log("err", error);
      Toast.show({
        type: "error",
        text1: error.response.data.mes,
      });
    }
  };

  const validate = (email, password) => {
    let check = false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      if (password && password.length >= 8) {
        check = true;
      } else {
        Toast.show({
          type: "error",
          text1: "Mật khẩu phải lớn hơn hoặc bằng 8 kí tự",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Email không hợp lệ!",
      });
    }

    return check;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <YStack flex={1}>
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
              <Itext
                text={"Quên mật khẩu ?"}
                size={16}
                color={"#2971f0"}
              ></Itext>
            </View>
            <YStack mt={80} flex={1} gap={28}>
              <YStack
                ai="center"
                bg={"#000"}
                br={16}
                py={10}
                onPress={_onPressSignIn}
              >
                <Itext text={"Đăng nhập"} color={"#fff"} />
              </YStack>

              {/* <YStack als="center">
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
              </YStack> */}
            </YStack>
          </View>
        </YStack>
      </ScrollView>
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
