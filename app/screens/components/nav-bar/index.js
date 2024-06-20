import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Navbar = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnBack}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.btnBack}></View>
    </View>
  );
};
export default Navbar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
  },
  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
