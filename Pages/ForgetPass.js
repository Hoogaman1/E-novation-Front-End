import React, { useState } from "react";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
const ForgetPass = (props) => {
  // const [email, setEmail] = useState("");

  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState('');
  const onEChange = (textValue) => setEmail(textValue);
  // const onPChange = (textValue) => setPassword(textValue);
  const setSend = () => {
    props.navigation.navigate("Verification",{email: email});
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/USER/forget_password/",
      headers: {
        // 'Content-Type': "application/json",
        // Authorization: "7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
        // 'Accept': 'application/json'
      },
      data: {
        email: email,
      },
    })
      .then((response) => console.log(response.data))

      .catch((error) => console.log(error));
  };
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
        <View style={styles.butbox}>
          <View>
            <TouchableOpacity
              style={[styles.Button, { flexDirection: "row" }]}
              onPress={setSend}
            >
              <Text style={styles.ButtonText}>Next</Text>
              {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:hp('2%'),color:"#fff"}}> ^ </Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginTop: ResponsiveScreen.normalize(220),
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
          color: "white",
          fontSize: ResponsiveScreen.normalize(20),
        }}
      >
        All rights reserved by E-novation engineering Co.{" "}
      </Text>
    </View>
  );
};
export default ForgetPass;

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
