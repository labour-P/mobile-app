import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigation from "./Navigation/AppNavigation";

export default function App() {
  const [loaded] = useFonts({
    black: require("./assets/fonts/BeVietnamPro-Black.ttf"),
    bold: require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    italic: require("./assets/fonts/BeVietnamPro-Italic.ttf"),
    medium: require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    thin: require("./assets/fonts/BeVietnamPro-Thin.ttf"),
    normal: require("./assets/fonts/BeVietnamPro-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <AppNavigation />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}
