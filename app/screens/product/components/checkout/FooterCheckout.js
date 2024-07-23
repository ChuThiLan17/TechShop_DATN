import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { View } from "tamagui";

const FooterCheckoutView = () => {
  return (
    <View>
      <TouchableOpacity style={styles.viewVoucher}>
        <Text>Voucher của shop</Text>
        <Text>Nhập mã giảm giá</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewVoucher}>
        <Text>{`Tổng tiền sản phẩm`}</Text>
        <Text>{} đ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewVoucher}>
        <Text>Phương thức thanh toán</Text>
        <Text>Thanh toán khi nhận hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewVoucher}>
        <Text>Tổng tiền hàng</Text>
        <Text>{} đ</Text>
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
        <Text>{} đ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterCheckoutView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  viewAddress: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#EEEEEE",
  },

  textTitle: {
    fontSize: 15,
    fontFamily: "SemiBold",
    marginVertical: 15,
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
