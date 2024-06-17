import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();
function MainTabbar() {
  return (
    <Tab.Navigator id="Tabbar">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export { MainTabbar };
