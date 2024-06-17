import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import { Text } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { HomeTab } from "./HomeStack";
import ProductDetailScreen from "../../screens/product/product-detail-screen";
import { ProfileTab } from "./ProfileStack";

const Tab = createBottomTabNavigator();
function MainTabbar() {
  return (
    <Tab.Navigator
      id="Tabbar"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "pink",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Profile"
        component={ProfileScreen}
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
        name="Profil2"
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
