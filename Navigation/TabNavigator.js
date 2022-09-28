import * as React from "react";
import { Platform, Text, StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "../Screens/Profile";
import Post from "../Screens/Post";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import FloatingBtn from "../svg/FloatingBtn";

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
      activeColor={"#ccc"}
      inactiveColor="#c0c0c0"
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        paddingVertical: 5,
        fontSize: 20,
        zIndex: -10,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        tabBarLabelStyle
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          //   tabBarIcon: ({ color }) => <HomeSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Search}
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Wallet</Text>,
          //   tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="PostScreen"
        component={Post}
        options={{
          tabBarLabel: <Text style={styles.text}>Savings</Text>,
          //   tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarLabel: <Text style={styles.text}>Support</Text>,
          //   tabBarIcon: ({ color }) => <ProfileSvg color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function MyAndroidTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={"#3300cc"}
      inactiveColor="#c0c0c0"
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        paddingVertical: 5,
        fontSize: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: -1,
        borderTopColor: "#eee",
        borderTopWidth: 1,
      }}
    >
      <Tab.Screen
        name="HomScreen"
        component={Home}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          //   tabBarIcon: ({ color }) => <HomeSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Search}
        options={{
          tabBarLabel: <Text style={styles.text}>Wallet</Text>,
          //   tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="PostScreen"
        component={Post}
        options={{
          tabBarLabel: <Text style={styles.text}>Savings</Text>,
          //   tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
          //   tabBarIcon: ({ color }) => <ProfileSvg color={color} />,
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
    color: "#000",
  },
});
