import { View, YStack } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";

import Itext from "../components/Text/Itext";

import InputSignup from "./components/InputSignup";

function SigninScreen() {
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
          <InputSignup label={"Email"} />
          <InputSignup label={"Password"} secureTextEntry={true} />
        </YStack>
        <View als="flex-end" mt={22}>
          <Itext text={"Quên mật khẩu ?"} size={16} color={"#2971f0"}></Itext>
        </View>
        <YStack mt={80} gap={28}>
          <YStack ai="center" bg={"#000"} br={16} py={10}>
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
    </SafeAreaView>
  );
}

export default SigninScreen;
