// ./navigation/DrawerNavigator.js
// import LoginPage from './Login';
import React, { Component } from "react";
import {
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons,

  // MaterialCommunityIcons
} from "@expo/vector-icons";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Linking,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, HistoryStackNavigator } from "./StackNavigator";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { mystyles } from "./OpenProject";
ResponsiveScreen.init(720, 1600);
// import TabNavigator from "./TabNavigator";
global.DATA = "";
// global.URl = "192.168.108.160:8000";
global.UURL = "192.168.1.135:8000"
let phoneNumber = 'tel:${+6186117749}';
const makeCall = () => {
  Linking.openURL(phoneNumber);
};
function CustomDrawerContent(props) {
  return (
    <View
      style={{
        width: ResponsiveScreen.normalize(500),
        height: ResponsiveScreen.normalize(1600),
        // backgroundColor: "#e5e5e5",
        // backgroundColor: "#f0f0f0",
        // backgroundColor: "#f2ca30",
        marginTop: ResponsiveScreen.normalize(50),
        paddingTop: ResponsiveScreen.normalize(50),
        paddingLeft: ResponsiveScreen.normalize(50),
        flexDirection: "column",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <View>
          <Image
            source={{ uri: "http://" + global.UURL + "/media/" + global.DATA.img }}
            style={{
              width: ResponsiveScreen.normalize(130),
              height: ResponsiveScreen.normalize(130),
              borderRadius: ResponsiveScreen.normalize(30),
              marginTop: ResponsiveScreen.normalize(15),
              marginHorizontal: ResponsiveScreen.normalize(-10),
            }}
            resizeMode={'center'}
          />
        </View>
        <View>
          <Text style={Dstyles.toptext}>Welcome...!</Text>
          <Text style={{
            width: ResponsiveScreen.normalize(380),
            color: "#fff",
            fontSize: ResponsiveScreen.normalize(40),
            marginLeft: ResponsiveScreen.normalize(-13),
            marginTop: ResponsiveScreen.normalize(10),
            marginBottom: ResponsiveScreen.normalize(70),

          }}>{global.DATA.company}</Text>
          {/* <Text style={[Dstyles.toptext,{marginTop:ResponsiveScreen.normalize(-68),width:ResponsiveScreen.normalize(455)}]}>saman</Text> */}
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          // backgroundColor: "gray",
          width: ResponsiveScreen.normalize(420),
          height: ResponsiveScreen.normalize(70),
          marginLeft: ResponsiveScreen.normalize(-13),
          marginTop: ResponsiveScreen.normalize(-10),
          borderRadius: ResponsiveScreen.normalize(20),
          justifyContent: 'center'
        }}
      >
        <Text
          style={[
            Dstyles.Ctext,
            { marginTop: ResponsiveScreen.normalize(0), color: "#fff" },
          ]}
        >
          Your Open Projects:{" "}
          <Text style={{ color: "#3b3b3b" }}>{global.DATA.openproject}</Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          width: ResponsiveScreen.normalize(420),
          height: ResponsiveScreen.normalize(70),
          marginLeft: ResponsiveScreen.normalize(-13),
          marginTop: ResponsiveScreen.normalize(8),
          borderRadius: ResponsiveScreen.normalize(20),
          justifyContent: 'center'
        }}
      >
        <Text
          style={[
            Dstyles.Ctext,
            { marginTop: ResponsiveScreen.normalize(0), color: "#fff" },
          ]}
        >
          Your All Projects:
          <Text style={{ color: "#3b3b3b" }}> {global.DATA.allproject}</Text>
        </Text>
      </View>
      <View
        style={{
          width: ResponsiveScreen.normalize(400),
          height: ResponsiveScreen.normalize(5),
          backgroundColor: "#fff",
          borderRadius: 150,
          marginTop: ResponsiveScreen.normalize(47),
        }}
      ></View>
      <TouchableOpacity
        style={Dstyles.box}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("OpenProject");
        }}
      >
        <View style={Dstyles.icon}>
          <AntDesign name="setting" size={24} color="#fff" />
        </View>
        <Text
          style={[Dstyles.text, { marginLeft: ResponsiveScreen.normalize(12) }]}
        >
          Current Projects{" "}
        </Text>
      </TouchableOpacity>
      {/* <View
        style={{
          width: ResponsiveScreen.normalize(400),
          height: ResponsiveScreen.normalize(5),
          backgroundColor: "#e0e0e0",
          borderRadius: 150,
          marginTop: ResponsiveScreen.normalize(2),
        }}
      ></View> */}
      <TouchableOpacity
        style={Dstyles.box}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate('History', { token: global.TOKEN });
        }}
      >
        <View style={Dstyles.icon}>
          <MaterialCommunityIcons name="history" size={25} color="#fff" />
        </View>
        <Text style={Dstyles.text}>History </Text>
      </TouchableOpacity>
      {/* <View
        style={{
          width: ResponsiveScreen.normalize(400),
          height: ResponsiveScreen.normalize(5),
          backgroundColor: "#e0e0e0",
          borderRadius: 150,
          marginTop: ResponsiveScreen.normalize(2),
        }}
      ></View> */}
      <TouchableOpacity
        style={[Dstyles.box, { marginTop: ResponsiveScreen.normalize(20) }]}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("Notif");
        }}
      >
        <View style={Dstyles.icon}>
          {/* <FontAwesome5 name="bell" size={18} color="#525151"/> */}
          {/* <EvilIcons name="bell" size={26} color="#525151" /> */}
          {/* <FontAwesome name="bell-o" size={20} color="#fff" /> */}
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>
        <Text
          style={[Dstyles.text, { marginLeft: ResponsiveScreen.normalize(23) }]}
        >
          Notification{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Dstyles.box, { marginTop: ResponsiveScreen.normalize(20) }]}
        onPress={makeCall}
      >
        <View style={Dstyles.icon}>
          {/* <FontAwesome5 name="bell" size={18} color="#525151"/> */}
          {/* <EvilIcons name="bell" size={26} color="#525151" /> */}
          {/* <FontAwesome name="bell-o" size={20} color="#fff" /> */}
          <Feather name="headphones" size={22} color="#fff" />
        </View>
        <Text
          style={[Dstyles.text, { marginLeft: ResponsiveScreen.normalize(23) }]}
        >
          Call Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Dstyles.box, { marginTop: ResponsiveScreen.normalize(20) }]}
        onPress={makeCall}
      >
        <View style={Dstyles.icon}>
          {/* <FontAwesome5 name="bell" size={18} color="#525151"/> */}
          {/* <EvilIcons name="bell" size={26} color="#525151" /> */}
          {/* <FontAwesome name="bell-o" size={20} color="#fff" /> */}
          <MaterialCommunityIcons name="message-text-outline" size={23} color="#fff" />
        </View>
        <Text
          style={[Dstyles.text, { marginLeft: ResponsiveScreen.normalize(23) }]}
        >
          Text Message
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Dstyles.box, { marginTop: ResponsiveScreen.normalize(20) }]}
        onPress={makeCall}
      >
        <View style={Dstyles.icon}>
          <AntDesign name="appstore-o" size={21} color="#fff" />
        </View>
        <Text
          style={[Dstyles.text, { marginLeft: ResponsiveScreen.normalize(23) }]}
        >
          About Us
        </Text>
      </TouchableOpacity>

      {/* <View
        style={{
          width: ResponsiveScreen.normalize(400),
          height: ResponsiveScreen.normalize(5),
          backgroundColor: "#e0e0e0",
          borderRadius: 150,
          marginTop: ResponsiveScreen.normalize(2),
        }}
      ></View> */}

      <Text style={Dstyles.Vtext}> Version v1.0 </Text>
      <Text
        style={[
          Dstyles.Vtext,
          {
            marginTop: ResponsiveScreen.normalize(-20),
            marginHorizontal: ResponsiveScreen.normalize(0),
            width: ResponsiveScreen.normalize(450),
            fontSize: ResponsiveScreen.fontSize(16),
          },
        ]}
      >
        {" "}
        All rights reserved by E-novation engineering Co.{" "}
      </Text>
    </View>
  );
}
// const DrawerR = createDrawerNavigator();

