import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';


// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from 'react-native-reanimated';
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
ResponsiveScreen.init(720, 1600);
const cache = Cache({
  namespace: "myapp",
  policy: {
      maxEntries: 50000, // if unspecified, it can have unlimited entries
      stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage
});
// const MySwitch = createAnimatedSwitchNavigator(
//   {
//     Home: HomeScreen,
//     Other: OtherScreen,
//   },
//   {
//     // The previous screen will slide to the bottom while the next screen will fade in
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-bottom"
//           durationMs={400}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
//   }
// );
const LoginPage = (props) => {
  // const [email, setEmail] = useState("");
  var email = "ali@test.com";
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  useEffect(() => {
    // props.navigation.navigate("NewPass"),
   
    const value = cache.get("token");
    console.log("ooof")
    console.log(value);
// 'hello'
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/USER/opproject/",
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token 7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
        // 'Accept': 'application/json'
      },
      data: {
        // verification_code: code,
      },
    })
      .then((response) => console.log(response))
      // console.log(response)})
      .catch((error) => console.log(error));
  });
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
            <TouchableOpacity>
              <View style={[styles3.workcard2]}>
                <View>
                  <Text style={styles3.txtworkcard}>Bearing</Text>
                </View>
                <View></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles3.barbox}></View>
      </View>
    </View>
  );
};

export default LoginPage;

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
