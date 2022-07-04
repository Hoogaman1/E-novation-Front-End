import React, { useEffect, useState } from "react";
import axios from "axios";
// import { EvilIcons  , MaterialIcons  } from '@expo/vector-icons';
import { CheckBox } from "@rneui/themed";
// import TimeInput from '@tighten/react-native-time-input';
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
  StyleSheet,
} from "react-native";
import { styles, styles2, btn } from "./styleSheets.js";

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
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [mydata, setData] = useState("");
  // const [time, setTime] = useState('');
  //   const handleTimeChange = (time, validTime) => {
  //     if (!validTime) return;

  //     setTime(time);
  //   }
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
    <View style={styles2.page}>
      <View style={styles2.topbox}>
        <View>
          <Image
            source={require("../assets/app_ui2-13.png")}
            style={styles2.logo}
          />
        </View>
        <View>
          <Image source={require("../assets/app_ui2-11.png")} />
        </View>
      </View>
      <View
        style={[
          styles2.butbox,
          { alignItems: "center", width: "100%", marginLeft: "0%" },
        ]}
      >
        <Text
          style={{
            fontSize: 32,
            color: "#f2ca30",
            marginTop: "20%",
            fontFamily: "Roboto",
          }}
        >
          Notification Settings
        </Text>

        <View
          style={[mystyles.card, { alignItems: "flex-start", marginTop: "8%" }]}
        >
          <CheckBox
            center
            title="After Each Update"
            checked={checked1}
            onPress={() => setChecked1(!checked1)}
          />
        </View>
        <View style={[mystyles.card, { alignItems: "flex-start" }]}>
          <CheckBox
            center
            title="Once per Hour"
            checked={checked2}
            onPress={() => setChecked2(!checked2)}
          />
        </View>
        <View style={[mystyles.card, { alignItems: "flex-start" }]}>
          <CheckBox
            center
            title="Once after 5 Hours"
            checked={checked3}
            onPress={() => setChecked3(!checked3)}
          />
        </View>
        <View style={[mystyles.card, { alignItems: "flex-start" }]}>
          <CheckBox
            center
            title="Once per Day"
            checked={checked4}
            onPress={() => setChecked4(!checked4)}
          />
          {/* <TimeInput 
        setCurrentTime 
        onTimeChange={handleTimeChange} 
      /> */}

          {/* <Text>Current time entered is: {time}</Text> */}
        </View>

        <View style={{ height: 150, width: "100%", padding: 10 }}>
          <FlatList
            data={project}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  },
                ]}
              >
                <Text key={item.id}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const mystyles = StyleSheet.create({
  card: {
    marginLeft: "0%",
    // marginVertical:"10%",
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop: "2%",
    // marginStart:35,
    // paddingStart:15,
    width: 300,
    height: 60,
    textAlign: "left",
    lineHeight: 50,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
export { mystyles };
