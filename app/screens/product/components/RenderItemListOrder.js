import { Image, Text, TouchableOpacity } from "react-native";

import React, { useMemo } from "react";

import { View } from "tamagui";

import { styles } from "./styles";

const RenderItemListOrder = (props) => {
  const { item } = props;

  return (
    <View style={styles.container} gap={12}>
      <Image
        style={styles.viewImage}
        source={{ uri: item.product.thumb ?? item.thumb ?? "" }}
      />
      <View style={styles.viewContent}>
        <View style={styles.viewContentTitle}>
          <Text style={styles.textTitle}>{item.title}</Text>
        </View>
        <View style={styles.viewContentTitle}>
          <View>
            <Text>Màu sắc : {item.color}</Text>
            <Text style={styles.textPrice}>
              {Number(item.price * item.quantity).toLocaleString("en-VN")} đ
            </Text>
          </View>
          <View style={styles.viewOption}>
            <TouchableOpacity style={styles.viewOptionTotal}>
              <Text style={{ fontSize: 18 }}>x {item.quantity}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RenderItemListOrder;
