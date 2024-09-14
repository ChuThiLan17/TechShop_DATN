import { View } from "tamagui";

import { StyleSheet, Text, Image } from "react-native";

import { useCallback } from "react";

import Itext from "../../../components/Text/Itext";

const HistoryOrderItem = ({ item, onPress }) => {
  const renderItem = useCallback((item) => {
    return (
      <View style={styles.containerItem}>
        <Image
          style={{ height: 60, width: 60, borderRadius: 16 }}
          source={{
            uri: item.thumb ?? "",
          }}
        />
        <View style={{ gap: 2, flex: 1 }}>
          <Text>{item.title}</Text>
          <Text>
            Màu:
            {item.color ?? ""}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>
              Giá:
              {item.price ?? 0} đ
            </Text>
            <Text>x{item.quantity ?? 0} </Text>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>{item.code}</Text>

      {item.products && item?.products.map((item) => renderItem(item))}

      <Text
        style={{
          color:
            item.status === 0 ? "blue" : item.status === 1 ? "red" : "#339900",
        }}
      >
        {item.status == 2 && "Đơn hàng đã giao thành công"}
        {item.status == 0 && "Chờ người bán xác nhận"}
        {item.status == 1 && "Chờ đơn vị vận chuyển đến lấy hàng"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.products.length} sản phẩm</Text>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Text> Thành tiền:</Text>
          <Text style={{ color: "red" }}> {item.total} đ</Text>
        </View>
      </View>

      {item.status === 2 && (
        <View
          als="flex-end"
          my={10}
          px={16}
          py={10}
          br={10}
          borderColor={"#ff6d03"}
          borderWidth={1}
          onPress={onPress}
        >
          <Itext text={"Đánh giá"} color={"#ff6d03"} />
        </View>
      )}
    </View>
  );
};

export default HistoryOrderItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    gap: 12,
  },
  containerItem: {
    // paddingVertical: 8,
    flexDirection: "row",
    gap: 16,
    marginVertical: 4,
  },
});
