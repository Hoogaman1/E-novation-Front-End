import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Pages/Login";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from 'react-native-reanimated';
import { useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { styles2, btn, styles3 } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import LoginPage from "../Pages/Login";
ResponsiveScreen.init(720, 1600);
const OpenProject = (props) => {
  // const [email, setEmail] = useState("");
  const route = useRoute();
  // const [dummy, setDummy] = useState([]);
  const tokenAuth = props.route.params.token;
  console.log(tokenAuth)
  const navigation = useNavigation();
  // const { navigation } = props;
  const [id_select, setSelect] = useState("");
  
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  const [dummy, setDummy] = useState([]);
  
  
  
  const  setPost = () => {
    // const response 
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/USER/opproject/",
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token "+tokenAuth,
        // 'Accept': 'application/json'
      },
      data: {
        id_number: id_select,
      },
    })
    // .then((response) => console.log(response.status))
    // .then(console.log('salam'))
    .then((response) => {
      // console.log(response.data)
      if (response.status == "202") {
        // props.navigation.push({token:tokenAuth,obj:response.data});
        props.navigation.navigate('Bearing',{token:tokenAuth,obj:response.data});
      }
      })
      .catch((error) => console.log(error));
   }
  useEffect(() => {
    const tokenAuth = props.route.params.token;
    const { navigation } = props;
    // console.log(tokenAuth);
    // const dummyData = []
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/USER/opproject/",
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + tokenAuth,
        // 'Accept': 'application/json'
      },
      data: {
        // verification_code: code,
      },
    })
      .then((Response) => setDummy(Response.data))
      .then(console.log(dummy))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles3.page}>
      <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
      </View>
      <View style={[styles3.butbox]}>
        <View
          style={[
            styles3.workbox,
            { alignItems: "center", flexDirection: "column" },
          ]}
        >
          <View
            style={{
              // backgroundColor: "blue",
              width: ResponsiveScreen.normalize(600),
              borderRadius: 20,
              height: ResponsiveScreen.normalize(200),
            }}
          >
            <Text
              style={{
                fontSize: ResponsiveScreen.normalize(60),
                color: "#f2ca30",
                marginTop: ResponsiveScreen.normalize(50),
                marginLeft: ResponsiveScreen.normalize(50),
                marginBottom: ResponsiveScreen.normalize(25),
              }}
            >
              Current Projects
            </Text>
          </View>
          <View
            style={{
              // backgroundColor:'red',
              width: ResponsiveScreen.normalize(600),
              height: ResponsiveScreen.normalize(1150),
              borderRadius: 20,
              flexDirection: "row",
            }}
          >
            <FlatList
              data={dummy}
              renderItem={(itemList) => (
                <TouchableOpacity
                //   onPress={() => {props.navigation.navigate("Bearing",{token:tokenAuth});
                  
                //   {setPost};
                //   // console.log(id_select)
                // }}
                onPress={()=>{setSelect(itemList.item.id_number);setPost()}}
                
              
                >
                  
                  <View style={[styles3.workcard2]}>
                    <View>
                      <Text style={styles3.txtworkcard} >
                        {itemList.item.name}
                      </Text>
                    </View>

                    <View  >
                      {itemList.item.alarm === true ? (
                        <FontAwesome name="bell-o" size={19} color="#f2ca30" style={{fontWeight: "bold",marginLeft:ResponsiveScreen.normalize(150),marginTop:ResponsiveScreen.normalize(20)}} />
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles3.barbox}></View>
      </View>
    </View>
  );
};

export default OpenProject;

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
