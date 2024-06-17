import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
    </Stack.Navigator>
  );
};

export default AppStack;
