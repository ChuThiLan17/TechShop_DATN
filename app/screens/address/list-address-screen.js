import { useIsFocused, useNavigation } from "@react-navigation/native";

import { FlatList, StyleSheet, View } from "react-native";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { YStack } from "tamagui";

import api from "../../services";
import Itext from "../components/Text/Itext";

import ItemAddress from "./Item-address";

const ListAddressScreen = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState([]);

  const getAddress = async () => {
    try {
      const res = await api.user.getInfoUser();
      setAddress(res.data.rs.address);
    } catch (error) {
      console.log(error);
    }
  };

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

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      getAddress();
    }
  }, [isFocus]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <FlatList
          data={address}
          renderItem={({ item, index }) => <ItemAddress dataAddress={item} />}
        />
      </View>
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
    </SafeAreaView>
  );
};

export default ListAddressScreen;

const styles = StyleSheet.create({});
