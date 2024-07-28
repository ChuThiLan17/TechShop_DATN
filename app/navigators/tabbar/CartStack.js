import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";

import CartDetailScreens from "../../screens/cart/cart-detail-screens";

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="CartMain" component={CartDetailScreens} />
    </CartStack.Navigator>
  );
}

export default CartStackScreen;
