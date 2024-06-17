import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { StyleSheet } from "react-native";

import { View, XStack, Text, YStack } from "tamagui";

import config from "./tamagui.config.ts";

import AppStack from "./app/navigators/AppStack.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
       <AppStack/>
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
