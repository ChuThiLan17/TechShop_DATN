import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemAddress = (dataAddress) => {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("Address", { dataAddress: dataAddress })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>
            {dataAddress?.dataAddress.name}{" "}
          </Text>
          <Text style={{ color: "#444444" }}>
            | {dataAddress?.dataAddress.phone}
          </Text>
        </View>
        <Text style={{ color: "#000000", marginTop: 4 }}>
          {dataAddress?.dataAddress.address.street}
        </Text>
        <Text style={{ color: "#000000", marginTop: 4 }}>
          {dataAddress?.dataAddress.address.city}{" "}
          {dataAddress?.dataAddress.address.country}
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
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },
});
