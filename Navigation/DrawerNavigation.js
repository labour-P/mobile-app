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
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import MyTab from "./TabNavigator";
import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#fff",
          height: 80,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            style={styles.logoImg}
            source={require("../assets/img/oval.png")}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={MyTab}
        options={{
          title: "Home",
          // headerShown: false,
        }}
      />
      <Drawer.Screen name="SearchScreen" component={Search} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },

  logoImg: {
    width: 50,
    resizeMode: "cover",
    marginLeft: Dimensions.get("window").width / 1.5,
    marginTop: 20,
  },
});
