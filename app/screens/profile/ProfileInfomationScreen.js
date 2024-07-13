import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, YStack } from "tamagui";

import { useLayoutEffect, useCallback, useEffect } from "react";

import { ScrollView } from "react-native";

import api from "../../services";
import { ACCESS_TOKEN_KEY } from "../../services/httpclient";
import { Icon } from "../components/Icon/Icon";
import Itext from "../components/Text/Itext";

import ConfirmButton from "./component/component/ConfirmButton";
import InfomationInput from "./component/component/InfomationInput";

function ProfileInfomationScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Account",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerLeft: () => (
          <Icon icon={"back"} onPress={() => navigation.goBack()} />
        ),
      });
    }, [navigation]),
    []
  );

  const fetch = async () => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    console.log("Access Token:", token);
    try {
      const res = await api.user.getInfoUser();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View flex={1} bg={"#fff"}>
      <ScrollView>
        <View ai="center" flex={1}>
          <YStack mt={32} gap={8} ai="center">
            <View w={96} h={96} bg={"#ff6d03"} br={48}></View>
            <Itext text={"Bruno Pham"} size={20} />
            <Itext
              text={"Change Profile Picture"}
              size={12}
              color={"#2971f0"}
            />
          </YStack>
          <YStack als="stretch" px={26} py={24} gap={20}>
            <InfomationInput text={"Họ và tên"} value={"Bruno Pham"} />
            <InfomationInput text={"Địa chỉ"} value={"Hà Nội"} />
            <InfomationInput text={"Số điện thoại"} value={"01727763666"} />
            <InfomationInput text={"Giới tính"} value={"Nam"} />
          </YStack>
        </View>
      </ScrollView>
      <ConfirmButton
        backgroundColor={"#000"}
        text={"Cập nhật"}
        color={"#fff"}
      />
    </View>
  );
}

export default ProfileInfomationScreen;
