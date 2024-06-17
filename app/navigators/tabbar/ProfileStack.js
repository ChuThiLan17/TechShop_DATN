import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../screens/profile/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileTab() {
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile1" component={ProfileScreen} />
  </ProfileStack.Navigator>;
}

export { ProfileTab };
