import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, View, Dimensions } from "react-native";

import React from "react";

import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

import Itext from "../../components/Text/Itext";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ItemProduct = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: item.thumb }} />
      <Itext font="Medium" size={18} text={item.title} />
      <View>
        <Itext
          font="medium"
          size={18}
          color="red"
          text={item.price + " " + "đ"}
        />
        <Itext font="regular" size={16} text={item.brand} />
        <View style={{ flexDirection: "row", gap: 4, marginTop: 8 }}>
          {item.types.slice(1).map((type, index) => (
            <View
              key={index}
              style={{ borderWidth: 1, borderRadius: 16, padding: 4 }}
            >
              <Text>{type}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    height: height * 0.3,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 16,
    width: 140,
    height: 140,
  },
  text: {
    fontSize: 16,
  },
});
