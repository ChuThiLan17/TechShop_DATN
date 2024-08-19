import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { View, YStack } from "tamagui";

import { FlatList } from "react-native";

import api from "../../../../services";
import Itext from "../../../components/Text/Itext";

import ItemAddressCheckout from "./component/ItemAddressCheckout";

const ListAddressCheckout = ({ route }) => {
  const { setAddress, address } = route.params;
  const [listAddress, setListAddress] = useState();
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Danh sách địa chỉ",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getAddress();
    }
  }, [isFocused]);

  const getAddress = async () => {
    try {
      const res = await api.user.getInfoUser();
      const value = res.data.rs.address ?? [];
      setListAddress(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View f={1} bg="#fff">
      <FlatList
        data={listAddress}
        renderItem={({ item, index }) => (
          <ItemAddressCheckout
            dataAddress={item}
            onPress={() => {
              setAddress(item);
              navigation.goBack();
            }}
          />
        )}
        ItemSeparatorComponent={<View h={16} />}
      />
      <YStack
        bg={"#000"}
        py={12}
        mx={16}
        mb={16}
        br={16}
        ai="center"
        jc="center"
        onPress={() => navigation.navigate("Address")}
      >
        <Itext text={"Thêm địa chỉ"} size={16} color={"#fff"} />
      </YStack>
    </View>
  );
};

export default ListAddressCheckout;
