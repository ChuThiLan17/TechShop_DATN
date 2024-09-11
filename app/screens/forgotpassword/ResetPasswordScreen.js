import { useNavigation, useRoute } from "@react-navigation/native";

import { useCallback, useLayoutEffect, useMemo, useState } from "react";

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

  const [showPass, setShowPass] = useState(true);
  const [showPass1, setShowPass1] = useState(true);

  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");

  const onPress = useCallback(async () => {
    try {
      if (validate(password, rePassword)) {
        let params = {
          password: password,
          token: token,
        };
        const res = await api.auth.resetPassword(params);
        if (res.data.success) {
          Toast.show({ type: "success", text1: res.data.mes });
          navigation.navigate("Signin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [password, rePassword]);

  const validate = (password1, rePassword1) => {
    let check = true;
    if (password1.length === 0) {
      check = false;
      Toast.show({
        type: "error",
        text1: "Không để trống mật khẩu",
      });
      return;
    }
    if (rePassword1.length === 0) {
      check = false;
      Toast.show({
        type: "error",
        text1: "Không để trống nhập lại mật khẩu",
      });
      return;
    }
    if (password1 !== rePassword1) {
      check = false;
      Toast.show({
        type: "error",
        text1: "Mật khẩu không trùng khớp",
      });
      return;
    }
    return check;
  };

  return (
    <View flex={1} bg={"#fff"} gap={8} p={16}>
      <InputSignup
        label={"Mật khẩu"}
        onChangeText={setPassword}
        secureTextEntry={showPass}
        password={true}
        onPress={() => setShowPass(!showPass)}
      ></InputSignup>
      <InputSignup
        label={"Xác nhận mật khẩu"}
        secureTextEntry={showPass1}
        onChangeText={setRepassword}
        password={true}
        onPress={() => setShowPass1(!showPass1)}
      ></InputSignup>

      <YStack bg={"#000"} ai="center" py={10} br={16} mt={20} onPress={onPress}>
        <Itext text={"Xác nhận"} color={"#fff"} />
      </YStack>
    </View>
  );
}

export default ResetPasswordScreen;
