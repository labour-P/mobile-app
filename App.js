import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigation from "./Navigation/AppNavigation";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

export default function App() {
  const [data, setData] = useState(null);

  const handleDeepLink = (e) => {
    let res = Linking.parse(e.url);
    setData(res);
  };

  useEffect(() => {
    if (data) {
      console.log(JSON.stringify(data));
    } else {
      console.log("app not opened from deep link");
    }
  }, [data]);

  useEffect(() => {
    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL();

      if (initialURL) setData(Linking.parse(initialURL));
    }

    const unsub = Linking.addEventListener("url", handleDeepLink);

    if (!data) {
      getInitialURL();
    }

    return () => {
      unsub;
    };
  }, []);

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

  const linking = {
    prefixes: [prefix, "http://labourp.ng/app"],
    config: {
      screens: {
        ViewPostScreen: "home",
        SignupScreen: "settings",
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
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
