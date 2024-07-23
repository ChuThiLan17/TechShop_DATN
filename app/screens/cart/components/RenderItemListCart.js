import { AntDesign } from "@expo/vector-icons";

import { Image, Text, TouchableOpacity } from "react-native";

import React, { useMemo } from "react";

import Checkbox from "expo-checkbox";

import { View, YStack } from "tamagui";

import Itext from "../../components/Text/Itext";

import { styles } from "./styles";
const RenderItemListCart = (props) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <Checkbox
        value={item.isSelect}
        onValueChange={() => {}}
        style={{ width: 16, height: 16 }}
      />
      <Image
        style={styles.viewImage}
        source={{
          uri: item.item.product.thumb,
        }}
      />
      <YStack gap={10}>
        <Itext
          text={item.item.title}
          font={"medium"}
          size={15}
          color={"rgba(0, 0, 0, 0.8)"}
        ></Itext>
        <Itext text={"Màu sắc: " + item.item.color}></Itext>
        <Itext
          text={Number(item.item.price).toLocaleString("en-VN") + "đ"}
          color={"green"}
        />
      </YStack>

      <YStack flex={1} ai={"flex-end"} jc="space-between" h={"100%"}>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="delete" size={25} color="black" />
        </TouchableOpacity>
        <Itext text={"Số lượng : " + item.item.quantity} />
      </YStack>
    </View>
  );
};

export default RenderItemListCart;
