import React, { useState } from "react";
import axios from "axios";

import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

import { styles } from "./styleSheets.js";

const NewPass = (props) => {
  // const [email, setEmail] = useState("");

  const [re_password, setRepass] = useState("");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setRepass(textValue);
  const onPChange = (textValue) => setPassword(textValue);
  var email = "ali@test.com";
  const setSend = () => {
    props.navigation.navigate("LoginPage"),
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/USER/new_password/" + email,
        // params:{
        //   email:email,
        // },
        headers: {
          // 'Content-Type': "application/json",
          Authorization: "7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
          // 'Accept': 'application/json'
        },
        data: {
          re_new_password: re_password,
          new_password: password,
        },
      })
        .then((response) => console.log(response))

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
            placeholder="New password  "
            style={styles.text}
            onChangeText={onEChange}
          />
        </View>
        <View style={[styles.fields, { marginTop: 10 }]}>
          <TextInput
            secureTextEntry={true}
            placeholder="Re_password"
            style={styles.text}
            onChangeText={onPChange}
          />
        </View>
        <View style={styles.butbox}>
          <View>
            <TouchableOpacity style={styles.Button} onPress={setSend}>
              <Text style={styles.ButtonText}>Accept ... </Text>
            </TouchableOpacity>
          </View>
          {/* <View >
                <TouchableOpacity style={[{backgroundColor:'transparent'}]} onPress={setSend} >
                    <Text style={[styles.ButtonText, {fontSize:12},{marginTop:15}]} onPress={() => props.navigation.navigate("ForgetPass")} >Forget Password</Text>
                </TouchableOpacity>
        </View> */}
        </View>
      </View>
    </View>
  );
};
export default NewPass;

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
