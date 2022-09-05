import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons ,FontAwesome5  } from "@expo/vector-icons";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Pages/Login";
import { FontAwesome,Ionicons } from "@expo/vector-icons";
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
  StyleSheet,
  Dimensions,
} from "react-native";
import { styles2, btn, styles3 } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import LoginPage from "../Pages/Login";
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);
const OpenProject = (props) => {
  // const [email, setEmail] = useState("");
  const route = useRoute();
  // const [dummy, setDummy] = useState([]);
  const tokenAuth = global.TOKEN;
  console.log(tokenAuth)
  const navigation = useNavigation();
  // const { navigation } = props;
  
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  const [dummy, setDummy] = useState([]);
 
  
  const [id_select, setSelect] = useState("");
  
  
  const  setPost = (props) => {

  //   useEffect(() => {
  // }, [id_select]);
    axios({
      method: "POST",
      url: "http://"+global.URl+"/USER/opproject/",
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token "+global.TOKEN,
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
        global.OBJ=response.data;
        

        props.navigation.navigate('Bearing',{token:tokenAuth,obj:global.OBJ});
      }
      })
      .catch((error) => console.log(error));
   }
  const  setNPost = () => {
    props.navigation.navigate('Notif',{token:tokenAuth});
  }
  const  setHPost = () => {
    props.navigation.navigate('History',{token:tokenAuth});
  }
  useEffect( () => {
    const tokenAuth = global.TOKEN;
    // const { navigation } = props;
    // const tokenAuth = props.navigation.navigate.getParam('token',null)
    // useEffect(() => {
      // }, [id_select]);
    // console.log(tokenAuth);
    // const dummyData = []
    axios({
      method: "get",
      url: "http://"+global.URl+"/USER/opproject/",
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
      .then((Response) =>  setDummy(Response.data))

      .catch((error) => console.log(error));
    }, []);
    const itemclick = (obj) =>{
      global.OBJ=obj
      props.navigation.navigate("Bearing")
    }
  return (
    <View style={styles3.page}>
      <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
        <TouchableOpacity
        onPress={() => {navigation.openDrawer({token:tokenAuth});}}
        >
          
          <Ionicons name="ios-menu-sharp" size={35} color="black" style={{marginTop:-wh*2/100,marginRight:ww*5/100}} />
     
        </TouchableOpacity>
      </View>
      <View style={[styles3.butbox]}>
        <View
          style={[
            styles3.workbox,
            { alignItems: "center", flexDirection: "column" ,width:ww},
          ]}
        >
          <View
            style={{
              // backgroundColor: "blue",
              width: ww,
              borderRadius: 20,
              height: wh*12/100,
            }}
          >
            <Text
              style={{
                fontSize: ResponsiveScreen.normalize(45),
                fontFamily: "Roboto",
                color: "#f2ca30",
                marginTop: wh*5/100,
                marginLeft: ww*12/100,
                // marginBottom: wh*1/100,
              }}
            >
              Current Projects
            </Text>
          </View>
          <View
            style={{
              // backgroundColor:'red',
              width: ww*82/100,
              height: wh*65/100,
              marginTop: wh*1/100,
              // elevation:3,
              borderRadius: 20,
              flexDirection: "row",
            }}
          >
            <FlatList
              data={dummy}
              style={{width:ww*81/100,paddingHorizontal:ww*-1/100,height:wh*63/100}}
              renderItem={(itemList) => (
                <TouchableOpacity
                style={[mystyles.card,{marginTop: wh*0.7/100}]}
                //   onPress={() => {props.navigation.navigate("Bearing",{token:tokenAuth});
                  
                //   {setPost};
                //   // console.log(id_select)
                // }}
                // onPress={()=>{setSelect(itemList.item.id_number);setPost()}}>
                onPress={() => itemclick(itemList.item)}>
                  
                  <View style={{flexDirection:'row'}}>
                    <View>
                      <Text style={[styles3.txtworkcard,{paddingTop:wh*2.5/100}]} >
                        {itemList.item.name}
                      </Text>
                    </View>

                    <View  >
                      {itemList.item.alarm === true ? (
                        <FontAwesome name="bell-o" size={19} color="#f2ca30" style={{fontWeight: "bold",marginLeft:ww*18/100,marginTop:wh*2.3/100}} />
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
        {/* <View style={styles3.barbox}>
        <TouchableOpacity 
          onPress={setHPost}>
          
            <View style={styles3.barbut11}>
              <Image
                source={require("../assets/buttop.png")}
                style={{
                  width: ResponsiveScreen.normalize(170),
                  height: ResponsiveScreen.normalize(400),
                  resizeMode: "stretch",
                }}
              />
            </View>
            <View>
              <Text
                style={[styles3.bartxt,{marginTop:ResponsiveScreen.normalize(-110)}]}
                // onPress={setPost}
              >
                History
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles3.barbut22}
          // onPress={setPost}>
          >
            <View>
              <Text
                style={[
                  styles3.bartxt,
                  {
                    marginTop: ResponsiveScreen.normalize(140),
                    marginLeft: ResponsiveScreen.normalize(-66),
                  },
                ]}
              >
                Current Project
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={setNPost}
          >
            <View style={styles3.barbut33}>
              <Image
                source={require("../assets/butbot2.png")}
                style={{
                  width: ResponsiveScreen.normalize(116),
                  height: ResponsiveScreen.normalize(380),
                  resizeMode: "stretch",
                }}
              />
            </View>
            <View>
              <Text
                style={[
                  styles3.bartxt,
                  {
                    marginTop: ResponsiveScreen.normalize(-200),
                    marginLeft: ResponsiveScreen.normalize(-50),
                  },
                ]}
                // onPress={()=>{setSelect(itemList.item.id_number);setPost()}
                // }
              >
                Notification
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );

};

export default OpenProject;


const mystyles = StyleSheet.create({

  card: {
    fontFamily: "Roboto",
    marginTop: wh*10/100,
    width: ww*75/100,
    height: wh*7/100,
    // textAlign: "left",
    marginLeft:ww*4/100,
    marginBottom:wh*0.7/100,
    borderRadius: ww*2/100,
    // elevation: 6,
    // backgroundColor: "gray",
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor: "black",
    // shadowOpacity:3,
    // shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // alignItems:'stretch'
    
  },
  

})
export { mystyles};
