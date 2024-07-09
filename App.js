import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { AppRegistry, StyleSheet } from "react-native";

import { useFonts } from "expo-font";

import config from "./tamagui.config.ts";

import AppStack from "./app/navigators/AppStack.js";
import { customFontsToLoad } from "./app/theme/typography.js";

export default function App() {
  const [fontsLoaded, fontError] = useFonts(customFontsToLoad);

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
