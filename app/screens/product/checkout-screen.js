import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/nav-bar";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Navbar text="Thanh toán" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
