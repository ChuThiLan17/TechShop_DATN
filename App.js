import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { useFonts } from "expo-font";

import Toast from "react-native-toast-message";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";

import { useEffect } from "react";

import config from "./tamagui.config.ts";

import { linking } from "./app/common/Linking.js";
import toastConfig from "./app/configs/Toastconfig.js";
import { AuthProvider } from "./app/core/AuthProvider.js";
import AppStack from "./app/navigators/AppStack.js";
import Store from "./app/redux/Store.js";
import { customFontsToLoad } from "./app/theme/typography.js";

export default function App() {
  useFonts(customFontsToLoad);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={Store}>
        <AuthProvider>
          <TamaguiProvider config={config}>
            <BottomSheetModalProvider>
              <NavigationContainer linking={linking}>
                <AppStack />
                <Toast config={toastConfig} />
              </NavigationContainer>
            </BottomSheetModalProvider>
          </TamaguiProvider>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
