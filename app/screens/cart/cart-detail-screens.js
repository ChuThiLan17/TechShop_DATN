import { useIsFocused } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import CheckBox from "expo-checkbox";

import api from "../../services";
import { KEY_ACTION_SET } from "../../constants/KeyRedux";
import { setCartProductAction } from "../../redux/action/productAction";

import { styles } from "./styles";

import RenderItemListCart from "./components/RenderItemListCart";

const CartDetailScreens = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [cart, setCart] = useState();

  const fetchCart = async () => {
    try {
      const res = await api.user.getInfoUser();
      if (res.data.success) {
        setCart(res.data.rs.cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchCart();
    }
  }, [isFocused]);

  props.navigation.setOptions({
    headerShown: true,
    headerTitle: "Giỏ hàng",
    headerTitleAlign: "center",
    headerShadowVisible: false,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.container, { padding: 5 }]}>
        <FlatList
          data={cart}
          renderItem={(item) => (
            <RenderItemListCart
              item={item}
              //   onValueChangeCheckbox={handleValueChangeCheckbox}
              //   onSubtractItem={handleSubtractItem}
              //   onPlusItem={handlePlusItem}
              //   onRemoveItem={handleRemoveItem}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={styles.viewCart}>
        <View style={[styles.btnDetai, { flex: 2 }]}>
          <CheckBox disabled={false} value={toggleCheckBox} />
          <Text style={styles.textTitle}>Tất cả</Text>
        </View>
        <View style={[styles.btnDetai, { flex: 5 }]}>
          <Text style={styles.textTitle}>Tổng thanh toán</Text>
          <Text style={[styles.textTitle, { color: "green" }]}>{} đ</Text>
        </View>
        <TouchableOpacity
          style={[styles.btnDetai, { flex: 3, backgroundColor: "black" }]}
          onPress={() => props.navigation.navigate("Checkout")}
        >
          <Text style={{ color: "white" }}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartDetailScreens;
