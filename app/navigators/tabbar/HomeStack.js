import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";

import HomeScreen from "../../screens/home/HomeScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
