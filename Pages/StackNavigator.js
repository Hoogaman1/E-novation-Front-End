// ./navigation/StackNavigator.js

import {React,useState} from "react";
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
import AboutUs from "./AboutUs";
// import test from "./test";
import Process from "./Process";
import HandShake from "./HandShake";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


const MainStackNavigator = () => {

  const [toggle, setToggle] = useState(false)
  const [conut, setconut] = useState(0)
  
  // const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('@token')
  //       const value2 = await AsyncStorage.getItem('@obj')
  //         // console.log('2222222222222222222222222222222222222')
  //         // console.log(value)
  //         // console.log('22222222222222222222222222222222222222')
  
  //       if(value !== null && value !== '1') {
  //         // value previously stored
  //         global.TOKEN=value
  //         global.OBJ=value2
  //         setToggle(true)
  //         // console.log('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
  //         // setconut(conut+1)
  
  //       }else {console.log('cant')}
  //     } catch(e) {}
  //   };
  //   getData()
    console.log(conut)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Process" component={Process} options={{ headerShown: false, }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
      <Stack.Screen name="Alert" component={Alert} options={{ headerShown: false, }} />
      <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false, }} />
      {/* <Stack.Screen name="test" component={test} options={{ headerShown: false, }} />/ */}
      {/* <Stack.Screen name="OpenProject" component={OpenProject} /> */}
      <Stack.Screen name="HandShake" component={HandShake} options={{ headerShown: false, }} />
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
