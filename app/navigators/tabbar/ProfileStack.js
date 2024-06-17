import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../screens/profile/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileTab() {
  <ProfileStack.Navigator initialRouteName="Main">
    <ProfileStack.Screen name="Main" component={ProfileScreen} />
  </ProfileStack.Navigator>;
}

export { ProfileTab };
