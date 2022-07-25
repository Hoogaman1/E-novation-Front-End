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
        // backgroundColor: "#e5e5e5",
        backgroundColor: "#f0f0f0",
        marginTop: ResponsiveScreen.normalize(50),
        paddingTop:ResponsiveScreen.normalize(50),
        paddingLeft:ResponsiveScreen.normalize(50),
        flexDirection:'column'

      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: "http://127.0.0.1:8000/media/" + global.DATA.img }}
            style={{
              width: ResponsiveScreen.normalize(130),
              height: ResponsiveScreen.normalize(130),
              borderRadius: ResponsiveScreen.normalize(100),
              marginTop:ResponsiveScreen.normalize(15)
            }}
          />
        </View>
        <View>
          <Text style={Dstyles.toptext}> {global.DATA.company}</Text>
        </View>
      </View>
      <View style={{width:ResponsiveScreen.normalize(400),height:ResponsiveScreen.normalize(7),backgroundColor:"#f2ca30",borderRadius:150, marginTop:ResponsiveScreen.normalize(300)}}></View>
      <TouchableOpacity
        style={[Dstyles.box,{marginTop:ResponsiveScreen.normalize(20)}]}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("Notif");
        }}
      >
        <Text
        style={Dstyles.text}
        > Notification </Text>
      </TouchableOpacity>
      <View style={{width:ResponsiveScreen.normalize(400),height:ResponsiveScreen.normalize(5),backgroundColor:"#e0e0e0",borderRadius:150, marginTop:ResponsiveScreen.normalize(15)}}></View>

      <TouchableOpacity
        style={Dstyles.box}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("History");
        }}
      >
        <Text style={Dstyles.text}> History </Text>
      </TouchableOpacity>
      <View style={{width:ResponsiveScreen.normalize(400),height:ResponsiveScreen.normalize(5),backgroundColor:"#e0e0e0",borderRadius:150, marginTop:ResponsiveScreen.normalize(10)}}></View>

      <TouchableOpacity
        style={Dstyles.box}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("OpenProject");
        }}
      >
        <Text style={Dstyles.text}> Current Projects </Text>
      </TouchableOpacity>
      <View style={{width:ResponsiveScreen.normalize(400),height:ResponsiveScreen.normalize(5),backgroundColor:"#e0e0e0",borderRadius:150, marginTop:ResponsiveScreen.normalize(10)}}></View>

      <Text style={Dstyles.Vtext}> Version v1.0 TLS </Text>
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

const Dstyles = StyleSheet.create({
  box: {
    width:  ResponsiveScreen.normalize(400),
    height:  ResponsiveScreen.normalize(80),
    // backgroundColor: "#e5e5e5",
    marginTop:  ResponsiveScreen.normalize(20),
    borderRadius: ResponsiveScreen.normalize(30),
    alignItems:'center'
  },
  text: {
    width:  ResponsiveScreen.normalize(350),
    height:  ResponsiveScreen.normalize(90),
    // backgroundColor: "red",
    color:'#525151',
    fontSize: ResponsiveScreen.normalize(30),
    marginVertical:  ResponsiveScreen.normalize(20),
    fontFamily: 'Roboto'
  },
  toptext: {
    width:  ResponsiveScreen.normalize(350),
    height:  ResponsiveScreen.normalize(90),
    // backgroundColor: "red",
    color:'#192570',
    fontSize: ResponsiveScreen.normalize(45),
    marginLeft:  ResponsiveScreen.normalize(25),
    marginTop:  ResponsiveScreen.normalize(40),
  },
  Vtext: {
    width:  ResponsiveScreen.normalize(350),
    height:  ResponsiveScreen.normalize(90),
    // backgroundColor: "red",
    color:'#525151',
    fontSize: ResponsiveScreen.normalize(20),
    marginTop:  ResponsiveScreen.normalize(660),
    fontFamily: 'sans-serif-medium',
    marginHorizontal:ResponsiveScreen.normalize(120)
  },
})
export { Dstyles}