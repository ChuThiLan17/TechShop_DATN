import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import RenderItemListOrder from "./components/RenderItemListOrder";

const CheckoutScreen = (props) => {

  const rootState_cartProducts = useSelector((state) => state.productReducer.cart_products);

  const total_price = useCallback(() => {
    let total = 0;
    for (let i = 0; i < rootState_cartProducts.length; i++) {
      if (rootState_cartProducts[i].isSelect) {
        total += rootState_cartProducts[i].item.price * rootState_cartProducts[i].total;
      }
    }

    return total;
  }, [rootState_cartProducts]);

  props.navigation.setOptions({
    headerShown: true,
    headerTitle: "Thanh toán",
    headerTitleAlign: "center",
    headerShadowVisible: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.viewAddress}
        >
          <Text style={styles.textTitle}>Địa chỉ nhận hàng</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Nguyễn Minh Giang
            </Text>
            <Text style={{ fontSize: 17, color: "#444444" }}>
              | 0123456789
            </Text>
          </View>
          <Text style={{ fontSize: 17, color: "#000000", marginTop: 4 }}>
            56 phố Linh Đường , Hoàng Liệt , Hoàng Mai ,TP Hà Nội
          </Text>
        </TouchableOpacity>
        <View>
          <FlatList
            data={rootState_cartProducts}
            renderItem={(item) => <RenderItemListOrder item={item.item} />}
            keyExtractor={((item) => item.item._id)}
          />
        </View>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Voucher của shop</Text>
          <Text>Nhập mã giảm giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>{`Tổng tiền (${rootState_cartProducts.length} sản phẩm)`}</Text>
          <Text>{Number(total_price()).toLocaleString('en-VN')} đ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Phương thức thanh toán</Text>
          <Text>Thanh toán khi nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Tổng tiền hàng</Text>
          <Text>{Number(total_price()).toLocaleString('en-VN')} đ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Khuyến mãi</Text>
          <Text>0đ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Phí vận chuyển</Text>
          <Text>0đ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVoucher}>
          <Text>Tổng tiền hàng</Text>
          <Text>{Number(total_price()).toLocaleString('en-VN')} đ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCart}>
        <View
          style={[styles.btnDetai, { flex: 5 }]}
        >
          <Text style={styles.textTitle}>Tổng thanh toán</Text>
          <Text style={[styles.textTitle, { color: "green" }]}>{Number(total_price()).toLocaleString("en-VN")} đ</Text>
        </View>
        <TouchableOpacity
          style={[styles.btnDetai, { flex: 3, backgroundColor: "black" }]}
          onPress={() => props.navigation.navigate("Checkout")}
        >
          <Text style={{ color: "white" }}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  viewAddress: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },

  textTitle: {
    fontSize: 15,
    fontFamily: "SemiBold",
    marginVertical: 15
  },

  viewVoucher: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  viewCart: {
    flexDirection: "row",
    width: "100%",
    height: "7%",
    borderWidth: 1,
    justifyContent: "space-between",
  },

  btnMess: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
  },
  btnDetai: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRightWidth: 1,
  },
});
