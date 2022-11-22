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


  global.PROJ=null
  global.TOKEN=null
  global.UDATA=null
  global.UI=null
  global.PASS = null
  global.OBJ = null
  

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
    console.log('bbbbbbbbbbbbbb')
    
      try {
        const value = await AsyncStorage.getItem('@email')
        const value2 = await AsyncStorage.getItem('@password')
        // const value = global.EMAIL
        // const value2 = global.PASS
        console.log('ghable')
        console.log(value)
        console.log(value2)
        console.log('badeee')
        if(value) {
          console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
          console.log(value)
          console.log(value2)
          // if (1===2){
          axios({
            method: "POST",
            // url: "http://127.0.0.1:8000/USER/login/",
            url: "http://" + global.UURL + "/USER/login/",
            headers: {
              // 'Content-Type': "application/json",
              // Authorization: `Token ${mahdi}`,
              // 'Accept': 'application/json'
            },
            data: {
              email: value,
              password: value2,
            },
          })
            // .then((response) => console.log(response.status))
            .then((response) => {
              console.log('javab')
              global.OBJ=response.data.data
              if (response.status == "202") {
                global.TOKEN = response.data.data.token;
                // storeData(response.data.data.token);
                global.DATA = response.data.data.company;
                setTimeout(() => sendToken(), 500);
                console.log(response.data);
                console.log(global.TOKEN);
                console.log("bad");
              }
 
            })
      
            .catch((error) => {
              // console.log(error.response.status);
              console.log('catch');
              setTimeout(() => 
              props.navigation.navigate("Login")
               ,20)
 
              // if (error.response.status == "0") {
              //   global.HANDSHAKE = "Login";
              //   props.navigation.navigate("HandShake");
              // } else if (error.response.status == "404") {
              //   let brobaba = "Wrong email or password";
            
              // }else if (error.response.status == "500"){
              //   let brobaba = "Wrong email";
               
              // }
            });
      
        
          // setTimeout(() => 
          // props.navigation.navigate("OpenProject")
          // ,1000)

        }else {
          console.log('catch2');
            setTimeout(() => 
            props.navigation.navigate("Login")
             ,1000)
             
        }
      } catch(e) {
        console.log(e);
        setTimeout(() => 
            props.navigation.navigate("Login")
             ,1000)
  
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
    

  // const storeData = async (value) => {
  //   if(checked1==true){
  //   try {
  //     await AsyncStorage.setItem('@token', value)
  //   } catch (e) {
  //     // saving error
  //     console.log(e)
  //   }}else {console.log('checkBox is off')}
  // }
  useEffect(
    () => {
  setP( process )}, [process]);
 


  const sendToken = () => {
    props.navigation.navigate("OpenProject");
  };
  return (
    <View style={{flex:1,backgroundColor:'#192570',alignItems:'center'}}> 
    
    <Image
          source={require("../assets/prossessClient.png")}
          style={{flex:1,resizeMode:'contain'}}
        />
     
       
    </View>
  );
};

export default Process;

