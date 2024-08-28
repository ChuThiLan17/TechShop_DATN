import { useEffect, useState } from "react";
import { Text, View } from "tamagui";
import api from "../../../../services";
import { Image, StyleSheet } from "react-native";
import Itext from "../../../components/Text/Itext";
const ListSuccess = () => {
  const [listConfirm, setListConfirm] = useState([]);

  const fetch = async () => {
    try {
      const res = await api.order.getOrder();
      setListConfirm(res.data.response);
    } catch (error) {}
  };

  const filteredOrders = listConfirm.filter((order) => order.status === 2);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View>
      {filteredOrders.map((item) => (
        <View style={styles.container}>
          <Text>{item.code}</Text>

          <View style={styles.containerItem}>
            <Image
              style={{ height: 60, width: 60, borderRadius: 16 }}
              source={{
                uri: item.products[0]?.thumb,
              }}
            />
            <View style={{ gap: 2, width: "65%" }}>
              <Text>{item.products[0]?.title}</Text>
              <Text>Màu: {item.products[0]?.color}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text>Giá: {item.products[0]?.price} đ</Text>
                <Text>x {item.products[0]?.quantity}</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: "#339900" }}>
            {item.status == 2 ? "Đơn hàng đã giao thành công" : ""}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Text>{item.products.length} sản phẩm</Text>
            <View style={{ flexDirection: "row", marginTop: 4 }}>
              <Text> Thành tiền:</Text>
              <Text style={{ color: "red" }}> {item.total}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListSuccess;
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
  },
});
