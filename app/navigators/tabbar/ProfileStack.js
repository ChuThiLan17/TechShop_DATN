import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";

import ProfileScreen from "../../screens/profile/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
