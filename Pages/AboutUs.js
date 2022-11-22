import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  Fontisto,
  AntDesign,
  FontAwesome5,
  
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from 'react-native-reanimated';
import { useRoute } from "@react-navigation/native";

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
  ScrollView,
  BackHandler,
} from "react-native";
import { styles3 } from "./styleSheets2";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { log } from "react-native-reanimated";
const wf = Dimensions.get("screen").fontScale;
// console.log(wf);
const ws = Dimensions.get("screen").scale;
// console.log(ws);
const wh = Dimensions.get("screen").height;
// console.log(wh);s
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);

const OpenProject = (props) => {
  global.HANDSHAKE = "AboutUs";
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
  // const route = useRoute();
  const tokenAuth = global.TOKEN;
  const navigation = useNavigation();

  // const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  const [dummy, setDummy] = useState([]);
  const [Gray, setGray] = useState(true);

  const [id_select, setSelect] = useState("");

  // console.log(global.OBJ.id);

  const setPost = (props) => {
    // useEffect(() => {

    //   const intervalID = setTimeout(() => {
    //     setToggle((toggle) => !toggle)
    //   }, 3000);
    //   return () => clearInterval(intervalID);
    // }
    // );

    axios({
      method: "POST",
      url: "http://" + global.UURL + "/USER/opproject/",
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + global.TOKEN,
        // 'Accept': 'application/json'
      },
      data: {
        id_number: id_select,
      },
    })
      // .then((response) => console.log(response.status))
      // .then(console.log('salam'))
      .then((response) => {
        // console.log(response.data)
        if (response.status == "202") {
          // props.navigation.push({token:tokenAuth,obj:response.data});
          global.OBJ = response.data;
          console.log("salam");

          // props.navigation.navigate('Bearing',{token:tokenAuth,obj:global.OBJ});
        }
      })
      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "AboutUs";
          props.navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
  };

  // const setNPost = () => {
  //   props.navigation.navigate('Notif', { token: tokenAuth });
  // }
  // const setHPost = () => {
  //   props.navigation.navigate('History', { token: tokenAuth });
  // }

  const [refresh, setRefresh] = useState(false);

  useEffect(
    () => {
      // let timeoutVariable;
      // if (refresh) {
      //   timeoutVariable = setTimeout(() => setRefresh(false), 1000);
      // }

      const tokenAuth = global.TOKEN;
      // const { navigation } = props;
      // const tokenAuth = props.navigation.navigate.getParam('token',null)
      // useEffect(() => {
      // }, [id_select]);
      // console.log(tokenAuth);
      // const dummyData = []
      axios({
        method: "get",
        url: "http://" + global.UURL + "/USER/opproject/",
        // url: "http://" + global.UURL + ":8000/BIGADMIN/plist/" + '3',
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
        .then((Response) => {
          setDummy(Response.data);
          setGray(false);
          setRefresh(true);
        })

        .catch((error) => {
          if (error.response.status == "0") {
            global.HANDSHAKE = "AboutUs";
            props.navigation.navigate("HandShake");
          } else {
            // let brobaba = 'Wrong email or password';
            console.log(error);
          }
        });

      // return () => clearTimeout(timeoutVariable);
    },
    [refresh]
    // []
  );

  const itemclick = (obj) => {
    global.PROJ = obj;
    console.log("jjj");
    console.log(obj);
    console.log("lll");
    props.navigation.navigate("Bearing");
  };
  const ProjectCreate = () => {
    navigation.navigate("CreateProject");
  };
  const UserEdit = () => {
    navigation.navigate("UserEdit");
  };
  const History = () => {
    navigation.navigate("History");
  };
  const setAlert = () => {
    navigation.navigate("Alert", { token: tokenAuth });
  };

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
        <TouchableOpacity onPress={setAlert}>
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
     </Text>
           ):(<View></View>)}
        </TouchableOpacity>
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

      <View style={[styles3.butbox, { flex: 2 }]}>
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              width: ResponsiveScreen.normalize(720),
              //    backgroundColor: "orange"
            },
          ]}
        >
          {/* <View
            style={{
              backgroundColor: "blue",
              height:'6%',
              width: ww,
              paddingHorizontal:ww*5/100,
              borderRadius: 20,
              // height: ResponsiveScreen.normalize(130),
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }}
            
          > */}
          <View
            style={{
              marginTop: "-5%",
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
              <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(30),
                  color: "#575757",
                  fontWeight:'700',

                  // marginTop: wh * 2.5 / 100,
                  // marginLeft: ww * 5 / 100,
                  textAlign: "left",
                  //   backgroundColor: 'pink'
                }}
              >
                {"  "}
                {global.OBJ.company}
                {"  "}
              </Text>
            </View>
            <View
              style={{
                // width: "45%",
                height: "75%",
                backgroundColor: "#f2ca30",
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
                {" "}About E-novation{" "}
              </Text>
            </View>
          </View>
          <ScrollView style={{height:wh*120/100,marginTop:'3%'}}>
          <View
            style={{
              flexDirection: "column",
              width: ResponsiveScreen.normalize(600),
              height: ww*150/100,
              marginTop: ResponsiveScreen.normalize(50),
              // backgroundColor: "pink",
            }}
          >
            <Text
              style={{
                fontSize: ResponsiveScreen.fontSize(30),
                marginBottom: "5%",
                fontWeight: "600",
              }}
            >
              Backed by the founders' extensive experience in Design and
              Manufacturing.
            </Text>

            <Text
              style={{
                fontSize: ResponsiveScreen.fontSize(24),
                marginBottom: "5%",
                fontWeight: "600",
                color: "#333",
              }}
            >
              We complement your needs with our extensive experience in
              Designing and Manufacturing Parts, Equipment, Tools and Machinery
              and will provide ongoing support during all stages of the Design,
              Development and Manufacturing process.
            </Text>

            <Text
              style={{
                fontSize: ResponsiveScreen.fontSize(20),
                marginBottom: "5%",
                fontWeight: "600",
                color: "#575757",
              }}
            >
              At E-Novation Engineering, we specialize in providing advanced CNC
              machining services to a wide range of industries. You can rely on
              precision manufacturing delivered to the highest quality by highly
              experienced machinists (mostly qualified Engineers), using
              state-of-the-art machines, a controlled environment and stringent
              production standards. E-novation also offers the option of
              conducting engineering verification for defined applications of
              parts if customers so require.
            </Text>

            <Text
              style={{
                fontSize: ResponsiveScreen.fontSize(20),
                marginBottom: "5%",
                fontWeight: "600",
                color: "#575757",
              }}
            >
              In everything E-Novation does, Safety comes first. There is
              nothing more important to us than sending our people home at the
              end of a working day safe and healthy. E-Novation has implemented
              the ISO 45001:2018 Occupational Health and Safety (OH&S)
              Management System to assist and guide our safety management
              practices.
            </Text>

            <Text
              style={{
                fontSize: ResponsiveScreen.fontSize(20),
                marginBottom: "5%",
                fontWeight: "600",
                color: "#575757",
              }}
            >
              A combination of advanced and high quality CNC machine tools, top
              of the range CAD/CAM software, Integrated Quality management
              system and highly experienced staff are four pillars of our
              business and the reason we deliver the best results. Our Design
              and Manufacturing system is powered by Okuma CNC machines,
              SolidWorks, SolidCam, and ISO 9001 quality management system.
            </Text>
          </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default OpenProject;

const mystyles = StyleSheet.create({
  card: {
    fontFamily: "Roboto",
    marginTop: ResponsiveScreen.normalize(25),
    width: ResponsiveScreen.normalize(550),
    height: ResponsiveScreen.normalize(115),
    marginLeft: ResponsiveScreen.normalize(25),
    marginBottom: ResponsiveScreen.normalize(15),
    borderRadius: ResponsiveScreen.normalize(20),
    elevation: 4,
    shadowColor: "#999",
    backgroundColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
export { mystyles };
