import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "../Screens/Auth/Login";
import Signup from "../Screens/Auth/Signup";
import EmailAndPhone from "../Screens/Auth/EmailAndPhone";
import Otp from "../Screens/Auth/Otp";
import State from "../Screens/Auth/State";
import DateOfBirth from "../Screens/Auth/DateOfBirth";
import UsernameAndPassword from "../Screens/Auth/UsernameAndPassword";

const Stack = createNativeStackNavigator();

export function AuthStack(props) {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);

  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignupScreen">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EmailAndPhoneScreen">
          {(props) => <EmailAndPhone {...props} />}
        </Stack.Screen>
        <Stack.Screen name="OtpScreen">
          {(props) => <Otp {...props} />}
        </Stack.Screen>
        <Stack.Screen name="StateScreen">
          {(props) => <State {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DateOfBirthScreen">
          {(props) => <DateOfBirth {...props} />}
        </Stack.Screen>
        <Stack.Screen name="UsernameAndPasswordScreen">
          {(props) => <UsernameAndPassword {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignupScreen">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EmailAndPhoneScreen">
          {(props) => <EmailAndPhone {...props} />}
        </Stack.Screen>
        <Stack.Screen name="OtpScreen">
          {(props) => <Otp {...props} />}
        </Stack.Screen>
        <Stack.Screen name="StateScreen">
          {(props) => <State {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DateOfBirthScreen">
          {(props) => <DateOfBirth {...props} />}
        </Stack.Screen>
        <Stack.Screen name="UsernameAndPasswordScreen">
          {(props) => <UsernameAndPassword {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
