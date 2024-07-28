import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ItemAddress = ({ dataAddress }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("EditAddressScreen", { dataAddress: dataAddress })
        }
      >
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

export default ItemAddress;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "95%",
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },
});
