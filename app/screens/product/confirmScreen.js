import { useNavigation } from "@react-navigation/native";

import { useCallback, useLayoutEffect } from "react";

import { View, YStack } from "tamagui";

import { Icon } from "../components/Icon/Icon";
import Itext from "../components/Text/Itext";

function ConfirmScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: false,
        headerTitle: "",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  return (
    <View f={1} bg={"#fff"}>
      <YStack flex={1} jc="center" ai="center" gap={12}>
        <Icon icon={"confirm"} />
        <Itext text={"Đơn hàng đã được xác nhận"} size={20} font={"medium"} />
        <Itext text={"Chúng tôi sẽ bắt đầu xử lý ngay lập tức"} />
        <YStack
          bg={"#000"}
          als="stretch"
          ai="center"
          mx={24}
          py={10}
          br={16}
          onPress={() => navigation.navigate("Tabbar")}
        >
          <Itext text={"Quay lại mua hàng"} color={"#fff"} />
        </YStack>
      </YStack>
    </View>
  );
}

export default ConfirmScreen;
