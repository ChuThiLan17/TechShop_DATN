import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Platform } from "react-native";

import AddressScreen from "../screens/address/address-screen";
import ListAddressScreen from "../screens/address/list-address-screen";
import ProductDetailScreen from "../screens/product/product-detail-screen";
import ProfileInfomationScreen from "../screens/profile/ProfileInfomationScreen";

import { MainTabbar } from "./tabbar";

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
    </Stack.Navigator>
  );
};

export default AppStack;
