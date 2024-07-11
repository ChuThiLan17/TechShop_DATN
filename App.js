import { NavigationContainer } from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";

import Toast from "react-native-toast-message";

import config from "./tamagui.config.ts";

import toastConfig from "./app/configs/Toastconfig.js";
import AppStack from "./app/navigators/AppStack.js";
import { customFontsToLoad } from "./app/theme/typography.js";

export default function App() {
  useFonts(customFontsToLoad);

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <AppStack />
        <Toast config={toastConfig} />
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
