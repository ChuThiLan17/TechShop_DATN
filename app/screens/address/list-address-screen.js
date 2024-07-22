import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { YStack } from "tamagui";

import api from "../../services";
import Navbar from "../components/nav-bar";
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
      }}
    >
      {/* <Navbar text="Danh sách địa chỉ" onPress={() => navigation.goBack()} /> */}
      <View style={{ paddingHorizontal: 16, height: "90%" }}>
        <FlatList
          data={address}
          renderItem={({ item, index }) => <ItemAddress dataAddress={item} />}
        />
      </View>
      <YStack
        w={42}
        h={42}
        br={21}
        bg={"#000"}
        pos="absolute"
        b={16}
        r={16}
        ai="center"
        jc="center"
        onPress={() => navigation.navigate("Address")}
      >
        <Itext text={"+"} size={30} color={"#fff"} />
      </YStack>
    </SafeAreaView>
  );
};

export default ListAddressScreen;

const styles = StyleSheet.create({});
