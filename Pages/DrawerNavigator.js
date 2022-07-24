// ./navigation/DrawerNavigator.js
// import LoginPage from './Login';
import React from "react";

import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, HistoryStackNavigator } from "./StackNavigator";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
// import TabNavigator from "./TabNavigator";
global.DATA = "";
function CustomDrawerContent(props) {
  return (
    <View
      style={{
        width: ResponsiveScreen.normalize(500),
        height: ResponsiveScreen.normalize(1600),
        backgroundColor: "#e5e5e5",
        marginTop: ResponsiveScreen.normalize(50),
        paddingTop:ResponsiveScreen.normalize(50),
        paddingLeft:ResponsiveScreen.normalize(50),
        flexDirection:'column'

      }}
    >
      <View style={{ flexDirection: "row", backgroundColor:"green" }}>
        <View>
          <Image
            source={{ uri: "http://127.0.0.1:8000/media/" + global.DATA.img }}
            style={{
              width: ResponsiveScreen.normalize(150),
              height: ResponsiveScreen.normalize(150),
              borderRadius: ResponsiveScreen.normalize(100),
            }}
          />
        </View>
        <View>
          <Text> {global.DATA.company}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width:  ResponsiveScreen.normalize(400),
          height:  ResponsiveScreen.normalize(100),
          backgroundColor: "#c8c9cc",
          marginTop:  ResponsiveScreen.normalize(40),
          borderRadius: ResponsiveScreen.normalize(30)
        }}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("Notif");
        }}
      >
        <Text> Notification </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "8%",
          backgroundColor: "red",
          marginTop: "10%",
        }}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("History");
        }}
      >
        <Text> History </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "8%",
          backgroundColor: "red",
          marginTop: "10%",
        }}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("OpenProject");
        }}
      >
        <Text> Current Projects </Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ drawerPosition: "right", drawerType: "front" }}
    >
      {/* <Drawer.Screen name="Home" component={TabNavigator} /> */}
      <Drawer.Screen
        name="Notification"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
