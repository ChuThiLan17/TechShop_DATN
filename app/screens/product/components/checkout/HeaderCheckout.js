import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { View } from "tamagui";

const HeaderCheckoutView = () => {
  return (
    <View>
      <TouchableOpacity style={styles.viewAddress}>
        <Text style={styles.textTitle}>Địa chỉ nhận hàng</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Nguyễn Minh Giang
          </Text>
          <Text style={{ fontSize: 17, color: "#444444" }}>| 0123456789</Text>
        </View>
        <Text style={{ fontSize: 17, color: "#000000", marginTop: 4 }}>
          56 phố Linh Đường , Hoàng Liệt , Hoàng Mai ,TP Hà Nội
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCheckoutView;

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
