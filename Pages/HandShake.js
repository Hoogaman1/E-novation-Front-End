import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import { Camera } from "expo-camera";
import Slider from "react-native-smooth-slider";
// import Slider from "react-native-slider";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  Alert,
  BackHandler,
} from "react-native";
import { styles2, btn, styles3 } from "./styleSheets2.js";
// import { useNavigation } from '@react-navigation/native';

import { Entypo } from "@expo/vector-icons";
import { ListItem } from "@rneui/base";


const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

const AboutUs = (props) => {
  // if(!global.HANDSHAKE){global.HANDSHAKE = "OpenProject";}
  // if(global.HANDSHAKE === 'Login'||global.HANDSHAKE === 'OpenProject'){
    if (!global.HANDSHAKE) {
      global.HANDSHAKE = "OpenProject";
    }
  if(props.route.name==="HandShake"){
      useEffect(() => {
        // console.log('back_______________________User-')
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true,)
        return () => backHandler.remove()
        // return () =>BackHandler.removeEventListener("hardwareBackPress", () => null);
      }, [])}
  // }else{}
  const [refresh, setRefresh] = useState(true);
  if(props.route.name === "HandShake"){
  useEffect(() => {


    axios({
      method: "GET",
      url: global.UURL + "/BIGADMIN/handshake/",
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        // Authorization: "Token " + tokenAuth,
        // 'Accept': 'application/json'
      },
      data: {
        // verification_code: code,
      },

    }).then((Response) => {
    console.log('oomad')
    // console.log(props)
    CALL();
    setTimeout(() => setRefresh(!refresh), 2500);
    // setRefresh(!refresh)
    }
    ).catch((error)=>
    {
    console.log('nauoomad')
    // setRefresh(!refresh)
    setTimeout(() => setRefresh(!refresh), 2500);
     
    }
    )
   
  },[refresh]);}

  const navigation = useNavigation();
  // constructor(props) {
  //     super(props);
  //     state = { showAlert: false };
  //   };
  const [state, setState] = useState(false);
  // state = { showAlert: false };
  // };
  const showAlert = () => {
    setState(true);
  };
  const hideAlert = () => {
    setState(false);
  };
  const CALL = () => {
    // navigation.navigate('Users');
    console.log(global.HANDSHAKE);
    console.log('man callam');
    navigation.navigate(global.HANDSHAKE);
  };

  return (
    <View style={[styles3.page, { backgroundColor: "#192570" }]}>
      <Image
        source={require("../assets/app_ui2-12.png")}
        style={[styles3.logo, { position: "absolute", top: "40%" ,height:ww * 15/ 100}]}
      />

      <View
        style={{
          position: "absolute",
          top: "45%",
          backgroundColor: "#f2ca30",
          
          width: (ww * 70) / 100,
          height: (wh * 11) / 100,
          alignSelf: "center",
          borderRadius: ((ww + wh) * 1) / 200,
          marginTop: (wh * 5) / 100,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: ((ww + wh) * 1) / 200,
          }}
        >
          <View>
            <Feather
              name="wifi-off"
              size={ResponsiveScreen.fontSize(40)}
              color="#fff"
            />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: ResponsiveScreen.fontSize(24),
              fontWeight: "600",
              marginTop: "1%",
            }}
          >
            Network connection is interrupted.
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: ResponsiveScreen.fontSize(24),
              fontWeight: "600",
            }}
          >
            Check your internet connection please.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'#f2ca30',position:'absolute',top:'65%',alignItems:'center',justifyContent:'center',height:ww*7/100,borderRadius:ResponsiveScreen.normalize(10)}} onPress={()=>{CALL()}}>
      <Text style={{color:'#fff'}} >    Try again    </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutUs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});
{
  /* <Button style={{
        backgroundColor: isActive ? 'yellow' : 'yellow',
        color: isActive ? 'yellow' : 'yellow',
      }} onPress={() =>
        {handleClick}
      } title="Press Me"></Button> */
}

// const styles = StyleSheet.create({
//   page:{
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%',
//     flexDirection: 'column',
//     flexDirection: 'row',
//     // flexWrap: 'wrap',
//     flex: 1
//   },
//   fields: {
//       height: 50,
//       width: '100%',
//       padding:10,
//       backgroundColor: 'white',
//       textAlign:'center',
//       borderRadius:30,
//       marginTop: 10,
//   },
//   Button : {
//       // justifyContent:'center',
//       // alignItems:'center',
//       // borderColor:'#fff',
//       backgroundColor:'blue',
//       // color :"red",
//       // Color:'blue',
//       // underlayColor:'#fff',
//       borderRadius:25,
//       height: 50,
//       width: '100%',
//       padding:10,
//       textAlign:'center',
//       marginTop:1,
//       // Align:'left',
//       // flex:0,
//   },
//   box: {
//     marginTop: '70%',
//     height: '50%',
//     width: '70%',
//     padding:10,
//     // backgroundColor:"green"
// },
// ButtonText:{
//   color:'white',
// },
// butbox:{
//   justifyContent:'space-between',

//   // marginTop: '10%',
//   height: '50%',
//   width: '100%',
//   padding:10,
//   flexDirection: 'row',
//   // backgroundColor:"green",
//   // flexDirection: 'column',

// }
// });
const mystyles = StyleSheet.create({
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: ResponsiveScreen.fontSize(35),
    // backgroundColor: 'gray'
  },
  container: {
    backgroundColor: "#ddd",
  },
  TouchableOpacity: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ResponsiveScreen.normalize(550),
    marginTop: ResponsiveScreen.normalize(35),
    marginLeft: (ww * 9) / 100,
    backgroundColor: "white",
    borderRadius: ResponsiveScreen.normalize(50),
    elevation: 5,
    // backgroundColor: 'gray'
  },
  TouchableOpacityView: {
    padding: ResponsiveScreen.normalize(12),
    borderRadius: ResponsiveScreen.normalize(50),
    // backgroundColor: 'gray'
  },
});
export { mystyles };
