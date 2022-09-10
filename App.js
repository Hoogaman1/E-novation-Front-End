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
import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import PhotoAlbum from "./Pages/PhotoAlbum";
import LoginPage from "./Pages/Login";
import ForgetPass from "./Pages/ForgetPass";
import Verification from "./Pages/Verification";
import NewPass from "./Pages/NewPass";
import OpenProject from "./Pages/OpenProject";
import Bearing from "./Pages/Bearing";
import History from "./Pages/History";
import Notif from "./Pages/Notif";
import DocAlbum from "./Pages/DocAlbum";
// import test from "./Pages/test";

import DrawerNavigator from "./Pages/DrawerNavigator";
import { MainStackNavigator } from "./Pages/StackNavigator";
// import EditProject from './Pages/EditProject'
// const getFonts = () => {
//   return Font.loadAsync({
//     Calibri: require("./assets/fonts/calibri.ttf"),

//   })
// }
// function HomeScreen({ navigation }) {
//   return (
//    <Stack.Navigator>
//     {/* // screenOptions={{gestureEnabled:true, gestsureDirection: 'horizontal', transitionSpec:{open: config, close: config}}}> */}
//       <Stack.Screen name="LoginPage" component={LoginPage} options={{  headerShown: false,  }}/>
//       {/* <Stack.Screen name="test" component={test} options={{  headerShown: false,  }}/> */}
//       <Stack.Screen name="DocAlbum" component={DocAlbum} options={{  headerShown: false,  }}/>
//       <Stack.Screen name="Bearing" component={Bearing} options={{ headerShown: false }}/>      
//       <Stack.Screen name="PhotoAlbum" component={PhotoAlbum} options={{ headerShown: false }}/>      
//       <Stack.Screen name="OpenProject" component={OpenProject} options={{  headerShown: false,  }} />
//       <Stack.Screen name="Notif" component={Notif} options={{  headerShown: false,  }} />
//       <Stack.Screen name="History" component={History} options={{ headerShown: false }}/>      
//       <Stack.Screen name="ForgetPass" component={ForgetPass} options={{  headerShown: false,  }}/>
//       <Stack.Screen name="Verification" component={Verification} options={{  headerShown: false,  }}/>
//       <Stack.Screen name="NewPass" component={NewPass} options={{  headerShown: false,  }}/>
//     </Stack.Navigator> 
//   );
// }
// function NotificationsScreen({ navigation }) {
//   return (
//     <Drawer.Navigator
//     initialRouteName="Home"
//     screenOptions={{ drawerPosition: "right", drawerType: "front" }}
//   >

//     <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//     <Drawer.Screen name="Notifications" component={Notif} />
//     <Drawer.Screen name="History" component={History} />
//     <Drawer.Screen name="Settings" component={NotificationsScreen} />
//   </Drawer.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();




// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
// const closeConfig = {
//   animation:'timing',
//   config: {
//     duration:500,
//     easing:Easing.linear
//   }
// }
export default function App({ navigation }) {
  // const [fontLoading, setFontLoading] = useState(false);
  // if (fontLoading)
  // {
  //  return <AppLoading
  //       startAsync={getFonts}
  //       onFinish= {() => setFontLoading(true)}
  //       onError={console.warn}
  //     />
  // }
  // global.UURL = "192.168.1.135:8000"
  global.UURL = "192.168.43.223:8000"
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
    // screenOptions={{gestureEnabled:true, gestsureDirection: 'horizontal', transitionSpec:{open: config, close: config}}}>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{  headerShown: false,  }}/>
      <Stack.Screen name="test" component={test} options={{  headerShown: false,  }}/>
      <Stack.Screen name="DocAlbum" component={DocAlbum} options={{  headerShown: false,  }}/>
      <Stack.Screen name="Bearing" component={Bearing} options={{ headerShown: false }}/>      
      <Stack.Screen name="PhotoAlbum" component={PhotoAlbum} options={{ headerShown: false }}/>      
      <Stack.Screen name="OpenProject" component={OpenProject} options={{  headerShown: false,  }} />
      <Stack.Screen name="Notif" component={Notif} options={{  headerShown: false,  }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }}/>      
      <Stack.Screen name="ForgetPass" component={ForgetPass} options={{  headerShown: false,  }}/>
      <Stack.Screen name="Verification" component={Verification} options={{  headerShown: false,  }}/>
      <Stack.Screen name="NewPass" component={NewPass} options={{  headerShown: false,  }}/>
      <Stack.Screen name="DrawerOpen" component={NotificationsScreen} options={{  headerShown: false,  }}/>
    </Stack.Navigator> */}
      <DrawerNavigator drawerContent={(props) => <CustomDrawerContent {...props} />} />
      {/* <MainStackNavigator /> */}
    </NavigationContainer>
  );
}
{
  /* <Stack.Screen name="EditProject" component={EditProject} options={{  headerShown: false,  }} /> */
}