// function RightDrawer() {
//   return (
//     <DrawerR.Navigator initialRouteName="Home" drawerPosition="right">
//       <DrawerR.Screen name="Home" component={HomeStack} />
//       <DrawerR.Screen name="Menu" component={MenuScreen} />
//       <DrawerR.Screen name="Favorit" component={FavoritScreen} />
//     </DrawerR.Navigator>
//   )
// }

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerType: "front",
        drawerStyle: {
          backgroundColor: "#f2ca30",
          // width: 240,
        },
      }}
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
      {/* <Drawer.Screen
        name="Settings"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Dstyles = StyleSheet.create({
  box: {
    width: ResponsiveScreen.normalize(400),
    height: ResponsiveScreen.normalize(80),
    marginLeft: ResponsiveScreen.normalize(-12),
    // backgroundColor: "#e5e5e5",
    marginTop: ResponsiveScreen.normalize(28),
    borderRadius: ResponsiveScreen.normalize(30),
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    width: ResponsiveScreen.normalize(350),
    height: ResponsiveScreen.normalize(90),
    marginLeft: ResponsiveScreen.normalize(15),

    // backgroundColor: "red",
    color: "#fff",
    fontSize: ResponsiveScreen.normalize(30),
    marginVertical: ResponsiveScreen.normalize(10),
    marginTop: ResponsiveScreen.normalize(35),
    fontFamily: "Roboto",
  },
  toptext: {
    width: ResponsiveScreen.normalize(380),
    // height: ResponsiveScreen.normalize(100),
    // backgroundColor: "red",
    // color: "#192570",
    color: "#fff",
    fontSize: ResponsiveScreen.normalize(40),
    marginLeft: ResponsiveScreen.normalize(-13),
    marginTop: ResponsiveScreen.normalize(17),
  },
  Vtext: {
    width: ResponsiveScreen.normalize(350),
    height: ResponsiveScreen.normalize(60),
    // backgroundColor: "red",
    color: "#fff",
    fontSize: ResponsiveScreen.normalize(24),
    marginTop: ResponsiveScreen.normalize(550),
    fontFamily: "sans-serif-medium",
    marginHorizontal: ResponsiveScreen.normalize(145),
  },
  Ctext: {
    width: ResponsiveScreen.normalize(370),
    // height: ResponsiveScreen.normalize(50),
    // backgroundColor: "red",
    color: "#192570",
    fontSize: ResponsiveScreen.normalize(27),
    // fontFamily: 'sans-serif-medium',
    marginLeft: ResponsiveScreen.normalize(15),
  },
  icon: {
    // width:  ResponsiveScreen.normalize(350),
    // height:  ResponsiveScreen.normalize(90),
    marginTop: ResponsiveScreen.normalize(-15),

    // marginLeft:ResponsiveScreen.normalize(15)
  },
});
export { Dstyles };
