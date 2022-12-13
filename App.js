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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from "./Pages/DrawerNavigator";
import { MainStackNavigator } from "./Pages/StackNavigator";

import OneSignal from 'react-native-onesignal';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("c6c6bb5f-bb26-495a-9d24-6a1322b5d270");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
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
// const getData = async () => {
//   // console.log('bbbbbbbbbbbbbb')
  
//     try {
//       const value = await AsyncStorage.getItem('@token')
//       const value2 = await AsyncStorage.getItem('@obj')
//       if(value !== '1') {
//         // value previously stored
//         global.TOKEN=value
//         global.OBJ = JSON.parse(value2);
//         // global.OBJ=JSON.parse(parsed_data);
//         console.log('salammmmat')
//         // setToggle(true)
//         // setTimeout(() => 
//         // props.navigation.navigate("OpenProject")
//         // ,1000)
//       //   props.navigation.navigate("Users");

//       }else {
//           setTimeout(() => 
//           props.navigation.navigate("Login")
//            ,1000)
           
//       }
//     } catch(e) {
//       // setToggle(false)

//       // error reading value
//       console.log(e)

//     }
//   };
//   getData()
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
  global.UURL = "154.26.136.182:8001"

  // global.UURL = "192.168.43.223:8000"
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
