import * as React from "react";
import {
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import MyTab from "./TabNavigator";
import { Feather } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import { colors } from "../constants/color";

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.white,
          height: 70,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Feather name="menu" size={24} color={colors.black} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            style={styles.logoImg}
            source={require("../assets/img/logo-main.png")}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={MyTab}
        options={{
          title: "Home",
          // headerShown: false,
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },

  logoImg: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginLeft: Dimensions.get("window").width / 1.5,
  },
});
