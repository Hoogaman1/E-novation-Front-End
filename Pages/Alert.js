import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Pages/Login";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from 'react-native-reanimated';
import { useRoute } from "@react-navigation/native";

// import { Modalize } from 'react-native-modalize';

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

import { styles2, btn, styles3 } from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import LoginPage from "../Pages/Login";
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);

// const modalizeRef = useRef < Modalize > (null);

// const onOpen = () => {
//   modalizeRef.current?.open();
// };

const OpenProject = (props) => {
  global.HANDSHAKE = "Alert";
  function handleBackButtonClick() {
    navigation.goBack();
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
  // const [next, setNext] = useState("");

  const route = useRoute();

  // const [dummy, setDummy] = useState([]);
  const tokenAuth = global.TOKEN;
  console.log(tokenAuth);
  const navigation = useNavigation();

  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);

  const [dummy, setDummy] = useState([]);
  const [gray, setGray] = useState(true);
  // console.log(dummy);

  const Alert = [
    {
      active: true,
      Project: 1,
      Id: 11,
      state: 111,
      dec: "Lorem ipsum dolor sit amet. ",
      time: "Sat 12:30",
    },
    {
      active: true,
      Project: 2,
      Id: 22,
      state: 222,
      dec: "Lorem ipsum dolor sit amet. ",
      time: "Sun 15:38",
    },
    {
      active: true,
      Project: 3,
      Id: 33,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
      time: "Fri 08:28",
    },
    {
      active: true,
      Project: 4,
      Id: 44,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
      time: "Mon 10:45",
    },
    {
      active: true,
      Project: 5,
      Id: 55,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
      time: "Wen 07:00",
    },
    {
      active: true,
      Project: 6,
      Id: 66,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
    },
    {
      active: true,
      Project: 7,
      Id: 77,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
    },
    {
      active: true,
      Project: 8,
      Id: 88,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
    },
    {
      active: true,
      Project: 9,
      Id: 99,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
    },
    {
      active: true,
      Project: 10,
      Id: 110,
      state: "Lorem ipsum dolor sit amet. ",
      dec: "Lorem ipsum dolor sit amet. ",
    },
  ];

  // const [id_select, setSelect] = useState("");

  // const setPost = (props) => {

  //     //   useEffect(() => {
  //     // }, [id_select]);
  //     axios({
  //         method: "POST",
  //         url: "http://" + global.UURL + "/USER/opproject/",
  //         headers: {
  //             // 'Content-Type': "application/json",
  //             Authorization: "Token " + global.TOKEN,
  //             // 'Accept': 'application/json'
  //         },
  //         data: {
  //             id_number: id_select,
  //         },
  //     })
  //         // .then((response) => console.log(response.status))
  //         // .then(console.log('salam'))
  //         .then((response) => {
  //             // console.log(response.data)
  //             if (response.status == "202") {

  //                 // props.navigation.push({token:tokenAuth,obj:response.data});
  //                 global.OBJ = response.data;

  //                 props.navigation.navigate('Bearing', { token: tokenAuth, obj: global.OBJ });
  //             }
  //         })
  //         .catch((error) => console.log(error));
  // }
  // const setNPost = () => {
  //     props.navigation.navigate('Notif', { token: tokenAuth });
  // }
  // const setHPost = () => {
  //     props.navigation.navigate('History', { token: tokenAuth });
  // }
  const setAlert = () => {
    props.navigation.navigate("Alert", { token: tokenAuth });
  };
  const setBr = (pp) => {
    // global.OBJ = ({ "id": Number(pp.project) ,name:pp.pname})
    global.PROJ = { id: pp.project, name: pp.pname };
    // console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRR');
    // console.log(global.OBJ);
    navigation.navigate(pp.state);
    axios({
      method: "patch",
      url: "http://" + global.UURL + "/BIGADMIN/alertedit/" + pp.id,
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + global.TOKEN,
        // 'Accept': 'application/json'
      },
      data: {
        // id_number: id_select,
      },
    })
      // .then((response) => console.log(response.status))
      // .then(console.log('salam'))
      .then((response) => {
        console.log(response.data);

        if (response.status == "202") {
          console.log("okkkkk");
        }
      })
      .catch((error) => console.log(error));

    // console.log("asadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasollah")
  };

  // const setSend = (pq) => {
  //     // const response

  //     // console.log(global.UURL);
  //     axios({
  //         method: "patch",
  //         // url: "http://127.0.0.1:8000/USER/login/",
  //         url: "http://" + global.UURL + "/BIGADMIN/alertedit/" + pq,
  //         headers: {
  //             Authorization: "Token " + tokenAuth,
  //         },
  //         data: {
  //             active: false,
  //         },
  //     })
  //         .then((response) => console.log(response.data))

  //         .catch((error) => console.log(error));
  // }

  const [refresh, setRefresh] = useState(false);
  setTimeout(() => setRefresh(!refresh), 3500);
  useEffect(() => {
    const tokenAuth = global.TOKEN;
    // console.log("asadollah")
    // const { navigation } = props;
    // const tokenAuth = props.navigation.navigate.getParam('token',null)
    // useEffect(() => {
    // }, [id_select]);
    // console.log(tokenAuth);
    // const dummyData = []
    axios({
      method: "get",
      url: "http://" + global.UURL + "/BIGADMIN/alertlist/",

      headers: {
        Authorization: "Token " + tokenAuth,
      },
      data: {},
    })
      .then((response) => {setDummy(response.data), setGray(false)})
      // .then((response) => console.log("asadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasollah"))

      .catch((error) => console.log(error));
  }, [refresh]);

  return (
    <View style={styles3.page}>
      {/* <View style={[styles3.topbox,{marginTop:'7%'}]}>
                <Image
                    source={require("../assets/app_ui2-13.png")}
                    style={styles3.logo}
                />
                <TouchableOpacity
                    onPress={setAlert}
                >
                    <View style={{ backgroundColor: "#f2ca30", width: ww * 7.5 / 100, marginLeft: ww * 18 / 100, marginTop: wh * -1 / 100, height: ww * 7.5 / 100, borderRadius: ww && wh * 1 / 100, justifyContent: 'center', alignItems: 'center' }}>
                    
                        <FontAwesome5 name="bell" size={ResponsiveScreen.fontSize(35)} color="#fff"
                            style={{
                                // marginLeft: ww * 18 / 100,
                                // marginTop: wh * -1 / 100
                            }} />

                        <View style={{ backgroundColor: 'red', width: ww * 5 / 100, height: ww * 5 / 100, borderRadius: ww * 50 / 100, position: 'absolute', right: ww * -2.2 / 100, bottom: wh * 3 / 100, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#fff', fontSize: ResponsiveScreen.fontSize(20), fontWeight: '500' }}>24</Text></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.openDrawer({ token: tokenAuth }); }}
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
            </View> */}
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
            // backgroundColor: 'red'
            marginTop: "5%",
          },
        ]}
      >
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={[styles3.logo, { height: (wh * 7) / 100 }]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: (ww * 25) / 100,
          }}
        >
          <TouchableOpacity
            onPress={setAlert}
            style={{
              width: (ww * 7.5) / 100,
              height: (ww * 7.5) / 100,
              backgroundColor: "#192570",
              borderRadius: (ww * 2) / 100,
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <FontAwesome5
              name="bell"
              size={ResponsiveScreen.fontSize(45)}
              color="#fff"
              style={
                {
                  //   marginLeft: (ww * 18) / 100,
                  //   marginTop: (wh * 1) / 100,
                }
              }
            />
            {/* <View
            style={{
              backgroundColor: "red",
              width: (ww * 5) / 100,
              height: (ww * 5) / 100,
              borderRadius: (ww * 50) / 100,
              position: "absolute",
              right: (ww * -3.5) / 100,
              bottom: (wh * 2) / 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: ResponsiveScreen.fontSize(20),
                fontWeight: "500",
              }}
            >
              24
            </Text>
          </View> */}
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
      </View>

      {/* <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity> */}

      {/* <Modalize ref={modalizeRef}>...your content</Modalize> */}

      <View style={[styles3.butbox,{marginTop: '30%'}]}>
        <View
          style={[
            styles3.workbox,
            { alignItems: "center", flexDirection: "column", width: ww },
          ]}
        >
          <View
            style={{
              alignSelf: "center",
              marginTop: "1%",
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
                  fontWeight: "700",

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
                  // backgroundColor:'pink'

                  // marginTop: ResponsiveScreen.normalize(50),
                  // marginLeft: ResponsiveScreen.normalize(35),
                  // marginBottom: ResponsiveScreen.normalize(30),
                }}
              >
                {"     "}Notifications{"     "}
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              width: (ww * 82) / 100,
              height: (wh * 70) / 100,
              marginTop: (wh * 1) / 100,
              // elevation:3,
              borderRadius: 20,
              flexDirection: "row",
            }}
          >
            {gray == false ? (
              <FlatList
                data={dummy}
                style={{
                  width: (ww * 81) / 100,
                  paddingHorizontal: (ww * -0) / 100,
                  height: "100%",
                }}
                renderItem={(itemList) => (
                  <TouchableOpacity
                    onPress={() => {
                      setBr(itemList.item);
                    }}
                    style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: (ww * 49) / 100,
                          height: (wh * 3.5) / 100,
                          paddingLeft: (ww * 4) / 100,
                          // backgroundColor: "yellow",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "600",
                            // fontFamily: 'sans-serif',
                            // color: '#f2ca30',
                            color: "gray",
                            // backgroundColor: "green",
                            fontSize: ResponsiveScreen.normalize(35),
                            textAlign: "left",
                          }}
                        >
                          {itemList.item.pname}
                        </Text>
                      </View>
                      <View
                        style={{
                          // width: ww * 39.5 / 100,
                          // height: wh * 4 / 100,
                          // marginLeft: ww * 2 / 100,
                          backgroundColor: "green",
                          // marginTop: wh *  / 100,
                          justifyContent: "center",
                          position: "absolute",
                          top: "15%",
                          right: "2%",
                        }}
                      >
                        {itemList.item.active === true ? (
                          <View
                            style={{
                              backgroundColor: "#f2ca30",
                              // width: ww * 24 / 100,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: ww && (wh * 0.6) / 100,
                              position: "absolute",
                              top: "2%",
                              right: "2%",

                              // marginTop: ww * 4 / 100,
                              // marginRight: ww * 4 / 100,
                            }}
                          >
                            <Text
                              style={{
                                paddingHorizontal: (ww * 0.5) / 100,
                                paddingVertical: (wh * 0.3) / 100,
                                color: "#fff",
                                fontWeight: "400",
                                fontSize: 12.5,
                              }}
                            >
                              {"  "}New Notification{"  "}
                            </Text>
                          </View>
                        ) : (
                          <Text></Text>
                        )}
                      </View>
                    </View>

                    <View
                      style={{
                        width: (ww * 30) / 100,
                        height: (wh * 3) / 100,
                        paddingLeft: (ww * 4) / 100,
                        // backgroundColor: "yellow",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "400",
                          // fontFamily: 'sans-serif',
                          color: "#909090",
                          // backgroundColor: "green",
                          fontSize: ResponsiveScreen.normalize(30),
                        }}
                      >
                        {itemList.item.time.slice(0, 10)}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight: "5%",
                      }}
                    >
                      <View
                        style={{
                          // width: ww * 67 / 100,
                          borderRadius: ww && (wh * 0.6) / 100,
                          height: (wh * 3) / 100,
                          paddingHorizontal: (ww * 4) / 100,
                          backgroundColor: "#192570",
                          justifyContent: "center",
                          marginLeft: "5.5%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "600",
                            // fontFamily: 'sans-serif',
                            color: "#fff",
                            // backgroundColor: "green",
                            fontSize: ResponsiveScreen.normalize(25),
                          }}
                        >
                          {itemList.item.dec}
                        </Text>
                      </View>

                      {/* <View  >
                                            {itemList.item.alarm === true ? (
                                                <Text></Text>
                                            ) : (
                                                <FontAwesome name="bell" size={19} color="#f2ca30" style={{ fontWeight: "bold", marginLeft: ww * 0 / 100, marginTop: wh * -0 / 100 }} />
                                            )}
                                        </View> */}
                    </View>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View
                style={{
                  width: (ww * 81) / 100,
                  paddingHorizontal: (ww * -0) / 100,
                  height: "100%",
                }}
              >
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[mystyles.card, { marginTop: (wh * 0.7) / 100 }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "2%",
                    }}
                  >
                    <View
                      style={{
                        width: (ww * 49) / 100,
                        height: (wh * 3.5) / 100,
                        paddingLeft: (ww * 4) / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                      }}
                    ></View>
                    <View
                      style={{
                        // width: ww * 39.5 / 100,
                        // height: wh * 4 / 100,
                        // marginLeft: ww * 2 / 100,
                        backgroundColor: "#e5e5e5e",
                        // marginTop: wh *  / 100,
                        justifyContent: "center",
                        position: "absolute",
                        top: "15%",
                        right: "2%",
                      }}
                    ></View>
                  </View>

                  <View
                    style={{
                      width: (ww * 30) / 100,
                      height: (wh * 3) / 100,
                      // paddingLeft: ww * 4 / 100,
                      marginLeft: "2%",
                      backgroundColor: "#e5e5e5",
                      // justifyContent: 'center'
                    }}
                  ></View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: "5%",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        // width: ww * 67 / 100,
                        // borderRadius: ww && (wh * 0.6) / 100,
                        height: "80%",
                        width: "90%",
                        // paddingHorizontal: ww * 4 / 100,
                        backgroundColor: "#e5e5e5",
                        justifyContent: "center",
                        marginLeft: "2%",
                        marginVertical: "1%",
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OpenProject;

const mystyles = StyleSheet.create({
  card: {
    fontFamily: "Roboto",
    marginTop: (wh * 10) / 100,
    width: (ww * 75) / 100,
    height: (wh * 11) / 100,
    // textAlign: "left",
    marginLeft: (ww * 4) / 100,
    marginBottom: (wh * 0.7) / 100,
    borderRadius: (ww * 2) / 100,
    // elevation: 6,
    // backgroundColor: "gray",
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor: "black",
    // shadowOpacity:3,
    // shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#fff",
    // backgroundColor: "#aaa",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // alignItems:'stretch'
  },
});
export { mystyles };
