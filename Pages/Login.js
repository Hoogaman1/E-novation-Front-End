import React, { useState } from "react";
import axios from "axios";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import { styles } from "./styleSheets.js";

const LoginPage = (props) => {
  // const [email, setEmail] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setEmail(textValue);
  const onPChange = (textValue) => setPassword(textValue);
  const isStatus = 404;
  const setSend = () => {
    () => props.navigation.navigate("OpenProject");
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/USER/login/",
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
        // 'Accept': 'application/json'
      },
      data: {
        email: email,
        password: password,
      },
    })
      // .then((response) => console.log(response.status))
      .then((response) => {
        if (response.status == "200") {
          props.navigation.navigate("OpenProject");
          console.log(response.status);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.page}>
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
        <View style={[styles.fields, { marginTop: hp('1%') }]}>
          <TextInput
            secureTextEntry={true}
            placeholder="password"
            style={styles.text}
            onChangeText={onPChange}
          />
        </View>
        <View style={styles.butbox}>
          <View>
            <TouchableOpacity style={[styles.Button,{flexDirection:"row"}]} onPress={setSend}>
    
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
                style={styles.ButtonText}
                onPress={() => props.navigation.navigate("ForgetPass")}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
