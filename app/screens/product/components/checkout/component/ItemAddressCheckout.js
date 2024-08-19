import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ItemAddressCheckout = ({ dataAddress, onPress, isDefault }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>{dataAddress.name}</Text>
          <Text style={{ color: "#444444" }}> | {dataAddress?.phone}</Text>
        </View>
        <Text style={{ color: "#000000", marginTop: 4 }}>
          {dataAddress?.street}
        </Text>
        <Text style={{ color: "#000000", marginTop: 4 }}>
          {dataAddress?.district} - {dataAddress?.city} - Việt Nam
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemAddressCheckout;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "95%",
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },
});
