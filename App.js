import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer } from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { useFonts } from "expo-font";

import Toast from "react-native-toast-message";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import config from "./tamagui.config.ts";

import toastConfig from "./app/configs/Toastconfig.js";
import { AuthProvider } from "./app/core/AuthProvider.js";
import AppStack from "./app/navigators/AppStack.js";
import { customFontsToLoad } from "./app/theme/typography.js";

export default function App() {
  useFonts(customFontsToLoad);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
        <BottomSheetModalProvider>
          <AuthProvider>
            <NavigationContainer>
              <AppStack />
              <Toast config={toastConfig} />
            </NavigationContainer>
          </AuthProvider>
        </BottomSheetModalProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
