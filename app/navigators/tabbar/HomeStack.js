import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/home/HomeScreen";

const HomeStack = createNativeStackNavigator();

function HomeTab() {
  <HomeStack.Navigator initialRouteName="Main">
    <HomeStack.Screen name="Main" component={HomeScreen} />
  </HomeStack.Navigator>;
}

export { HomeTab };
