import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

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
  const [project, setProject] = useState([]);
  useEffect(() => {
    // props.navigation.navigate("NewPass"),

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
                fontSize: ResponsiveScreen.normalize(47),
                color: "#f2ca30",
                marginTop: ResponsiveScreen.normalize(50),
                marginLeft: ResponsiveScreen.normalize(50),
                marginBottom: ResponsiveScreen.normalize(25),
              }}
            >
              History of your Projects
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
            <View style={{ marginTop: ResponsiveScreen.normalize(-30) }}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles2.cardg,
                    {
                      marginLeft: ResponsiveScreen.normalize(20),
                      width: ResponsiveScreen.normalize(570),
                    },
                  ]}
                  onPress={() =>
                    props.navigation.navigate("Bearing", { name: "Bearing" })
                  }
                >
                  Bearing
                </Text>

                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(-160),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  ID No.:<Text style={{ color: "gray" }}>123456</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  Patent No.:<Text style={{ color: "gray" }}>123456</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  Patent No:<Text style={{ color: "gray" }}>123456</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(-120),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  Order No.:<Text style={{ color: "gray" }}>12</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  Req No.:<Text style={{ color: "gray" }}>123456</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                  }}
                >
                  End Date:<Text style={{ color: "gray" }}>2022/3/12</Text>
                </Text>
                <View
                  style={{
                    width: 2,
                    height: 78,
                    backgroundColor: "#f2ca30",
                    marginLeft: ResponsiveScreen.normalize(200),
                    marginTop: ResponsiveScreen.normalize(-120),
                  }}
                ></View>

                <View></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles3.barbox}></View>
      </View>
    </View>
  );
};

export default LoginPage;
