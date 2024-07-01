import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/nav-bar";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Navbar text="Danh sách địa chỉ" onPress={() => navigation.goBack()} />
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
