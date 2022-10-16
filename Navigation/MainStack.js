import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTab from "./TabNavigator";
import Home from "../Screens/Home";
import Notifications from "../Screens/Notifications";
import Trends from "../Screens/Post/Trends";
import Settings from "../Screens/Settings";
import DrawerTab from "./DrawerNavigation";
import Profile from "../Screens/Profile";
import CreatePost from "../Screens/Post/CreatePost";
import ViewImages from "../Screens/Post/ViewImages";
import Chat from "../Screens/Chat";
import EditProfile from "../Screens/EditProfile";

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
      <Stack.Screen name="TrendsScreen">
        {(props) => <Trends {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SettingsScreen">
        {(props) => <Settings {...props} />}
      </Stack.Screen>
      <Stack.Screen name="NotificationsScreen">
        {(props) => <Notifications {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ProfileScreen">
        {(props) => <Profile {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CreatePostScreen">
        {(props) => <CreatePost {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ViewImagesScreen">
        {(props) => <ViewImages {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ChatScreen">
        {(props) => <Chat {...props} />}
      </Stack.Screen>
      <Stack.Screen name="EditProfileScreen">
        {(props) => <EditProfile {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
