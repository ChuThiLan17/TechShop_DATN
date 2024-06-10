import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { StatusBar } from "expo-status-bar";

import { StyleSheet } from "react-native";

import { View, XStack, Text, YStack } from "tamagui";

import config from "./tamagui.config.ts";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <XStack style={{ }} w={120} h={160} bg={"#ff6d03"} als={"center"}>
          <Text>aaaaaaaa</Text>
        </XStack>
        <YStack paddingBottom={20} mt={20} w={120} h={160} bg={"#ff6d03"} als={"center"}>

        </YStack>
      </View>
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
