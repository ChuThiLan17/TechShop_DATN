import { useIsFocused, useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";

import { styles } from "./styles";

import RenderItemListCart from "./components/RenderItemListCart";
import { CartProvider, useCartContext } from "./provider/provider";

const CartDetailUI = () => {
  const { cart, fetchCart } = useCartContext();

  const navigation = useNavigation();

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchCart();
    }
  }, [isFocused]);

  const totalPrice = useMemo(() => {
    return cart?.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <View style={styles.container}>
      <View style={[styles.container, { padding: 5 }]}>
        <FlatList
          data={cart}
          renderItem={(item) => <RenderItemListCart item={item} />}
          keyExtractor={(item) => item._id}
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
          onPress={() =>
            navigation.navigate("Checkout", {
              cart,
            })
          }
        >
          <Text style={{ color: "white" }}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function CartDetailScreens() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Giỏ hàng",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  return (
    <CartProvider>
      <CartDetailUI />
    </CartProvider>
  );
}

export default CartDetailScreens;
