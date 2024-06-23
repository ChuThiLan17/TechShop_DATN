import { FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Text } from "tamagui";

import AddressScreen from "../../screens/address/address-screen";
import ListAddressScreen from "../../screens/address/list-address-screen";
import ProductDetailScreen from "../../screens/product/product-detail-screen";

import HomeTab from "./HomeStack";
import ProfileTab from "./ProfileStack";

const Tab = createBottomTabNavigator();
function MainTabbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -12 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, sze }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListAddress"
        component={ListAddressScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -12 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, sze }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -12 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, sze }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { MainTabbar };
