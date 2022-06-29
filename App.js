
import React,{ useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import LoginPage from './Pages/Login';
import ForgetPass from './Pages/ForgetPass';
import Verification from './Pages/Verification'
import NewPass from './Pages/NewPass'
import OpenProject from './Pages/OpenProject'
import Bearing from './Pages/Bearing'
// const getFonts = () => {
//   return Font.loadAsync({
//     Calibri: require("./assets/fonts/calibri.ttf"),
    
//   })
// }

const Stack = createNativeStackNavigator();

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
export default function App() {
// const [fontLoading, setFontLoading] = useState(false);
// if (fontLoading)
// {
//  return <AppLoading
//       startAsync={getFonts}
//       onFinish= {() => setFontLoading(true)}
//       onError={console.warn}
//     />
// }
  return (
    <NavigationContainer>
    <Stack.Navigator
    // screenOptions={{gestureEnabled:true, gestsureDirection: 'horizontal', transitionSpec:{open: config, close: config}}}
    
        >
      <Stack.Screen name="OpenProject" component={OpenProject} options={{  headerShown: false,  }} />
      <Stack.Screen name="Bearing" component={Bearing} options={{ headerShown: false }}/>      
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="NewPass" component={NewPass} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
