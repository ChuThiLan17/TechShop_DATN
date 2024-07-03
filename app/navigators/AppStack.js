import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Platform } from "react-native";

import AddressScreen from "../screens/address/address-screen";
import ListAddressScreen from "../screens/address/list-address-screen";
import ProductDetailScreen from "../screens/product/product-detail-screen";
import ProfileInfomationScreen from "../screens/profile/ProfileInfomationScreen";
import OrderScreen from "../screens/profile/order/OrderScreen";

import { MainTabbar } from "./tabbar";
import CartScreen from "../screens/product/cart-screen";
import CheckoutScreen from "../screens/product/checkout-screen";

const Stack = createNativeStackNavigator();

const AppStack = function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabbar"
    >
      <Stack.Screen name="Tabbar" component={MainTabbar} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="ListAddress" component={ListAddressScreen} />
      <Stack.Screen name="DetailProduct" component={ProductDetailScreen} />
      <Stack.Screen name="UpdateInfo" component={ProfileInfomationScreen} />
<<<<<<< HEAD
      <Stack.Screen name="Order" component={OrderScreen} />
=======
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
>>>>>>> 7b6697764d9496590e8f5f7055d31b280daca4fa
    </Stack.Navigator>
  );
};

export default AppStack;
