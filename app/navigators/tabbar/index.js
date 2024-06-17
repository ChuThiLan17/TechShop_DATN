import { FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Text } from "tamagui";

import HomeStackScreen from "../tabbar/HomeStack";
import ProfileStackScreen from "../tabbar/ProfileStack";

const Tab = createBottomTabNavigator();
function MainTabbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export { MainTabbar };
