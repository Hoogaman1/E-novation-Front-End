import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
// import OneSignal from 'react-native-onesignal';
import Constants from "expo-constants";
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
  Dimensions,
  StatusBar,
  BackHandler,
} from "react-native";
import { styles3, styles2, btn } from "./styleSheets2.js";

import { EvilIcons, MaterialIcons, Ionicons, FontAwesome5, } from "@expo/vector-icons";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

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

const Notif = (props) => {
  global.HANDSHAKE = "Notif";
  function handleBackButtonClick() {
    navigation.navigate('OpenProject');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);
  // OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);
  // OneSignal.setAppId("c6c6bb5f-bb26-495a-9d24-6a1322b5d270");
  const [dummy, setDummy] = useState([]);
  // const [email, setEmail] = useState("");
  const navigation = useNavigation();

  var email = "ali@test.com";
  const [checked1, setChecked1] = useState(dummy.every_five_hour);
  const [checked2, setChecked2] = useState(dummy.every_hour);
  const [checked3, setChecked3] = useState(dummy.in_momment);
  const [checked4, setChecked4] = useState(dummy.sq_clock);
  const [mydata, setData] = useState("");

  const tokenAuth = global.TOKEN;
  // const obj = props.route.params.obj;
  // const { navigation } = props;
  // const [time, setTime] = useState('');
  //   const handleTimeChange = (time, validTime) => {
  //     if (!validTime) return;

  //     setTime(time);
  //   }
  const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  const [project, setProject] = useState([]);


  const setAlert = () => {
    props.navigation.navigate('Alert', { token: tokenAuth });
  }
  const setPost = () => {
    //   useEffect(() => {
    // }, [id_select]);
    axios({
      method: "PUT",
      url:global.UURL + "/USER/notif/",
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + tokenAuth,
        // 'Accept': 'application/json'
      },
      data: {
        // every_hour: false,
        every_hour: checked1,
        every_five_hour: checked2,
        in_momment: checked3,
        sq_clock: checked4,

      },
    })
      // .then((response) => console.log(response.status))
      // .then(console.log('salam'))
      // .then((response) => {
      //   // console.log(response.data)
      //   if (response.status == "200") {

      //     // props.navigation.push({token:tokenAuth,obj:response.data});
      //     console.log("OOOOOOOOOOOOOOokkkkkkkkkkkkkkkkkkkkkkkKKKKKKKKKKKKKK")
      //   }
      //   })
      .catch((error) => console.log(error));
  };




  useEffect((props) => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url:global.UURL + "/USER/notif/",
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
      // .then((Response) =>  console.log(Response.data))
      .then((Response) => setDummy(Response.data))
      .then((Response) => console.log(dummy))


      .catch((error) => console.log(error));
  }, []);

  return (
<View style={styles3.page}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={"dark-content"}
        translucent={true}
        hidden={false}
      />

      <View
        style={[
          styles3.topbox,
          {
            flex: 0.45,
            // backgroundColor: 'red',
            marginTop:'5.5%'
          },
        ]}
      >
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={[styles3.logo, { height: (wh * 7) / 100 }]}
        />
        {/* <TouchableOpacity onPress={setAlert}>
          <FontAwesome5
            name="bell"
            size={ResponsiveScreen.fontSize(45)}
            color="black"
            style={{
              marginLeft: (ww * 18) / 100,
              // marginTop: (wh * 1) / 100,
            }}
          />
          {global.ALARM === true ?(
            <Text
            style={styles3.notif}
            >
            {' '}{global.NOTIF}{" "}
          </Text> ):(<View></View>)}
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer({ token: tokenAuth });
          }}
        >
          <Ionicons
            name="ios-menu-sharp"
            size={ResponsiveScreen.fontSize(60)}
            color="black"
            style={{
              marginTop: ResponsiveScreen.normalize(10),
              marginRight: ResponsiveScreen.normalize(30),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles2.butbox,
          {
            alignItems: "center",
            // flex:1,
            // backgroundColor: "red",
            width: ww,
            marginTop:ww*35/100,
            marginLeft: ww * 0.5 / 100,
          },
        ]}
      >
        <View
            style={{
              // marginTop: "-5%",
              width: "85%",
              height: (ww * 10) / 100,
              paddingHorizontal: "0.8%",
              borderRadius: (ww * 4) / 200,
              flexDirection: "row",
              // marginRight:'-3%',
              alignItems: "center",
              // backgroundColor: "#fff",
              justifyContent: "space-between",
              // borderColor:"#575757",
              // borderWidth:0.3,
              elevation: 3,
              backgroundColor: "#fff",
              shadowOffset: { width: 3, height: 3 },
              shadowColor: "#000",
              shadowOpacity: 1,
              shadowRadius: 8,
            }}
          >
            <View
              style={{
                height: "90%",
                backgroundColor: "#fff",
                borderRadius: (ww * 2) / 200,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {global.OBJ.company.length < 20 ?(
              <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(30),
                  color: "#575757",
                  fontWeight:'700',

                  // marginTop: wh * 2.5 / 100,
                  // marginLeft: ww * 5 / 100,
                  textAlign: "left",
                  // backgroundColor: 'pink'
                }}
              >
                {"  "}
                {global.OBJ.company}
                {"  "}
              </Text>
              ):(
                <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(30),
                  color: "#575757",
                  fontWeight:'700',

                  // marginTop: wh * 2.5 / 100,
                  // marginLeft: ww * 5 / 100,
                  textAlign: "left",
                  // backgroundColor: 'pink'
                }}
              >
                {"  "}
                {global.OBJ.company.slice(0,20)}...
                {"  "}
              </Text>
              )}
            </View>
            <View
              style={{
                // width: "45%",
                height: "75%",
                backgroundColor: "#192570",
                borderRadius: (ww * 2) / 200,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              
              <Text
                style={{
                  fontSize: ResponsiveScreen.normalize(30),
                  fontFamily: "Roboto",
                  color: "#fff",
                  textAlign: "right",
                  alignSelf:'center'
                  // backgroundColor:'pink'

                  // marginTop: ResponsiveScreen.normalize(50),
                  // marginLeft: ResponsiveScreen.normalize(35),
                  // marginBottom: ResponsiveScreen.normalize(30),
                }}
              >
                {"  "}Notification Settings{"  "}
              </Text>
            </View>
          </View>
        <Text
          style={{
            fontSize: ResponsiveScreen.normalize(50),
            color: "#f2ca30",
            marginTop: wh * 6 / 100,
            fontFamily: "Roboto",
            // backgroundColor: 'green'
          }}
        >
          {/* Notification Settings */}
        </Text>
        <View>
          {/* <FlatList
            data={dummy}
            renderItem={(itemList) => ( */}
          <View>
            <View
              style={[
                mystyles.card,
                {
                  alignItems: "flex-start",
                  marginTop: wh * 4 / 100,
                },
              ]}
            >
              <CheckBox
                center
                size={ResponsiveScreen.fontSize(45)}
                checkedColor="#192570"
                containerStyle={{
                  // backgroundColor: "#f2ca30",
                  height: (wh * 4) / 100,
                  padding: 0,
                  margin: 0,
                  // marginRight: "-5%",
                  alignSelf:'flex-start'
                }}
                textStyle={{
                  color: "#575757",
                  fontSize: ResponsiveScreen.normalize(30),
                }}
                wrapperStyle={{ height: (wh * 4) / 100 }}
                title="After Each Update"
                checked={checked1}
                onPress={() => { setChecked1(!checked1), setChecked2(false), setChecked3(false), setChecked4(false); setPost() }}

              />
            </View>
            <View style={[mystyles.card, { alignItems: "flex-start" }]}>
              <CheckBox
                center
                size={ResponsiveScreen.fontSize(45)}
                checkedColor="#192570"
                containerStyle={{
                  // backgroundColor: "#f2ca30",
                  height: (wh * 4) / 100,
                  padding: 0,
                  margin: 0,
                  // marginRight: "-5%",
                  alignSelf:'flex-start'
                }}
                textStyle={{
                  color: "#575757",
                  fontSize: ResponsiveScreen.normalize(30),
                }}
                wrapperStyle={{ height: (wh * 4) / 100 }}
                title="Once per Hour"
                checked={checked2}
                onPress={() => { setChecked2(!checked2), setChecked1(false), setChecked3(false), setChecked4(false); setPost() }}
              />
            </View>
            <View style={[mystyles.card, { alignItems: "flex-start" }]}>
              <CheckBox
                center
                size={ResponsiveScreen.fontSize(45)}
                checkedColor="#192570"
                containerStyle={{
                  // backgroundColor: "#f2ca30",
                  height: (wh * 4) / 100,
                  padding: 0,
                  margin: 0,
                  // marginRight: "-5%",
                  alignSelf:'flex-start'
                }}
                textStyle={{
                  color: "#575757",
                  fontSize: ResponsiveScreen.normalize(30),
                }}
                wrapperStyle={{ height: (wh * 4) / 100 }}
                title="Once after 5 Hours"
                checked={checked3}
                // onPress={()=>{setSelect(itemList.item.id_number);setPost()}}>

                onPress={() => { setChecked3(!checked3), setChecked1(false), setChecked2(false), setChecked4(false); setPost() }}
              />
            </View>
            <View style={[mystyles.card, { alignItems: "flex-start" }]}>
              <CheckBox
                center
                size={ResponsiveScreen.fontSize(45)}
                checkedColor="#192570"
                containerStyle={{
                  // backgroundColor: "#f2ca30",
                  height: (wh * 4) / 100,
                  padding: 0,
                  margin: 0,
                  // marginRight: "-5%",
                  alignSelf:'flex-start'
                }}
                textStyle={{
                  color: "#575757",
                  fontSize: ResponsiveScreen.normalize(30),
                }}
                wrapperStyle={{ height: (wh * 4) / 100 }}
                title="Once per Day"
                checked={checked4}
                onPress={() => { setChecked4(!checked4), setChecked2(false), setChecked3(false), setChecked1(false); setPost() }}
              />
            </View>
          </View>
          {/* )}
          /> */}
        </View>

        <View
          style={{
            // backgroundColor:'red',
            height: wh * 10 / 100,
            width: ww * 70 / 100,
            padding: ww * 10 / 100,
          }}
        >
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

export default Notif;

const mystyles = StyleSheet.create({
  card: {
    marginLeft: ww * 0 / 100,
    // marginVertical:"10%",
    fontFamily: "Roboto",
    fontSize: ResponsiveScreen.normalize(40),
    marginTop: wh * 1.5 / 100,
    // marginStart:35,
    // paddingStart:15,
    width: ww * 50 / 100,
    // height: wh * 7 / 100,
    paddingVertical:'2%',
    paddingLeft:'3%',
    textAlign: "left",
    lineHeight: 50,
    borderRadius: ww * 2 / 100,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
export { mystyles };
