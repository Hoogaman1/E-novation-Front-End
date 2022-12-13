import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
// import Slider from "react-native-slider";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  // FontAwesome,
  // Ionicons,
  // MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
  RefreshControl,
  Alert,
  StatusBar,
  BackHandler,
} from "react-native";
import Slider from "react-native-smooth-slider";
import { styles3, styles2, btn } from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { log } from "react-native-reanimated";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
const Bearing = (props) => {
  global.HANDSHAKE = "Bearing";
  function handleBackButtonClick() {
    navigation.navigate("OpenProject");
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);
  // const PPOBJ=""
  const [EF, setEF] = useState("0");
  const [POBJ, setPOBJ] = useState("");
  // console.log(
  //   "kkkkkkkkkkkffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  // );
  const obj = global.PROJ;
  const sd = Number(POBJ.status);
  // const mm = Number(global.PROJ.status);
  // const ss=(Number({sd}))
  // console.log(obj.status);
  // console.log("lllllllll");
  // const [email, setEmail] = useState("");
  const [id_select, setSelect] = useState("");
  const [refresh, setRefresh] = useState(false);
  // console.log(tokenAuth)
  // console.log(obj[0][0])
  const tokenAuth = global.TOKEN;
  const [mstate, setMState] = useState({ vale: Number(global.PROJ.status) });

  // console.log("88888888888888888888888");
  // console.log(mstate);
  // console.log("999999999999999999999");
  // const { navigation } = props;
  const [state, setState] = useState({
    vale: Number(global.PROJ.status),
    // vale: 1
    // vale: 0.089
  });
  const [myc, setCSS] = useState("1");
  // console.log("inja");
  // console.log(sd);
  // console.log("onja");
  // try{
  //   setState({vale:sd})
  //     }catch(err) {
  //   console.log('annnnnnnnnnnnn')
  //     }

  const navigation = useNavigation();
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);

  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  // const[ project , setProject ] = useState([])
  // const [isActive, setIsActive] = useState(false);
  //   const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(true);
  // const[list , setList] = useState([''])
  // console.log("qqqq")
  const EDIT = () => {
    props.navigation.navigate("EditProject");
  };
  const BellAlert = () =>
    Alert.alert("New Event", "My Alert Msg", [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed")
      // },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  const setPost = () => {
    const tokenAuth = global.TOKEN;
    const obj = global.OBJ;
    // const { navigation } = props;

    props.navigation.navigate("PhotoAlbum");
  };
  const setAPost = () => {
    const tokenAuth = global.TOKEN;
    const obj = global.OBJ;
    // const { navigation } = props;

    props.navigation.navigate("PhotoAlbum");
  };
  const setAlert = () => {
    props.navigation.navigate("Alert", { token: tokenAuth });
  };
  const setDPost = () => {
    props.navigation.navigate("DocAlbum");
  };
  const nextState = () => {
    // props.navigation.navigate("DocAlbum");
    console.log("nexteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    // axios({
    //   method: "patch",
    //   url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
    //   // params:{
    //   //   email:email,
    //   // },
    //   headers: {
    //     // 'Content-Type': "application/json",
    //     Authorization: "Token " + tokenAuth,
    //     // 'Accept': 'application/json'
    //   },
    //   data: {
    //     next: true,
    //     revert: false,
    //     done: false,
    //   },
    // })
    //   .then((response) => setEF(EF - 1))
    //   // .then(console.log(EF))
    //   .catch((error) => {
    //     if (error.response.status == "0") {
    //       global.HANDSHAKE = "Bearing";
    //       navigation.navigate("HandShake");
    //     } else {
    //       console.log(error);
    //     }
    //   });
    // // }});

    // // };
  };
  const prvState = () => {
    // props.navigation.navigate("DocAlbum");
    console.log("prvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
    // axios({
    //   method: "patch",
    //   url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
    //   // params:{
    //   //   email:email,
    //   // },
    //   headers: {
    //     // 'Content-Type': "application/json",
    //     Authorization: "Token " + tokenAuth,
    //     // 'Accept': 'application/json'
    //   },
    //   data: {
    //     next: false,
    //     revert: true,
    //     done: false,
    //   },
    // })
    //   .then((response) => setEF(EF + 1))
    //   // .then((response) => (console.log(EF))
    //   .then(console.log(EF))
    //   .catch((error) => {
    //     if (error.response.status == "0") {
    //       global.HANDSHAKE = "Bearing";
    //       navigation.navigate("HandShake");
    //     } else {
    //       console.log(error);
    //     }
    //   });
    // // };
  };

  //   const SK = (val) => {
  //     console.log(val)
  //     if (val < 0.143) {
  //       setCSS('1')
  //       console.log('state 1')
  //         }else if (val < 0.286){
  //           setCSS('2')
  //       console.log('state 2')
  //         }else if ( val < 0.429){
  //           setCSS('3')
  //           console.log('state 3')

  //             }else if (val < 0.572){
  //               setCSS('4')
  //               console.log('state 4')

  //                 }else if ( val < 0.715){
  //                   setCSS('5')
  //                   console.log('state 5')

  //                     }else if (val < 0.858){
  //                       setCSS('6')
  //                       console.log('state 6')

  //                         }else if (val < 1.2){
  //                           setCSS('7')
  //                           console.log('state 7')
  //                         }
  //   }
  //   const SC = (val) => {
  //     if (val < 0.143) {
  //     console.log('state 1')
  //     setState({value:0.089})
  //     // console.log(value)
  //       }else if (val < 0.286){
  //     console.log('state 2')
  //     setState({value:0.247})
  //       }else if ( val < 0.429){
  //         console.log('state 3')
  //         setState({value:0.389})

  //           }else if (val < 0.572){
  //             console.log('state 4')
  //         setState({value:0.542})

  //               }else if ( val < 0.715){
  //                 console.log('state 5')
  //         setState({value:0.697})

  //                   }else if (val < 0.858){
  //                     console.log('state 6')
  //         setState({value:0.85})

  //                       }else if (val < 1.2){
  //                         console.log('state 7')
  //         setState({value:1})

  //                       }
  // }

  const SK = (val) => {
    console.log(val);
    if (val < 1) {
      setCSS("1");
      console.log("state 1");
    } else if (val < 2) {
      setCSS("2");
      console.log("state 2");
    } else if (val < 3) {
      setCSS("3");
      console.log("state 3");
    } else if (val < 4) {
      setCSS("4");
      console.log("state 4");
    } else if (val < 5) {
      setCSS("5");
      console.log("state 5");
    } else if (val < 6) {
      setCSS("6");
      console.log("state 6");
    } else {
      setCSS("7");
      console.log("state 7");
    }
  };
  const SC = (val) => {
    if (val < 1) {
      console.log("SC state 1");
      setState({ vale: 0.63 });
      if (val > Number(POBJ.status)) {
        nextState();
      } else if (val < Number(POBJ.status) - 1) {
        prvState();
      }
    } else if (val < 2) {
      console.log("SC state 2");
      setState({ vale: 1.69 });
      if (val > Number(global.PROJ.status)) {
        nextState();
      } else if (val < Number(global.PROJ.status) - 1) {
        prvState();
      }
    } else if (val < 3) {
      console.log("SC state 3");
      setState({ vale: 2.76 });
      if (val > Number(global.PROJ.status)) {
        nextState();
        // setEF(EF + 1);
      } else if (val < Number(global.PROJ.status)) {
        prvState();
        // setEF(EF + 1);
      }
    } else if (val < 4) {
      console.log("SC state 4");
      setState({ vale: 3.85 });
      if (val > Number(global.PROJ.status)) {
        nextState();
      } else if (val < Number(global.PROJ.status)) {
        prvState();
      }
    } else if (val < 5) {
      console.log("SC state 5");
      setState({ vale: 4.9 });
      if (val > Number(global.PROJ.status)) {
        nextState();
      } else if (val < Number(global.PROJ.status)) {
        prvState();
      }
    } else if (val < 6) {
      console.log("SC state 6");
      setState({ vale: 5.96 });
      if (val > Number(global.PROJ.status)) {
        nextState();
      } else if (val < Number(global.PROJ.status)) {
        prvState();
      }
    } else if (val < 7) {
      console.log("SC state 7");
      setState({ vale: 7 });
      if (val > Number(global.PROJ.status)) {
        nextState();
      } else if (val < Number(global.PROJ.status)) {
        prvState();
      }
    }
  };

  // const [refresh, setRefresh] = useState(false)
  useEffect(
    () => {
      if (global.PROJ.status === "1") {
        setState({ vale: Number(global.PROJ.status) - 0.32 });
        setCSS("1");
      } else if (global.PROJ.status === "2") {
        setState({ vale: Number(global.PROJ.status) - 0.27 });
        setCSS("2");
      } else if (global.PROJ.status === "3") {
        setState({ vale: Number(global.PROJ.status) - 0.21 });
        setCSS("3");
      } else if (global.PROJ.status === "4") {
        setState({ vale: Number(global.PROJ.status) - 0.15 });
        setCSS("4");
      } else if (global.PROJ.status === "5") {
        setState({ vale: Number(global.PROJ.status) - 0.08 });
        setCSS("5");
      } else if (global.PROJ.status === "6") {
        setState({ vale: Number(global.PROJ.status) - 0.04 });
        setCSS("6");
      } else if (global.PROJ.status === "7") {
        setState({ vale: Number(global.PROJ.status) });
        setCSS("7");
      }

      // let timeoutVariable
      // if (refresh) {
      //   timeoutVariable = setTimeout(() => setRefresh(false), 1000)
      // }

      // const response
      //   axios({
      //     method: "get",
      //     url: "http://127.0.0.1:8000/BIGADMIN/listalbum/"+(obj[0][0]),
      //     headers: {
      //       // 'Content-Type': "application/json",
      //       Authorization: "Token "+tokenAuth,
      //       // 'Accept': 'application/json'
      //     },
      //     data: {
      //       // id_number: id_select,
      //     },
      //   })
      //   // .then((response) => console.log(response.status))
      //   // .then(console.log('salam'))
      //   .then((response) => {
      //     console.log(response.data)
      //     if (response.status == "200") {
      //       // props.navigation.push({token:tokenAuth,obj:response.data});
      //       props.navigation.navigate('PhotoAlbum',{token:tokenAuth,obje:response.data});
      //     }
      //     })
      //     .catch((error) => console.log(error));
      //  }
      // useEffect(() => {
      //   const obj = global.OBJ;
      //   // const { navigation } = props;
      //   // props.navigation.navigate("NewPass"),

      setTimeout(() => setRefresh(!refresh), 1500);
      axios({
        method: "get",
        url: "http://" + global.UURL + "/BIGADMIN/uprojectedit/" + obj.id,
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
        // .then((response) =>(console.log(response.data.status)))
        // .then((response) =>(console.log(obj.status=)))
        .then(
          (response) => setPOBJ(response.data)
          // console.log()
          // navigation.addListener('focus', () => {
          //   setRefresh(true)
          // })
        )
        .then(console.log("salam"))
        .catch((error) => {
          if (error.response.status == "0") {
            global.HANDSHAKE = "Bearing";
            navigation.navigate("HandShake");
          } else {
            console.log(error);
          }
        });
    },
    [EF]
    // []
  );
  // return () => clearTimeout(timeoutVariable)
  // },
  // [refresh]
  // []
  // );
  // state = {
  //   value: 0.2
  // };
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
            marginTop: "5.5%",
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
          {global.ALARM === true ? (
            <Text style={styles3.notif}> {global.NOTIF} </Text>
          ) : (
            <View></View>
          )}
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

      <View style={[styles3.butbox, { flex: 5, marginTop: (wh * 10) / 100 }]}>
        <View
          style={[
            styles3.workbox,
            {
              // alignItems: "center",
              flexDirection: "column",
              // backgroundColor: 'blue',
              // flex:
            },
          ]}
        >
          <View
            style={{
              // width: ww * 70 / 100,
              // borderRadius: 20,
              height: (wh * 4) / 100,
              // backgroundColor: 'green',
              alignItems: "center",
              // marginLeft: (ww * 5) / 100,
              marginBottom: (wh * 3) / 100,
              marginTop: (wh * 3) / 100,
            }}
          >
            {/* <Text
              style={{
                fontSize: ResponsiveScreen.normalize(45),
                fontFamily: "Roboto",
                color: "#f2ca30",
              }}
            >
              {POBJ.name}
            </Text> */}

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
                <Text
                  style={{
                    fontSize: ResponsiveScreen.fontSize(25),
                    color: "#575757",
                    fontWeight: "700",
                    // marginTop: wh * 2.5 / 100,
                    // marginLeft: ww * 5 / 100,
                    textAlign: "left",
                    // backgroundColor: 'pink'
                  }}
                >{"  "}
                  {global.OBJ.company}
                </Text>
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
                    fontSize: ResponsiveScreen.normalize(25),
                    fontFamily: "Roboto",
                    color: "#fff",
                    textAlign: "right",
                    alignSelf: "center",
                    // backgroundColor:'pink'

                    // marginTop: ResponsiveScreen.normalize(50),
                    // marginLeft: ResponsiveScreen.normalize(35),
                    // marginBottom: ResponsiveScreen.normalize(30),
                  }}
                >
                  {"   "}Project Process{"   "}
                  {/* sdas sssssssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaav */}
                </Text>
              </View>
            </View>
          </View>
          <View
               style={{
                marginTop: "-3%",
                width: "85%",
                height: (ww * 8) / 100,
                paddingHorizontal: "0.8%",
                borderRadius: (ww * 4) / 200,
                flexDirection: "row",
                // marginRight:'-3%',
                alignItems: "center",
                alignSelf:'center',
                // backgroundColor: "#fff",
                justifyContent: "space-between",
                borderColor:"#f2ca30",
                borderWidth:0.3,
                // borderBottomColor:'red',
                // borderEndColor:'red',
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
                  borderRadius: (ww * 4) / 200,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View
                style={{
                  height: "90%",
                  backgroundColor: "#fff",
                  borderRadius: (ww * 4) / 200,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: ResponsiveScreen.fontSize(25),
                    color: "#f2ca30",
                    fontWeight: "700",

                    // marginTop: wh * 2.5 / 100,
                    // marginLeft: ww * 5 / 100,
                    textAlign: "left",
                    // backgroundColor: 'pink'
                  }}
                >
                  {"  "}
                  {global.PROJ.name}
                  
                  {"  "}
                </Text>
              </View>
              </View></View>

          <View style={{ width: ww, height: "70%",marginTop:'-6%' }}>
            <View
              style={{
                flex: 1,
                // width: ResponsiveScreen.normalize(600),
                // height: ResponsiveScreen.normalize(1000),
                borderRadius: (ww * 4) / 200,
                flexDirection: "row",
                // backgroundColor: "pink",
                marginTop: "12%",
              }}
            >
              {/* /// --------------------------------------cart----------------------- /// */}

              {wh / ww > 1.85 ? (
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  {myc === "1" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // moveVelocityThreshold={1}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            // value={Number(global.PROJ.status)}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />

                          {/* <Text>
          Value: {state.vale}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              marginBottom: 0,
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles3.workcard}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "2" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "3" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "4" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "5" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "6" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcard}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(950),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
        Value: {state.value}
      </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              ) : (
                ///-----------------------Normal----------------------------------------------------------///

                <View style={{ flex: 1, alignItems: "flex-start" }}>
                  {myc === "1" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              marginBottom: 0,
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles3.workcardN}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcardN, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "2" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcardN, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "3" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Matching
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles3.workcardN, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#bfbfbf",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "4" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "5" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : myc === "6" ? (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            vertical={true}
                            maximumValue={7}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
          Value: {state.value}
        </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles3.workcardN}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                { color: "#bfbfbf" },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        width: ResponsiveScreen.normalize(620),
                        // height: ResponsiveScreen.normalize(950),
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={styles3.container}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(810),
                              height: ResponsiveScreen.normalize(40),
                              borderRadius: 50,
                            }}
                            // style={{flex:1,borderRadius:50}}
                            trackStyle={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#f2ca30",
                              borderRadius: 50,
                            }}
                            minimumTrackTintColor={"#192570"}
                            // maximumTrackTintColor={'red'}
                            // maximumValue={0.7}
                            maximumValue={7}
                            vertical={true}
                            // step={0.143}
                            step={0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            value={state.value}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                          />
                          {/* <Text>
        Value: {state.value}
      </Text> */}
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "column-reverse", flex: 3 }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { marginBottom: 0, backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                              // backgroundColor: 'red'
                            }}
                          >
                            <MaterialCommunityIcons
                              name="forklift"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Material supply
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                          onPress={() => nextState()}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text style={[styles3.txtworkcard]}>Matching</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <AntDesign
                              name="checksquare"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            { backgroundColor: "#fff" },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Octicons
                              name="package-dependencies"
                              size={ResponsiveScreen.normalize(55)}
                              color="orange"
                            />
                          </View>
                          <View>
                            <Text
                              style={[styles3.txtworkcard, { color: "#000" }]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles3.workcardN,
                            {
                              backgroundColor: "#192570",
                              width: ResponsiveScreen.normalize(505),
                              marginLeft: "-6%",
                            },
                          ]}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <MaterialCommunityIcons
                              name="truck-delivery"
                              size={ResponsiveScreen.normalize(55)}
                              color="#f2ca30"
                            />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "800",
                                  fontSize: ResponsiveScreen.fontSize(27),
                                },
                              ]}
                            >
                              Ready for delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </View>

        {wh / ww > 1.85 ? (
          <View
            style={{
              // backgroundColor: "pink",
              position: "absolute",
              width: (ww * 17) / 100,
              height: (wh * 63) / 100,
              right: 0,
              top: (wh * 9) / 100,
              // flex:1
            }}
          >
            <View style={styles3.barbox}>
              <TouchableOpacity onPress={setAPost}>
                <View style={styles3.barbut11}>
                  <Image
                    source={require("../assets/buttop.png")}
                    style={{
                      width: ResponsiveScreen.normalize(170),
                      height: ResponsiveScreen.normalize(400),
                      resizeMode: "stretch",
                    }}
                  />
                </View>
                <View>
                  <Text style={styles3.bartxt}>Photo Album</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles3.barbut22}>
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        color: "#222",
                        marginTop: ResponsiveScreen.normalize(140),
                        marginLeft: ResponsiveScreen.normalize(-66),
                      },
                    ]}
                  >
                    Project Process
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={setDPost}>
                <View style={styles3.barbut33}>
                  <Image
                    source={require("../assets/butbot2.png")}
                    style={{
                      width: ResponsiveScreen.normalize(116),
                      height: ResponsiveScreen.normalize(380),
                      resizeMode: "stretch",
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        marginTop: ResponsiveScreen.normalize(-200),
                        marginLeft: ResponsiveScreen.normalize(-50),
                      },
                    ]}
                    // onPress={()=>{setSelect(itemList.item.id_number);setPost()}
                    // }
                  >
                    Documents
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles3.barPA}></TouchableOpacity>
            <View style={{flex:1,backgroundColor:'gray'}}></View>
            <TouchableOpacity style={[styles3.barPP,{backgroundColor:'#f2ca30'}]}></TouchableOpacity>
            <View style={{flex:1,backgroundColor:'gray'}}></View>
            <TouchableOpacity style={styles3.barDA}></TouchableOpacity> */}
          </View>
        ) : (
          <View
            style={{
              // backgroundColor: 'black',
              position: "absolute",
              right: -4,
              top: (wh * 9) / 100,
            }}
          >
            <View style={[styles3.barbox, {}]}>
              <TouchableOpacity onPress={setAPost}>
                <View style={[styles3.barbut11, {}]}>
                  <Image
                    source={require("../assets/buttop.png")}
                    style={{
                      width: ResponsiveScreen.normalize(160),
                      height: ResponsiveScreen.normalize(300),
                      //   marginRight:-100,
                      right: "-5%",
                      resizeMode: "stretch",
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      { marginTop: ResponsiveScreen.normalize(-110) },
                    ]}
                  >
                    Photo Album
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles3.barbut22,
                  {
                    width: ResponsiveScreen.normalize(105),
                    height: ResponsiveScreen.normalize(240),
                  },
                ]}
                // onPress={setPost}
              >
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        color: "#222",
                        marginTop: ResponsiveScreen.normalize(140),
                        marginLeft: ResponsiveScreen.normalize(-66),
                      },
                    ]}
                  >
                    Project Process
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={setDPost}>
                <View style={styles3.barbut33}>
                  <Image
                    source={require("../assets/butbot2.png")}
                    style={{
                      width: ResponsiveScreen.normalize(110),
                      height: ResponsiveScreen.normalize(300),
                      resizeMode: "stretch",
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        marginTop: ResponsiveScreen.normalize(-130),
                        marginLeft: ResponsiveScreen.normalize(-50),
                      },
                    ]}
                    // onPress={()=>{setSelect(itemList.item.id_number);setPost()}
                    // }
                  >
                    Documents
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <View
        style={{
          height: (ww * 11) / 100,
          // height: wh * 16 / 100,
          flexDirection: "row",
          width: (ww * 90) / 100,
          position: "absolute",
          borderRadius: ((ww + wh) * 2) / 200,
          bottom: "2%",
          backgroundColor: "#f2ca30",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            // width: "33.3%",
            // height: "100%",
            flex: 1,
            // backgroundColor: "#f2ca30",
            borderRadius: 5,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("OpenProject")}
        >
          <View style={{ alignItems: "center" }}>
            <AntDesign
              name="home"
              size={ResponsiveScreen.fontSize(38)}
              color="#fff"
            />
          </View>
          {/* <View style={{width:'60%',height:1,backgroundColor:'#fff',alignSelf:'center'}}></View> */}
          <Text
            style={{
              alignSelf: "center",
              fontSize: ResponsiveScreen.fontSize(22),
              color: "#fff",
              marginTop: "-1%",
            }}
          >
            {" "}
            Current Projects
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Bearing;

// {/* <View style={[styles2.butbox, { alignItems: "center" }]}>
//           <Text
//             style={{
//               fontSize: hp('5%'),
//               color: "#f2ca30",
//               marginTop: hp("4%"),
//               marginLeft: wp('18%'),
//               marginBottom: hp('3%'),
//             }}
//           >
//             Bearing
//           </Text>

//           <View style={{marginLeft:70}}>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: hp("3%"),
//                     marginTop: hp("2%"),
//                     marginBottom: 10,
//                     marginStart: wp("12%"),
//                     paddingLeft: 10,
//                     paddingTop: hp('3%'),
//                     width: wp('70%'),
//                     height: hp('8%'),
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: hp('1%'),
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   {/* <View style={{paddingTop: hp('1%'),backgroundColor:'red'}}> */}
//                   <MaterialCommunityIcons

//                     name="forklift"
//                     size={hp('4%')}
//                     color="orange"
//                     paddingTop={hp("5%")}
//                   />
//                   {/* </View> */}
//                   {" "}
//                   Material supply
//                 </Text>
//               )}
//             />
//             <Text style={styles2.icon1}></Text>
//             {/* <Text style={styles2.carda}> Material supply</Text> */}
//           </View>

//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -10,
//                     marginBottom: -2,
//                     marginStart: "26%",
//                     paddingLeft: 10,
//                     paddingTop: 8,
//                     width: 270,
//                     height: 50,
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <MaterialCommunityIcons
//                     name="scissors-cutting"
//                     size={24}
//                     color="orange"
//                   />{" "}
//                   Cutting
//                 </Text>
//               )}
//             />
//             <Text style={styles2.icon2}> </Text>
//             {/* <Text style={styles2.cardb}>Cutting</Text> */}
//           </View>
//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -10,
//                     marginBottom: 18,
//                     marginStart: "26%",
//                     paddingLeft: 10,
//                     paddingTop: 8,
//                     width: 270,
//                     height: 50,
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <Text style={styles2.icon3}>
//                     <Octicons name="tools" size={22} color="orange" />{" "}
//                   </Text>{" "}
//                   Machining
//                 </Text>
//               )}
//             />

//             {/* <Text style={styles2.cardc}>Machining</Text> */}
//           </View>
//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -10,
//                     marginBottom: 18,
//                     marginStart: "26%",
//                     paddingRight: 15,
//                     paddingLeft: 0,
//                     paddingTop: 8,
//                     paddingBottom: 0,
//                     width: 270,
//                     height: 80,
//                     textAlign: "center",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <FontAwesome5 name="paint-roller" size={22} color="orange" />{" "}
//                   Heat treatment/coating/ painting and plating
//                 </Text>
//               )}
//             />

//           </View>
//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -10,
//                     marginBottom: 5,
//                     marginStart: "26%",
//                     paddingLeft: 10,
//                     paddingTop: 8,
//                     width: 270,
//                     height: 50,
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <AntDesign name="checksquare" size={20} color="orange" />{" "}
//                   Quality control
//                 </Text>
//               )}
//             />
//             <Text style={styles2.icon5}></Text>
//             {/* <Text  style={styles2.cardd}> Quality control</Text> */}
//           </View>
//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -12,
//                     marginBottom: 5,
//                     marginStart: "26%",
//                     paddingLeft: 10,
//                     paddingTop: 8,
//                     width: 270,
//                     height: 50,
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <Octicons
//                     name="package-dependencies"
//                     size={21}
//                     color="orange"
//                   />{" "}
//                   Packaging
//                 </Text>
//               )}
//             />
//             <Text style={styles2.icon6}> </Text>
//             {/* <Text style={styles2.carde}>Packaging</Text> */}
//           </View>
//           <View>
//             <Pressable
//               children={({ pressed }) => (
//                 <Text
//                   style={{
//                     color: pressed ? "#fff" : "#222",
//                     fontFamily: "Roboto",
//                     fontSize: 18,
//                     marginTop: -12,
//                     marginBottom: 5,
//                     marginStart: "26%",
//                     paddingLeft: 10,
//                     paddingTop: 8,
//                     width: 270,
//                     height: 50,
//                     textAlign: "left",
//                     lineHeight: 30,
//                     borderRadius: 10,
//                     backgroundColor: pressed ? "#192571" : "#fff",
//                     elevation: 3,
//                     shadowOffset: { width: 1, height: 1 },
//                     shadowColor: "#333",
//                     shadowOpacity: 0.3,
//                     shadowRadius: 2,
//                   }}
//                 >
//                   <MaterialCommunityIcons
//                     name="truck-delivery"
//                     size={26}
//                     color="orange"
//                   />{" "}
//                   Ready for delivery
//                 </Text>
//               )}
//             />
//             <Text style={styles2.icon7}> </Text>
//             {/* <Text style={styles2.cardf}>Ready for delivery</Text> */}
//           </View>

//           <View>
//             <Text
//               style={btn.trapezoida}
//               onPress={() =>
//                 props.navigation.navigate("PhotoAlbum", { name: "PhotoAlbum" })
//               }
//             >
//               Photo Album
//             </Text>
//           </View>
//           <View>
//             <Text style={btn.btnb}>Project Process</Text>
//           </View>
//           <View>
//             <Text style={btn.trapezoidb}>Documents</Text>
//           </View>
//           <TouchableOpacity>
//             {/* <View>
//               <Text style={btn.btn4}></Text>
//             </View>
//             <View>
//               <Text style={btn.btn3}></Text>
//             </View> */}
//           </TouchableOpacity>
//           <View style={{ height: 150, width: "100%", padding: 10 }}>
//             <FlatList
//               // data={DATA}
//               // renderItem={renderItem}
//               // keyExtractor={item => item.id}
//               renderItem={({ renderItem }) => (
//                 <TouchableOpacity
//                   style={[
//                     {
//                       backgroundColor: "blue",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       flex: 1,
//                     },
//                   ]}
//                 >
//                   <Text key={item.id}>{item.name}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </View> */}
