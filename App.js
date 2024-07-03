import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";
import { StyleSheet } from "react-native";
import config from "./tamagui.config.ts";
import AppStack from "./app/navigators/AppStack.js";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Black: require("./assets/fonts/Outfit-Black.ttf"),
    Bold: require("./assets/fonts/Outfit-Bold.ttf"),

    ExtraBold: require("./assets/fonts/Outfit-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/Outfit-ExtraLight.ttf"),

    Light: require("./assets/fonts/Outfit-Light.ttf"),
    Medium: require("./assets/fonts/Outfit-Medium.ttf"),

    Regular: require("./assets/fonts/Outfit-Regular.ttf"),
    SemiBold: require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
