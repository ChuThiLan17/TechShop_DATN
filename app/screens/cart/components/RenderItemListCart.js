import { AntDesign } from "@expo/vector-icons";

import { Image, Text, TouchableOpacity } from "react-native";

import React, { useMemo } from "react";

import Checkbox from "expo-checkbox";

import { View, XStack, YStack } from "tamagui";

import Toast from "react-native-toast-message";

import { useCartContext } from "../provider/provider";
import api from "../../../services";
import Itext from "../../components/Text/Itext";

import { styles } from "./styles";
const RenderItemListCart = (props) => {
  const { item } = props;
  const { fetchCart } = useCartContext();

  const deleteCart = async () => {
    try {
      const res = await api.cart.deleteCart(item.item._id, item.item.color);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Xóa sản phẩm khỏi giỏ hàng thành công",
        });
        await fetchCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.viewImage}
        source={{
          uri: item.item?.product?.thumb ?? "",
        }}
      />
      <YStack gap={10} flex={1}>
        <XStack flex={1}>
          <View f={1}>
            <Itext
              text={item.item.title}
              font={"medium"}
              size={15}
              color={"rgba(0, 0, 0, 0.8)"}
            ></Itext>
          </View>
          <TouchableOpacity onPress={deleteCart}>
            <AntDesign name="delete" size={25} color="black" />
          </TouchableOpacity>
        </XStack>

        <XStack flex={1}>
          <YStack f={1}>
            <Itext text={"Màu sắc: " + item.item.color}></Itext>
            <Itext
              text={Number(item.item.price).toLocaleString("en-VN") + "đ"}
              color={"green"}
            />
          </YStack>
          <View als="flex-end">
            <Itext text={"Số lượng : " + item.item.quantity} />
          </View>
        </XStack>
      </YStack>
    </View>
  );
};

export default RenderItemListCart;
