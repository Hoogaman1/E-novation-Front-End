import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  EvilIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
import { styles2, btn, styles3, stylesAlT } from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import Item from "antd/lib/list/Item.js";

const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

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

const History = () => {
  global.HANDSHAKE = "History";
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
  // const tokenAuth = props.route.params.token;
  const navigation = useNavigation();
  const [show1, setState1] = useState(false);
  const [show2, setState2] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [Gray, setGray] = useState(true);
  const [ID, setID] = useState();
  const [message, setMessage] = useState(
    "You successfully moved  '" + "' to current projects page. Next step? "
  );
  // const [message,setMessage] = useState(("You successfully moved  '"+ (global.PROJ.name) +"' to current projects page. Next step?jj "))

  // const [show, setState] = useState(false);
  // const tokenAuth = "";
  // console.log(global.OBJ)
  // const obj = props.route.params.obj;
  // const { navigation } = props;
  // console.log(dummy[0].project)
  // console.log(dummy.project)
  const itemclick = (obj) => {
    global.PROJ = obj;
    // console.log("jjj");
    // console.log(obj);
    // console.log("lll");
    props.navigation.navigate("Bearing");
  };
  const DONE = (id) => {
    // setState1(false)
    // const obj = global.OBJ;
    // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk");
    // console.log(dummy);
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
    axios({
      method: "patch",
      url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + id,
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + global.TOKEN,
        // 'Accept': 'application/json'
      },
      data: {
        next: false,
        revert: false,
        done: false,
      },
    })
      .then((response) => {
        if (response.data) {
          // console.log("salammmmmmmmmmmmmmmmmmmmmmmm");
          setState1(false);
        }
      })
      // navigation.addListener('focus', () => {
      //   setRefresh(true)
      // }))
      // .then((response) => (console.log(EF))
      // .then(console.log(EF))
      // .catch((error) => console.log(error));

      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "History";
          navigation.navigate("HandShake");
        } else {
          // setState(true)
          console.log(error);
          // console.log("Odafezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
        }
      });
  };
  const tokenAuth = global.TOKEN;
  // console.log("ghabl")
  // console.log(dummy[0].project[0].name)
  // console.log('bad')
  // const [email, setEmail] = useState("");
  // var email = "ali@test.com";
  // const [mydata, setData] = useState("");
  // const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  // const [project, setProject] = useState([]);
  const [dummy, setDummy] = useState([]);
  console.log(dummy[0])
  const ProjectEdit = () => {
    navigation.navigate("OpenProject");
  };
  useEffect(() => {
    // props.navigation.navigate("NewPass"),
    const tokenAuth = global.TOKEN;
    const obj = global.OBJ;
    console.log(tokenAuth);

    axios({
      method: "GET",
      url: "http://" + global.UURL + "/BIGADMIN/history/" + obj.id,
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
      // }).then((Response) => console.log(Response.data))
      // }).then((Response) => {
      //   // if (Response.status == "200") {
      //     if(Response.data[0].project!='undefined') {
      //       console.log(Response.data[0].project)
      //       setDummy(Response.data[0].project);}

      // })
    })
      .then((Response) => {
        try {
          setDummy(Response.data);
          setGray(false);
          // console.log(Response.data);
        } catch (e) {
          console.log("Error");
          console.log(e);
        }
      })
      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "History";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
    // .then((Response) => console.log(Response.data))
  }, [refresh]);
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
            // backgroundColor: 'red'
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
          />{global.ALARM === true ?(
            <Text
            style={styles3.notif}
            >
            {' '}{global.NOTIF}{" "}
          </Text> ):(<View></View>)}
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
      <View
        style={[
          styles3.butbox,
          {
            alignItems: "center",
            flexDirection: "column",
            // backgroundColor: 'red',
            // marginTop: (wh * 12) / 100,
            flex: 2,
          },
        ]}
      >
        <View
          style={{
            width: ww,
            borderRadius: 20,
            height: (wh * 7) / 100,
            // backgroundColor: 'blue'
          }}
        >
          
          <View
            style={{
              alignSelf: "center",
              // marginTop: "2%",
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
                  // backgroundColor: 'pink'
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
                {"     "}History{"     "}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ width: (ww * 100) / 100, height: (wh * 66.9) / 100 }}>
          {Gray === false ? (
            <View style={{ flex: 1 }}>
              {dummy == "" ? (
                <View
                  style={{
                    position: "absolute",
                    width: (ww * 75) / 100,
                    height: (ww * 40) / 100,
                    // backgroundColor: "#f2ca30",
                    top: "30%",
                    alignSelf: "center",
                    borderRadius: (ww * 4) / 200,
                    alignItems: "center",
                    padding: "5%",
                    paddingTop: "9%",
                  }}
                >
                  {/* <AntDesign name="like2" size={ResponsiveScreen.normalize(60)} color="#192570" /> */}
                  <FontAwesome
                    name="gear"
                    size={ResponsiveScreen.normalize(60)}
                    color="#fff"
                  />
                  <Text
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      color: "#575757",
                      fontSize: ResponsiveScreen.fontSize(28),
                      marginTop: "4%",
                    }}
                  >
                    History page is empty and you will see the first item after
                    closing the first project.{" "}
                    {/* <Text
                          style={{ color: "#192570" }}
                          onPress={() => ProjectEdit()}
                        >
                          edit button in the project page
                        </Text>
                        .{" "} */}
                  </Text>
                </View>
              ) : (
                <View style={{ flex: 1 }}>
                  <FlatList
                    style={{
                      width: (ww * 100) / 100,
                      paddingHorizontal: (ww * 0) / 100,
                      height: (wh * 100) / 100,
                      flexDirection: "column",
                    }}
                    data={dummy}
                    renderItem={(itemList) => (
                      <TouchableOpacity
                        style={mystyles.card}
                        // onPress={() => {
                        //   setID(itemList.item.id);
                        //   setState1(true);
                        //   global.PROJ = itemList.item.id;
                        //   setMessage(
                        //     "You successfully moved '" +
                        //       itemList.item.name +
                        //       "' to current projects page. Next step? "
                        //   );
                        // }}
                      >
                        <View
                          style={{
                            height: (wh * 5) / 100,
                            width: (ww * 85) / 100,
                            justifyContent: "center",
                            paddingLeft: "4%",
                          }}
                        >
                          <Text
                            style={{
                              color: "gray",
                              fontFamily: "Roboto",
                              fontSize: ResponsiveScreen.fontSize(40),
                              padding: ww && (wh * 0.5) / 100,
                              // backgroundColor: 'red',
                              textAlign: "left",
                            }}
                          >
                            {" "}
                            {itemList.item.name}
                          </Text>
                        </View>
                        <View
                          style={{
                            height: (wh * 0.1) / 100,
                            width: (ww * 81) / 100,
                            backgroundColor: "#f2ca30",
                            borderRadius: 100,
                            marginHorizontal: (ww * 2) / 100,
                          }}
                        ></View>

                        <View
                          style={{
                            height: (wh * 0.05) / 100,
                            width: (ww * 80) / 100,
                            backgroundColor: "#f2ca30",
                            borderRadius: 100,
                            marginHorizontal: (ww * 1.5) / 100,
                          }}
                        ></View>
                        <View
                          style={{
                            height: (wh * 8) / 100,
                            width: (ww * 80) / 100,
                            flexDirection: "row",
                            // backgroundColor:'red'
                          }}
                        >
                          <View
                            style={{
                              height: (wh * 8) / 100,
                              width: (ww * 28) / 100,
                              flexDirection: "column",
                              // backgroundColor:'red'
                            }}
                          >
                            <Text
                              style={{
                                marginTop: (wh * 1) / 100,
                                marginLeft: (ww * 3.5) / 100,
                                fontSize: ResponsiveScreen.fontSize(19),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ID No.:
                              <Text style={{ color: "gray" }}>
                                {" "}
                                {itemList.item.id_number}
                              </Text>
                            </Text>
                            <Text
                              style={{
                                marginTop: (wh * 1) / 100,
                                marginLeft: (ww * 3.5) / 100,
                                fontSize: ResponsiveScreen.fontSize(19),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Drowing No.:
                              <Text style={{ color: "gray" }}>
                                {" "}
                                {itemList.item.drawing_num}
                              </Text>
                            </Text>
                          </View>

                          <View
                            style={{
                              height: (wh * 8) / 100,
                              width: (ww * 27) / 100,
                              flexDirection: "column",
                              // backgroundColor:'red'
                            }}
                          >
                            <Text
                              style={{
                                marginTop: (wh * 1) / 100,
                                marginLeft: (ww * 2) / 100,
                                fontSize: ResponsiveScreen.fontSize(18),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Amount:
                              <Text style={{ color: "gray" }}>
                                {" "}
                                {itemList.item.amount}
                              </Text>
                            </Text>
                            <Text
                              style={{
                                marginTop: (wh * 1.4) / 100,
                                marginLeft: (ww * 2) / 100,
                                fontSize: ResponsiveScreen.fontSize(18),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Order No.:
                              <Text style={{ color: "gray" }}>
                                {" "}
                                {itemList.item.order_number}
                              </Text>
                            </Text>
                          </View>

                          <View
                            style={{
                              height: (wh * 7) / 100,
                              width: (ww * 28) / 100,
                              flexDirection: "column",
                              // backgroundColor:'red'
                            }}
                          >
                            <Text
                              style={{
                                marginTop: (wh * 1) / 100,
                                // marginLeft: ResponsiveScreen.normalize(0),
                                fontSize: ResponsiveScreen.fontSize(18),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              State.:
                              <Text style={{ color: "gray" }}>
                                {" "}
                                {itemList.item.status}
                              </Text>
                            </Text>
                            {/* <Text
                              style={{
                                marginTop: (wh * 1) / 100,
                                // marginLeft: ResponsiveScreen.normalize(0),
                                fontSize: ResponsiveScreen.fontSize(18),
                                color: "#192570",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              End Date:
                              <Text style={{ color: "gray" }}> 2022/3/12</Text>
                            </Text> */}
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
          ) : (
            <View
              style={{
                width: (ww * 100) / 100,
                paddingHorizontal: (ww * 0) / 100,
                height: (wh * 100) / 100,
                flexDirection: "column",
              }}
            >
              <View style={mystyles.card}>
                <View
                  style={{
                    height: (wh * 5) / 100,
                    width: (ww * 85) / 100,
                    justifyContent: "center",
                    paddingLeft: "4%",
                  }}
                >
                  <View
                    style={{
                      color: "gray",
                      width: "45%",
                      height: "70%",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(40),
                      padding: ww && (wh * 0.5) / 100,
                      backgroundColor: "#f2f2f2",
                      borderRadius: 3,
                      color: "red",
                      textAlign: "center",
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    height: (wh * 0.1) / 100,
                    width: (ww * 81) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 2) / 100,
                  }}
                ></View>

                <View
                  style={{
                    height: (wh * 0.05) / 100,
                    width: (ww * 80) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 1.5) / 100,
                  }}
                ></View>
                <View
                  style={{
                    height: (wh * 8) / 100,
                    width: (ww * 80) / 100,
                    flexDirection: "row",
                    // backgroundColor:'red'
                  }}
                >
                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 27) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1.4) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 7) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "8%",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "10%",
                        borderRadius: 3,
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
              <View style={mystyles.card}>
                <View
                  style={{
                    height: (wh * 5) / 100,
                    width: (ww * 85) / 100,
                    justifyContent: "center",
                    paddingLeft: "4%",
                  }}
                >
                  <View
                    style={{
                      color: "gray",
                      width: "45%",
                      height: "70%",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(40),
                      padding: ww && (wh * 0.5) / 100,
                      backgroundColor: "#f2f2f2",
                      borderRadius: 3,
                      color: "red",
                      textAlign: "center",
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    height: (wh * 0.1) / 100,
                    width: (ww * 81) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 2) / 100,
                  }}
                ></View>

                <View
                  style={{
                    height: (wh * 0.05) / 100,
                    width: (ww * 80) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 1.5) / 100,
                  }}
                ></View>
                <View
                  style={{
                    height: (wh * 8) / 100,
                    width: (ww * 80) / 100,
                    flexDirection: "row",
                    // backgroundColor:'red'
                  }}
                >
                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 27) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1.4) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 7) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "8%",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "10%",
                        borderRadius: 3,
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
              <View style={mystyles.card}>
                <View
                  style={{
                    height: (wh * 5) / 100,
                    width: (ww * 85) / 100,
                    justifyContent: "center",
                    paddingLeft: "4%",
                  }}
                >
                  <View
                    style={{
                      color: "gray",
                      width: "45%",
                      height: "70%",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(40),
                      padding: ww && (wh * 0.5) / 100,
                      backgroundColor: "#f2f2f2",
                      borderRadius: 3,
                      color: "red",
                      textAlign: "center",
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    height: (wh * 0.1) / 100,
                    width: (ww * 81) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 2) / 100,
                  }}
                ></View>

                <View
                  style={{
                    height: (wh * 0.05) / 100,
                    width: (ww * 80) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 1.5) / 100,
                  }}
                ></View>
                <View
                  style={{
                    height: (wh * 8) / 100,
                    width: (ww * 80) / 100,
                    flexDirection: "row",
                    // backgroundColor:'red'
                  }}
                >
                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 27) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1.4) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 7) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "8%",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "10%",
                        borderRadius: 3,
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
              <View style={mystyles.card}>
                <View
                  style={{
                    height: (wh * 5) / 100,
                    width: (ww * 85) / 100,
                    justifyContent: "center",
                    paddingLeft: "4%",
                  }}
                >
                  <View
                    style={{
                      color: "gray",
                      width: "45%",
                      height: "70%",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(40),
                      padding: ww && (wh * 0.5) / 100,
                      backgroundColor: "#f2f2f2",
                      borderRadius: 3,
                      color: "red",
                      textAlign: "center",
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    height: (wh * 0.1) / 100,
                    width: (ww * 81) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 2) / 100,
                  }}
                ></View>

                <View
                  style={{
                    height: (wh * 0.05) / 100,
                    width: (ww * 80) / 100,
                    backgroundColor: "transparent",
                    borderRadius: 100,
                    marginHorizontal: (ww * 1.5) / 100,
                  }}
                ></View>
                <View
                  style={{
                    height: (wh * 8) / 100,
                    width: (ww * 80) / 100,
                    flexDirection: "row",
                    // backgroundColor:'red'
                  }}
                >
                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 3.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(19),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 8) / 100,
                      width: (ww * 27) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1.4) / 100,
                        marginLeft: (ww * 2) / 100,
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      height: (wh * 7) / 100,
                      width: (ww * 28) / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "8%",
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "gray" }}></Text>
                    </Text>
                    <Text
                      style={{
                        marginTop: (wh * 1) / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                        backgroundColor: "#f2f2f2",
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "10%",
                        borderRadius: 3,
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          {wh / ww < 1.88 ? (
            <View>
              <AwesomeAlert
                show={show1}
                showProgress={false}
                title="⟳"
                message="Are you sure to move this project to current projects page bala?"
                // alertContainerStyle={{backgroundColor:'green'}}
                // overlayStyle={{backgroundColor:'red'}}
                // progressSize={2000}
                // progressColor={'red'}
                contentContainerStyle={[
                  stylesAlT.contentContainerStyle,
                  { height: (ww * 44) / 100 },
                ]}
                contentStyle={stylesAlT.contentStyle}
                actionContainerStyle={stylesAlT.actionContainerStyle}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                titleStyle={[
                  stylesAlT.titleStyle,
                  {
                    fontSize: ResponsiveScreen.fontSize(90),
                    fontWeight: "500",
                    marginTop: (wh * -4.5) / 100,
                  },
                ]}
                messageStyle={stylesAlT.messageStyle}
                cancelButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                confirmButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                cancelText="Accept"
                confirmText="Deny"
                confirmButtonColor="#192570"
                // confirmButtonColor="#f2ca30"
                cancelButtonColor="#f2ca30"
                cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                confirmButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                onCancelPressed={() => {
                  setState1(false);
                  setState2(true);
                  setRefresh(!refresh);
                  DONE(ID);
                  // console.log("delete")
                }}
                onConfirmPressed={() => {
                  setState1(false);
                }}
              />

              <AwesomeAlert
                show={show2}
                showProgress={false}
                title="✓"
                message={message}
                // message="Are you sure to move this project to current projects page2?"
                // alertContainerStyle={{backgroundColor:'green'}}
                // overlayStyle={{backgroundColor:'red'}}
                // progressSize={2000}
                // progressColor={'red'}
                contentContainerStyle={[
                  stylesAlT.contentContainerStyle,
                  { height: (ww * 42) / 100 },
                ]}
                contentStyle={stylesAlT.contentStyle}
                actionContainerStyle={stylesAlT.actionContainerStyle}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                titleStyle={[
                  stylesAlT.titleStyle,
                  { marginTop: (wh * -1.5) / 100 },
                ]}
                messageStyle={stylesAlT.messageStyle}
                cancelButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                confirmButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                cancelText="Current projects"
                confirmText="Stay here"
                confirmButtonColor="#192570"
                // confirmButtonColor="#f2ca30"
                cancelButtonColor="#f2ca30"
                cancelButtonTextStyle={[
                  stylesAlT.cancelButtonTextStyle,
                  { fontSize: ResponsiveScreen.fontSize(20) },
                ]}
                confirmButtonTextStyle={[
                  stylesAlT.cancelButtonTextStyle,
                  { fontSize: ResponsiveScreen.fontSize(20) },
                ]}
                onCancelPressed={() => {
                  setState2(false);
                  setRefresh(!refresh);
                  // DONE(ID);
                  // console.log("delete")
                  // itemclick(itemList.item)
                  navigation.navigate("OpenProject");
                }}
                onConfirmPressed={() => {
                  setState2(false);
                }}
              />
            </View>
          ) : (
            <View>
              <AwesomeAlert
                show={show1}
                showProgress={false}
                title="⟳"
                message="Are you sure to move this project to current projects page paiin?"
                // alertContainerStyle={{backgroundColor:'green'}}
                // overlayStyle={{backgroundColor:'red'}}
                // progressSize={2000}
                // progressColor={'red'}
                contentContainerStyle={stylesAlT.contentContainerStyle}
                contentStyle={stylesAlT.contentStyle}
                actionContainerStyle={stylesAlT.actionContainerStyle}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                titleStyle={[
                  stylesAlT.titleStyle,
                  {
                    fontSize: ResponsiveScreen.fontSize(90),
                    fontWeight: "500",
                    marginTop: (wh * -4.5) / 100,
                  },
                ]}
                messageStyle={stylesAlT.messageStyle}
                cancelButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                confirmButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                cancelText="Accept"
                confirmText="Deny"
                confirmButtonColor="#192570"
                // confirmButtonColor="#f2ca30"
                cancelButtonColor="#f2ca30"
                cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                confirmButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                onCancelPressed={() => {
                  setState1(false);
                  setState2(true);
                  setRefresh(!refresh);
                  DONE(ID);
                  // console.log("delete")
                }}
                onConfirmPressed={() => {
                  setState1(false);
                }}
              />

              <AwesomeAlert
                show={show2}
                showProgress={false}
                title="✓"
                message={message}
                // message="Are you sure to move this project to current projects page2?"
                // alertContainerStyle={{backgroundColor:'green'}}
                // overlayStyle={{backgroundColor:'red'}}
                // progressSize={2000}
                // progressColor={'red'}
                contentContainerStyle={stylesAlT.contentContainerStyle}
                contentStyle={stylesAlT.contentStyle}
                actionContainerStyle={stylesAlT.actionContainerStyle}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                titleStyle={[
                  stylesAlT.titleStyle,
                  { marginTop: (wh * -1.5) / 100 },
                ]}
                messageStyle={stylesAlT.messageStyle}
                cancelButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                confirmButtonStyle={[
                  stylesAlT.cancelButtonStyle,
                  { width: (ww * 30) / 100 },
                ]}
                cancelText="Current projects"
                confirmText="Stay here"
                confirmButtonColor="#192570"
                // confirmButtonColor="#f2ca30"
                cancelButtonColor="#f2ca30"
                cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                confirmButtonTextStyle={stylesAlT.cancelButtonTextStyle}
                onCancelPressed={() => {
                  setState2(false);
                  setRefresh(!refresh);
                  // DONE(ID);
                  // console.log("delete")
                  // itemclick(itemList.item)
                  navigation.navigate("OpenProject");
                }}
                onConfirmPressed={() => {
                  setState2(false);
                }}
              />
            </View>
          )}
        </View>

        {/* <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', width: ResponsiveScreen.normalize(650), marginTop: ResponsiveScreen.normalize(20), backgroundColor: 'white', borderRadius: ResponsiveScreen.normalize(50), elevation: 5, }}>
          <View style={{ padding: ResponsiveScreen.normalize(20), backgroundColor: '#f2ca30', borderRadius: ResponsiveScreen.normalize(50), width: ResponsiveScreen.normalize(170) }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: ResponsiveScreen.normalize(40), }}>+</Text>
          </View>
          <View style={{ padding: ResponsiveScreen.normalize(20), borderRadius: ResponsiveScreen.normalize(50), }}>
            <Text style={{ paddingRight: ResponsiveScreen.normalize(130), color: '#192570' }}> Add New Project </Text>
          </View>
        </TouchableOpacity> */}
      </View>
      <View style={{flex:.3}}></View>
     
      <View
        style={{
          height: (ww * 12) / 100,
          
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
            flex:1,
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
         
          <Text
            style={{
              alignSelf: "center",
              fontSize: ResponsiveScreen.fontSize(22),
              color: "#fff",
              marginTop: "-1%",
            }}
          >
            Current Project
          </Text>
        </TouchableOpacity>
        
        </View>
      {/* </View> */}
    </View>
  );
};

export default History;

const mystyles = StyleSheet.create({
  card: {
    fontFamily: "Roboto",
    marginTop: (wh * 2) / 100,
    width: (ww * 84) / 100,
    height: (wh * 13) / 100,
    // textAlign: "left",
    marginLeft: (ww * 8) / 100,
    marginBottom: (wh * 1) / 100,
    borderRadius: ResponsiveScreen.normalize(20),
    // elevation: 6,
    // backgroundColor: "gray",
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor: "black",
    // shadowOpacity:3,
    // shadowRadius: 3,
    elevation: 4,
    backgroundColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // alignItems:'stretch'
  },
});
export { mystyles };
