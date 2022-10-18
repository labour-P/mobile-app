import * as React from "react";
import { Platform, Text, StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Settings from "../Screens/Settings";
import Notifications from "../Screens/Notifications";
import Home from "../Screens/Home";
import Trends from "../Screens/Post/Trends";
import HomeIcon from "../svg/HomeIcon";
import TrendsIcon from "../svg/TrendsIcon";
import { Ionicons } from "@expo/vector-icons";
import NotificationsIcon from "../svg/NotificationsIcon";
import UserIcon from "../svg/User";
import { colors } from "../constants/color";

const Tab = createMaterialBottomTabNavigator();

let MyTab;

if (Platform.OS === "android") {
  MyTab = MyAndroidTabs;
} else if (Platform.OS === "ios") {
  MyTab = MyIosTabs;
}

function MyIosTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={colors.greenText}
      inactiveColor={colors.primaryGray}
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: colors.white,
        paddingVertical: 5,
        fontSize: 25,
        shadowColor: colors.darkText,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: -1,
        borderTopColor: colors.primaryGray,
        borderTopWidth: 1,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        tabBarLabelStyle
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="TrendsScreen"
        component={Trends}
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Trends</Text>,
          tabBarIcon: ({ color }) => <TrendsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={Notifications}
        options={{
          tabBarLabel: <Text style={styles.text}>Savings</Text>,
          tabBarIcon: ({ color }) => <NotificationsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function MyAndroidTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={colors.greenText}
      inactiveColor={colors.primaryGray}
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: colors.white,
        paddingVertical: 5,
        fontSize: 25,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: -1,
        borderTopColor: colors.primaryGray,
        borderTopWidth: 1,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="TrendsScreen"
        component={Trends}
        options={{
          tabBarLabel: <Text style={styles.text}>Trends</Text>,
          tabBarIcon: ({ color }) => <TrendsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={Notifications}
        options={{
          tabBarLabel: <Text style={styles.text}>Notifications</Text>,
          tabBarIcon: ({ color }) => <NotificationsIcon color={color} />,
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;

const styles = StyleSheet.create({
  text: {
    fontSize: 9,
    fontFamily: "bold",
    marginTop: 50,
    paddingTop: 5,
    position: "absolute",
    top: 10,
    color: colors.black,
  },
});
