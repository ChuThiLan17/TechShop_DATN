import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainTabbar } from "./tabbar";
import AddressScreen from "../screens/address/address-screen";
import ListAddressScreen from "../screens/address/list-address-screen";
import ProductDetailScreen from "../screens/product/product-detail-screen";
import { Platform } from "react-native";

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
    </Stack.Navigator>
  );
};

export default AppStack;
