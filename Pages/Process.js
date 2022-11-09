import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
// import {
//   MaterialCommunityIcons,
//   Octicons,
//   FontAwesome5,
//   AntDesign,
//   Ionicons
// } from "@expo/vector-icons";
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { styles, Tabletstyles ,stylesAlF} from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import {
  EvilIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Entypo,
  Feather,
} from "@expo/vector-icons";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
// import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import { getTimeProps } from "antd/lib/date-picker/generatePicker/index.js";
import { and } from "react-native-reanimated";

const Process = (props) => {
  // const getData = async () => {
  //   // console.log('bbbbbbbbbbbbbb')
    
  //     try {
  //       const value = await AsyncStorage.getItem('@token')
  //       const value2 = await AsyncStorage.getItem('@obj')
  //       if(value !== '1') {
  //         // value previously stored
  //         global.TOKEN=value
  //         var parsed_data = JSON.parse(value2);
  //         global.OBJ=JSON.parse(parsed_data);
  //         console.log('salammmm')
  //         // setToggle(true)
  //         setTimeout(() => 
  //         props.navigation.navigate("OpenProject")
  //         ,1000)
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
  const getData = async () => {
    // console.log('bbbbbbbbbbbbbb')
    
      try {
        const value = await AsyncStorage.getItem('@token')
    
        if(value !== '1') {
          // value previously stored
          // global.TOKEN=value
          // var parsed_data = JSON.parse(value2);
          // global.OBJ=JSON.parse(parsed_data);
          console.log('salammmm')
          // setToggle(true)
          setTimeout(() => 
          props.navigation.navigate("OpenProject")
          ,1000)
        //   props.navigation.navigate("Users");

        }else {
            setTimeout(() => 
            props.navigation.navigate("Login")
             ,1000)
             
        }
      } catch(e) {
        // setToggle(false)

        // error reading value
        console.log(e)
  
      }
    };
    getData()
  const [process, setP] = useState("Prossesing");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setEmail(textValue);
  const onPChange = (textValue) => setPassword(textValue);
  const isStatus = 404;
  const [count, setCount] = useState(0);
  const [show1, setState1] = useState(false);
  const [show2, setState2] = useState(true);
  const [showpass, setSP] = useState(false);
  const [biababa, setBiababa] = useState();
  const [checked1, setChecked1] = useState(false);
    

  const storeData = async (value) => {
    if(checked1==true){
    try {
      await AsyncStorage.setItem('@token', value)
      // const testi = await AsyncStorage.getItem('@token')
      
      // console.log(testi)

    } catch (e) {
      // saving error
      console.log(e)
    }}else {console.log('checkBox is off')}
  }
  // const getData = async () => {
    
  //   try {
  //     const value = await AsyncStorage.getItem('@token')
  //     if(value !== null) {
  //       // value previously stored
  //       // onEChange({textValue:value})
        
  //       if(checked1==true && flag==1){
  //       console.log(email)
  //       setflag(flag+1)
  //       setEmail(value)
  //       console.log('asan oodafezs')
  //       }else{console.log('nemikhad')}
    
  //     }
  //   } catch(e) {
  //     // error reading value
  //     console.log('cache')

  //   }
  // }
  // getData()
  // console.log('kkkkkkkkkkkkkkkkkkkk');
  useEffect(
    () => {
//   setTimeout(() => setP( process + " ."), 100)}, [process]);
  setP( process )}, [process]);
 


  const sendToken = () => {
    // props.navigation.navigate("Users");
  };
  return (
    <View style={{flex:1,backgroundColor:'#f2ca30',alignItems:'center'}}>
    
    <Image
          source={require("../assets/app_ui2-12.png")}
          style={{position:'absolute',top:'46.2%',height: wh * 7 / 100,width:ww*59/100,resizeMode:'cover'}}
        />
        {/* <View style=></View> */}
        <View style={{backgroundColor:'#f2ca30',position:'absolute',bottom:'40%',width:ww*60/100,height:wh*3/100,borderRadius:(ww+wh)*1/200,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:ResponsiveScreen.fontSize(25),fontWeight:'400'}}>processing ...</Text>
        </View>
    </View>
  );
};

export default Process;

