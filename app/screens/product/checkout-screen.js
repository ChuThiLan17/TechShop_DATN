import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/nav-bar";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Navbar text="Danh sách địa chỉ" onPress={() => navigation.goBack()} />
      <Text>CheckoutScreen</Text>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
