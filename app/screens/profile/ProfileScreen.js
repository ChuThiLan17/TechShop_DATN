import { Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/nav-bar";

function ProfileScreen() {
  console.log("Render profile");
  return (
    <SafeAreaView>
      <Navbar text="ảnh dap" onPress={() => {}} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
