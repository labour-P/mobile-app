import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTab from "./TabNavigator";
import Home from "../Screens/Home";
import Post from "../Screens/Post";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import DrawerTab from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="drawer" component={DrawerTab} />
      <Stack.Screen name="tabs" component={MyTab} />
      <Stack.Screen name="HomeScreen">
        {(props) => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen name="PostScreen">
        {(props) => <Post {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SearchScreen">
        {(props) => <Search {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ProfileScreen">
        {(props) => <Profile {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
