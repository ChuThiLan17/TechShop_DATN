import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { NavigationContainer } from "@react-navigation/native";

import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";

import { useFonts } from "expo-font";

import Toast from "react-native-toast-message";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";

import config from "./tamagui.config.ts";

import toastConfig from "./app/configs/Toastconfig.js";
import AppStack from "./app/navigators/AppStack.js";
import Store from "./app/redux/Store.js";
import { customFontsToLoad } from "./app/theme/typography.js";

export default function App() {
  useFonts(customFontsToLoad);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={Store}>
        <TamaguiProvider config={config}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <AppStack />
              <Toast config={toastConfig} />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </TamaguiProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
