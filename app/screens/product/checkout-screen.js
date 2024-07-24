import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useCallback, useLayoutEffect, useMemo } from "react";

import Toast from "react-native-toast-message";

import api from "../../services";

import RenderItemListOrder from "./components/RenderItemListOrder";
import FooterCheckoutView from "./components/checkout/FooterCheckout";
import HeaderCheckoutView from "./components/checkout/HeaderCheckout";

const CheckoutScreen = ({ route }) => {
  const navigation = useNavigation();

  const { cart } = route.params;

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Thanh toán",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const totalPrice = useMemo(() => {
    return cart?.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  const _onPressOrder = async () => {
    let params = {
      products: cart,
      total: totalPrice,
    };
    try {
      const res = await api.order.createOrder(params);
      if (res.data.success) {
        navigation.navigate("ConfirmScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={cart}
          renderItem={(item) => <RenderItemListOrder item={item.item} />}
          ListHeaderComponent={HeaderCheckoutView}
          ListFooterComponent={FooterCheckoutView}
        />
      </View>
      <View style={styles.viewCart}>
        <View style={[styles.btnDetai, { flex: 5 }]}>
          <Text style={styles.textTitle}>Tổng thanh toán</Text>
          <Text style={[styles.textTitle, { color: "green" }]}>
            {totalPrice?.toLocaleString("en-VN")} đ
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.btnDetai, { flex: 3, backgroundColor: "black" }]}
          onPress={_onPressOrder}
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
