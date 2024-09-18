import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";

import NotificationScreen from "../../screens/notification/NotificationScreen";

const NotiStack = createNativeStackNavigator();

function NotiStackScreen() {
  return (
    <NotiStack.Navigator screenOptions={{ headerShown: false }}>
      <NotiStack.Screen name="Noti" component={NotificationScreen} />
    </NotiStack.Navigator>
  );
}

export default NotiStackScreen;
