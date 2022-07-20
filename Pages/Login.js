import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Cache } from "react-native-cache";
import { styles } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
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
  
  const  setSend = () => {
    // const response 
  
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/USER/login/",
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

        }
      })
      

      .catch((error) => console.log(error));
    }
    const sendToken = (AuthToken) =>{
      props.navigation.navigate("OpenProject",{token:AuthToken})
    }
  return (
    <View style={[styles.page, { flexDirection: "column" }]}>
      <View style={styles.box}>
        <View>
          <Image
            source={require("../assets/app_ui2-12.png")}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Type your email address  "
            style={styles.text}
            onChangeText={onEChange}
          />
        </View>
        <View
          style={[styles.fields, { marginTop: ResponsiveScreen.normalize(20) }]}
        >
          <TextInput
            secureTextEntry={true}
            placeholder="password"
            style={styles.text}
            onChangeText={onPChange}
          />
        </View>
        <View style={styles.butbox}>
          <View>
            <TouchableOpacity
              style={[styles.Button, { flexDirection: "row" }]}
              onPress={setSend}
            >
              <Text style={styles.ButtonText}> Login</Text>
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
                    marginTop: ResponsiveScreen.normalize(10),
                    marginLeft: ResponsiveScreen.normalize(20),
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
          height: ResponsiveScreen.normalize(530),
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: hp("20%"),
            color: "white",
            fontSize: ResponsiveScreen.normalize(30),
            // marginLeft: "23%",
          }}
        >
          Client Application
        </Text>
        <Text
          style={{
            marginTop: ResponsiveScreen.normalize(20),
            marginBottom: ResponsiveScreen.normalize(320),
            color: "white",
            fontSize: ResponsiveScreen.normalize(20),
          }}
        >
          All rights reserved by E-novation engineering Co.{" "}
        </Text>
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
