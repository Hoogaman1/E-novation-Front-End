import React, { useState } from "react";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Text, View, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";

import { styles } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);
const NewPass = (props) => {
  // const [email, setEmail] = useState("");
  const email = props.route.params.email;
  const { navigation } = props;
  const [re_password, setRepass] = useState("");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setRepass(textValue);
  const onPChange = (textValue) => setPassword(textValue);

  const setSend = () => {
    props.navigation.navigate("Login"),

      axios({
        method: "POST",
        url:global.UURL + "/USER/new_password/" + email,
        // params:{
        //   email:email,
        // },
        headers: {
          // 'Content-Type': "application/json",
          // Authorization: "7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
          // 'Accept': 'application/json'
        },
        data: {
          re_new_password: re_password,
          new_password: password,
        },
      })
        .then((response) => console.log(response.data))

        .catch((error) => console.log(error));
  };
  return (
    <View style={[styles.page, { flexDirection: "column" }]}>
      <View style={[styles.box, { marginLeft: -ww * 5 / 100 }]}>
        <View>
          <Image
            source={require("../assets/app_ui2-12.png")}
            style={[styles.logo, { marginBottom: wh * 0.4 / 100 }]}
            resizeMode="cover"
          />
        </View>
        <View style={[styles.fields, { height: wh * 3 / 100 }]}>
          <TextInput
            placeholder="New password  "
            style={[styles.text, { marginBottom: wh * 0.5 / 100 }]}
            onChangeText={onEChange}
          />
        </View>
        <View
          style={[styles.fields, { marginTop: wh * 1 / 100, height: wh * 3 / 100 }]}
        >
          <TextInput
            secureTextEntry={true}
            placeholder="Re_password"
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
              <Text style={[styles.ButtonText, { marginTop: wh * 0.1 / 100 }]}>Accept</Text>
              {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:20,color:"#fff"}}> ^ </Text> */}
            </TouchableOpacity>
          </View>
          {/* <View >
                <TouchableOpacity style={[{backgroundColor:'transparent'}]} onPress={setSend} >
                    <Text style={[styles.ButtonText, {fontSize:12},{marginTop:15}]} onPress={() => props.navigation.navigate("ForgetPass")} >Forget Password</Text>
                </TouchableOpacity>
        </View> */}
        </View>
      </View>
      <Text
        style={{
          marginTop: wh * 20 / 100,
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
