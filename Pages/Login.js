import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { Cache } from "react-native-cache";
import { styles, Tabletstyles } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

// useEffect(() => {
const LoginPage = (props) => {
  // const navigation = useNavigation();
  // // const [email, setEmail] = useState("");
  // const Auth = () => {
  //   let auth = "mahdi";

  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setEmail(textValue);
  const onPChange = (textValue) => setPassword(textValue);
  const isStatus = 404;



  const setSend = () => {
    // const response 

    console.log(global.UURL);
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
        email: email,
        password: password,
      },
    })
      // .then((response) => console.log(response.status))
      .then((response) => {
        if (response.status == "202") {
          // console.log(response.data);
          // props.navigation.navigate("OpenProject",{token: response.data.data.token});
          // props.navigation.navigate("OpenProject",{token: response.data.data.token});
          sendToken(response.data.data.token)
          global.TOKEN = response.data.data.token;
          global.DATA = response.data.data;

          console.log('ghabl')
          console.log(global.DATA)
          console.log('bad')



        }
      })


      .catch((error) => console.log(error));
  }
  const sendToken = (AuthToken) => {
    props.navigation.navigate("OpenProject", { token: AuthToken })
  }
  return (

    <View style={[styles.page, { flexDirection: "column" }]}>
      <View>
        {wh / ww < 1.6 ? (
          <View>
            <View style={Tabletstyles.box}>
              <View>
                <Text>wide</Text>

                <Image
                  source={require("../assets/app_ui2-12.png")}
                  style={Tabletstyles.logo}
                  resizeMode="cover"
                />
              </View>
              <View style={Tabletstyles.fields}>
                <TextInput
                  placeholder="Type your email addresss  "
                  style={Tabletstyles.text}
                  onChangeText={onEChange}
                />
              </View>
              <View
                style={[Tabletstyles.fields, { marginTop: wh * 1 / 100 }]}
              >
                <TextInput
                  secureTextEntry={true}
                  placeholder="password"
                  style={[Tabletstyles.text]}
                  onChangeText={onPChange}
                />
              </View>
              <View style={Tabletstyles.butbox}>
                <View>
                  <TouchableOpacity
                    style={[Tabletstyles.Button, { flexDirection: "row" }]}
                    onPress={setSend}
                  >
                    <Text style={Tabletstyles.ButtonText}> Login</Text>
                    {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:hp('2%'),color:"#fff"}}> ^ </Text> */}
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[{ backgroundColor: "transparent" }]}
                    onPress={setSend}
                  >
                    <Text
                      style={[
                        Tabletstyles.ButtonText,
                        {
                          marginTop: wh * 0.4 / 100,
                          marginLeft: ww * 2 / 100,
                        },
                      ]}
                      onPress={() => props.navigation.navigate("ForgetPass")}
                    >

                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                height: wh * 10 / 100,
                alignItems: "center",
                // backgroundColor:"red",
                marginTop: wh * 25 / 100
              }}
            >
              <Text
                style={{
                  // marginTop: 0,
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(22)
                  // marginLeft: "23%",
                }}
              >
                Client Application
              </Text>
              <Text
                style={{
                  marginTop: wh * 1 / 100,
                  // marginBottom: ResponsiveScreen.normalize(320),
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(17),
                }}
              >
                All rights reserved by E-novation engineering Co.{" "}
              </Text>
            </View>
          </View>
        ) : wh / ww > 1.85 ? (








          <View>
            <View style={[styles.box, { marginLeft: -ww * 5 / 100 }]}>
              <View>
                <Text>phone</Text>

                <Image
                  source={require("../assets/app_ui2-12.png")}
                  style={[styles.logo, { marginBottom: wh * 0.4 / 100 }]}
                  resizeMode="cover"
                />
              </View>

              <View style={[styles.fields, { height: wh * 3 / 100 }]}>
                <TextInput
                  placeholder="Type your email addresss  "
                  style={[styles.text, { marginBottom: wh * 0.5 / 100 }]}
                  onChangeText={onEChange}
                />
              </View>
              <View
                style={[styles.fields, { marginTop: wh * 1 / 100, height: wh * 3 / 100 }]}
              >
                <TextInput
                  secureTextEntry={true}
                  placeholder="password"
                  style={[styles.text, { marginBottom: wh * 0.5 / 100 }]}
                  onChangeText={onPChange}
                />
              </View>
              <View style={styles.butbox}>
                <View>
                  <TouchableOpacity
                    style={[styles.Button, { flexDirection: "row", height: wh * 3 / 100, marginTop: wh * 1 / 100 }]}
                    onPress={setSend}
                  >
                    <Text style={[styles.ButtonText, { marginTop: wh * 0.1 / 100 }]}> Login</Text>
                    {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:hp('2%'),color:"#fff"}}> ^ </Text> */}
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[{ backgroundColor: "transparent" }]}
                    onPress={setSend}
                  >
                    <Text
                      style={[
                        styles.ButtonText,
                        {
                          marginTop: wh * 1 / 100,
                          marginLeft: ww * 2 / 100,
                        },
                      ]}
                      onPress={() => props.navigation.navigate("ForgetPass")}
                    >

                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                height: wh * 10 / 100,
                alignItems: "center",
                // backgroundColor:"red",
                marginTop: wh * 26 / 100
              }}
            >
              <Text
                style={{
                  marginTop: wh * -5 / 100,
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(22)
                  // marginLeft: "23%",
                }}
              >
                Client Application
              </Text>
              <Text
                style={{
                  marginTop: wh * 1 / 100,
                  // marginBottom: ResponsiveScreen.normalize(320),
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(17),
                }}
              >
                All rights reserved by E-novation engineering Co.{" "}
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={Tabletstyles.box}>
              <View>
                <Text>normal</Text>

                <Image
                  source={require("../assets/app_ui2-12.png")}
                  style={Tabletstyles.logo}
                  resizeMode="cover"
                />
              </View>
              <View style={Tabletstyles.fields}>
                <TextInput
                  placeholder="Type your email addresss  "
                  style={Tabletstyles.text}
                  onChangeText={onEChange}
                />
              </View>
              <View
                style={[Tabletstyles.fields, { marginTop: wh * 1 / 100 }]}
              >
                <TextInput
                  secureTextEntry={true}
                  placeholder="password"
                  style={[Tabletstyles.text]}
                  onChangeText={onPChange}
                />
              </View>
              <View style={Tabletstyles.butbox}>
                <View>
                  <TouchableOpacity
                    style={[Tabletstyles.Button, { flexDirection: "row" }]}
                    onPress={setSend}
                  >
                    <Text style={Tabletstyles.ButtonText}> Login</Text>
                    {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:hp('2%'),color:"#fff"}}> ^ </Text> */}
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[{ backgroundColor: "transparent" }]}
                    onPress={setSend}
                  >
                    <Text
                      style={[
                        Tabletstyles.ButtonText,
                        {
                          marginTop: wh * 0.4 / 100,
                          marginLeft: ww * 2 / 100,
                        },
                      ]}
                      onPress={() => props.navigation.navigate("ForgetPass")}
                    >

                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                height: wh * 10 / 100,
                alignItems: "center",
                // backgroundColor:"red",
                marginTop: wh * 25 / 100
              }}
            >
              <Text
                style={{
                  // marginTop: 0,
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(22)
                  // marginLeft: "23%",
                }}
              >
                Client Application
              </Text>
              <Text
                style={{
                  marginTop: wh * 1 / 100,
                  // marginBottom: ResponsiveScreen.normalize(320),
                  color: "white",
                  fontSize: ResponsiveScreen.fontSize(17),
                }}
              >
                All rights reserved by E-novation engineering Co.{" "}
              </Text>
            </View>
          </View>
        )}
      </View>

    </View>
  );
};

export default LoginPage;

// const styles = StyleSheet.create({

//   page:{
//     alignItems: 'center',
//     backgroundColor: '#f2ca30',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%',
//     flexDirection: 'column',
//     flexDirection: 'row',
//     // flexWrap: 'wrap',
//     flex: 1
//   },
//   fields: {
//       height: 35,
//       width: '90.8%',
//       padding:10,
//       backgroundColor: 'white',
//       textAlign:'center',
//       borderRadius:30,
//       marginTop: 10,
//       marginLeft:10
//   },
//   Button : {
//       // justifyContent:'center',
//       // alignItems:'center',
//       // borderColor:'#fff',
//       backgroundColor:'#192570',
//       // color :"red",
//       // Color:'blue',
//       // underlayColor:'#fff',
//       borderRadius:25,
//       height: 30,
//       width: '100%',
//       padding:0,
//       textAlign:'center',
//       marginTop:1,
//       // Align:'left',
//       // flex:0,
//   },
//   box: {
//     marginTop: '42%',
//     height: '45%',
//     width: '65%',
//     padding:10,
//     // backgroundColor:"green"
// },
// ButtonText:{
//   color:'white',
//   // width:"100%"
//   // fontSize:12,
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
