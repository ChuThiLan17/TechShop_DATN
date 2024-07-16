import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useCallback, useLayoutEffect, useState } from "react";

import { View } from "tamagui";

import Toast from "react-native-toast-message";

import api from "../../../services";
import { KEY_STORAGE_USER } from "../../../constants/KeyStorage";
import Itext from "../../components/Text/Itext";

import InputChangePass from "./components/InputChangePass";

function ChangePassScreen() {
  const navigation = useNavigation();

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

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const _onPressChangePass = async () => {
    if (!validate()) return;
    const user = JSON.parse(
      await AsyncStorage.getItem(KEY_STORAGE_USER.USER_DATA)
    );

    let params = {
      _id: user._id,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      const res = await api.user.postChangePassword(params);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Đổi mật khẩu thành công vui lòng đăng nhập lại",
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "Signin" }],
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.response.data.mes,
      });
    }
  };

  const validate = () => {
    if (oldPassword.length === 0) {
      Toast.show({
        type: "error",
        text1: "Mật khẩu cũ không được để trống",
      });
      return false;
    } else {
      if (oldPassword.length < 8) {
        Toast.show({
          type: "error",
          text1: "Mật khẩu phải lớn hơn hoặc bằng 8 kí tự",
        });
        return false;
      }
    }
    if (newPassword.length === 0) {
      Toast.show({
        type: "error",
        text1: "Mật khẩu mới không được để trống",
      });
      return false;
    } else {
      if (newPassword.length < 8 || newPassword.length > 45) {
        Toast.show({
          type: "error",
          text1: "Mật khẩu mới phải lớn hơn hoặc bằng 8 kí tự",
        });
        return false;
      }
    }
    if (rePassword.length === 0) {
      Toast.show({
        type: "error",
        text1: "Xác nhận mật khẩu không được để trống",
      });
      return false;
    } else {
      if (newPassword !== rePassword) {
        Toast.show({
          type: "error",
          text1: "Xác nhận mật khẩu phải trùng khớp với mật khẩu mới",
        });
        return false;
      }
    }

    return true;
  };

  return (
    <View flex={1} bg="#fff" gap={12} pt={20}>
      <InputChangePass text={"Mật khẩu cũ"} onChangeText={setOldPassword} />
      <InputChangePass text={"Mật khẩu mới"} onChangeText={setNewPassword} />
      <InputChangePass
        text={"Xác nhận mật khẩu"}
        onChangeText={setRePassword}
      />

      <View
        als="stretch"
        bg={"#000"}
        py={10}
        ai="center"
        mx={30}
        br={16}
        mt={12}
        onPress={_onPressChangePass}
      >
        <Itext text={"Đổi mật khẩu"} color={"#fff"} />
      </View>
    </View>
  );
}

export default ChangePassScreen;
