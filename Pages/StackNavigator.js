// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import OpenProject from "./OpenProject";
import PhotoAlbum from "./PhotoAlbum";
// import LoginPage from "./Pages/Login";
import ForgetPass from "./ForgetPass";
import Verification from "./Verification";
import NewPass from "./NewPass";
// import OpenProject from "./Pages/OpenProject";
import Bearing from "./Bearing";
import History from "./History";
import Notif from "./Notif";
import DocAlbum from "./DocAlbum";
import Alert from "./Alert";
// import test from "./test";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
      <Stack.Screen name="Alert" component={Alert} options={{ headerShown: false, }} />
      {/* <Stack.Screen name="test" component={test} options={{ headerShown: false, }} />/ */}
      {/* <Stack.Screen name="OpenProject" component={OpenProject} /> */}
      <Stack.Screen name="DocAlbum" component={DocAlbum} options={{ headerShown: false, }} />
      <Stack.Screen name="Bearing" component={Bearing} options={{ headerShown: false }} />
      <Stack.Screen name="PhotoAlbum" component={PhotoAlbum} options={{ headerShown: false }} />
      <Stack.Screen name="OpenProject" component={OpenProject} options={{ headerShown: false, }} />
      <Stack.Screen name="Notif" component={Notif} options={{ headerShown: false, }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false, }} />
      <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false, }} />
      <Stack.Screen name="NewPass" component={NewPass} options={{ headerShown: false, }} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Login" component={Login} options={{  headerShown: false,  }} />
      
      <Stack.Screen name="DocAlbum" component={DocAlbum} options={{  headerShown: false,  }}/>
      <Stack.Screen name="Bearing" component={Bearing} options={{ headerShown: false }}/>      
      <Stack.Screen name="PhotoAlbum" component={PhotoAlbum} options={{ headerShown: false }}/>      
      <Stack.Screen name="OpenProject" component={OpenProject} options={{  headerShown: false,  }} />
      <Stack.Screen name="Notif" component={Notif} options={{  headerShown: false,  }} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} options={{  headerShown: false,  }}/>
      <Stack.Screen name="Verification" component={Verification} options={{  headerShown: false,  }}/>
      <Stack.Screen name="NewPass" component={NewPass} options={{  headerShown: false,  }}/> */}
    </Stack.Navigator>
  );
}

export { HistoryStackNavigator };
