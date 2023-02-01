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
import { styles3 } from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { log } from "react-native-reanimated";
const wf = Dimensions.get("screen").fontScale;
// console.log(wf);
const ws = Dimensions.get("screen").scale;
// console.log(ws);
const wh = Dimensions.get("screen").height;
// console.log(wh);
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);

const OpenProject = (props) => {
  global.HANDSHAKE = "OpenProject";
  if(props.route.name==="OpenProject"){
    useEffect(() => {
      // console.log('back_______________________User-')
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true,)
      return () => backHandler.remove()
      // return () =>BackHandler.removeEventListener("hardwareBackPress", () => null);
    }, [])}
  // const route = useRoute();
  const tokenAuth = global.TOKEN;
  const navigation = useNavigation();

  // const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  const [dummy, setDummy] = useState([]);
  const [Aler, setAler] = useState('0');
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
          // global.HANDSHAKE = "OpenProject";
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
  setTimeout(() => setRefresh( !refresh), 3500)
  useEffect(
    () => {
      // let timeoutVariable;
      // if (refresh) {
        //   timeoutVariable = setTimeout(() => setRefresh(false), 1000);
        // }
        const tokenAuth = global.TOKEN;
        

axios({
        method: "get",
        url: "http://" + global.UURL + "/BIGADMIN/alertlistcont/"+global.OBJ.id,
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
          if (Response.status == "202") {
          global.NOTIF=Response.data.data.num;
          global.ALARM = true;
          // console.log(Response.data)
          }else{
            global.ALARM = false;
          }
         
        }).catch((e)=>{global.ALARM = false})

       




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
          // setRefresh(true);
        })

        .catch((error) => {
          console.log('salam')
          console.log(error.response)
          console.log('hame')
          // setTimeout(() => setRefresh(!refresh), 2500);
          // if(error.response.status == "0"){
            // global.HANDSHAKE = 'Users';
            navigation.navigate("HandShake");
            setTimeout(() => setRefresh(!refresh), 2500);
        //   }else{
        //     console.log('errorrrrrr')
        //     setTimeout(() => setRefresh(!refresh), 2500);
        // }
      });;

      // return () => clearTimeout(timeoutVariable);
    },
    [refresh]
    // []
  );

  const itemclick = (obj) => {
    global.PROJ = obj;
    global.PROJ.alarm = false;

    axios({
      method: "patch",
      url: "http://" + global.UURL + "/BIGADMIN/alarmdone/" + obj.id,
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
        (response) => setRefresh(true)
        // navigation.addListener('focus', () => {
        //   setRefresh(true)
        // })
      )
      // .then(console.log("salam"))
      .catch((error) => {
        if (error.response.status == "0") {
          // global.HANDSHAKE = "Bearing";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
    setRefresh(true);
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
        {/* <TouchableOpacity onPress={setAlert} >
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

      <View style={[styles3.butbox, { flex: 2,}]}>
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              width: ResponsiveScreen.normalize(720),
              //  backgroundColor: "orange"
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
                // backgroundColor: "#192570",
                borderRadius: (ww * 2) / 200,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {global.OBJ.company.length < 21 ?(
              <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(30),
                  color: "#575757",
                  fontWeight: "700",

                  // marginTop: wh * 2.5 / 100,
                  // marginLeft: ww * 5 / 100,
                  textAlign: "left",
                  // backgroundColor: 'pink'
                }}
              >
                {"   "}
                {global.OBJ.company}
                {"  "}
              </Text>
              ):(
                <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(30),
                  color: "#575757",
                  fontWeight: "700",

                  // marginTop: wh * 2.5 / 100,
                  // marginLeft: ww * 5 / 100,
                  textAlign: "left",
                  // backgroundColor: 'pink'
                }}
              >
                {"   "}
                {global.OBJ.company.slice(0,21)}...
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
                {"  "}Current Jobs{"  "}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: ResponsiveScreen.normalize(600),
              height: "80%",
              marginTop: ResponsiveScreen.normalize(50),
              // backgroundColor: 'pink'
            }}
          >
            <View style={{ height: "100%" }}>
              {Gray === false ? (
                <View style={{ flex: 1 }}>
                  {dummy == "" ? (
                    <View
                      style={{
                        position: "absolute",
                        width: (ww * 75) / 100,
                        height: (ww * 35) / 100,
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
                        You have no open Jobs...{" "}
                     
                       
                      </Text>
                    </View>
                  ) : (
                    <View style={{ flex: 1 }}>
                      <FlatList
                        data={dummy}
                        style={{ height: "100%" }}
                        renderItem={(itemList) => (
                          <TouchableOpacity
                            style={[
                              mystyles.card,
                              {
                                marginTop: ResponsiveScreen.normalize(5),
                                paddingHorizontal: "3%",
                              },
                            ]}
                            //   onPress={() => {props.navigation.navigate("Bearing",{token:tokenAuth});

                            //   {setPost};
                            //   // console.log(id_select)
                            // }}
                            // onPress={()=>{setSelect(itemList.item.id_number);setPost()}}>
                            onPress={() => {
                              itemList.item.alarm == false,
                                setRefresh(true),
                                itemclick(itemList.item);
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                width: ResponsiveScreen.normalize(550),
                                height: ResponsiveScreen.normalize(115),
                                // backgroundColor: 'red',
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <View style={{backgroundColor:'#fff',borderRadius:ww*1/100}}>
                                {itemList.item.name.length < 24 ? (
                                <Text
                                  style={[
                                    styles3.txtworkcard,
                                    {
                                      // color:'#575757',
                                      fontSize: ResponsiveScreen.fontSize(28),
                                      fontWeight: "600",

                                    },
                                  ]}
                                >
                                  {itemList.item.name}
                                </Text>
                                ):(
                                  <Text
                                  style={[
                                    styles3.txtworkcard,
                                    {
                                      // color:'#575757',
                                      fontSize: ResponsiveScreen.fontSize(28),
                                      fontWeight: "600",

                                    },
                                  ]}
                                >
                                  {itemList.item.name.slice(0,24)}...
                                </Text>
                                )}
                              </View>

                              <View
                                style={{
                                  justifyContent: "flex-start",
                                  alignSelf: "flex-start",
                                  // margin: "5%",
                                  // backgroundColor:'red',
                                  alignSelf:'center',
                                  marginRight:'8%'
                                  
                                }}
                              >
                                {itemList.item.alarm === true ? (
                                  <FontAwesome
                                    name="bell"
                                    size={ResponsiveScreen.fontSize(35)}
                                    color="#f2ca30"
                                    style={{
                                      fontWeight: "bold",
                                      // alignSelf:'flex-end',
                                      // marginLeft:
                                      //   ResponsiveScreen.normalize(150),
                                      // marginTop: ResponsiveScreen.normalize(40),
                                    }}
                                  />
                                ) : (
                                  <Text></Text>
                                )}
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  )}
                </View>
              ) : (
                <View style={{ height: ResponsiveScreen.normalize(800) }}>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                  <View
                    style={[
                      mystyles.card,
                      {
                        marginTop: ResponsiveScreen.normalize(5),
                        shadowColor: "#999",
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: ResponsiveScreen.normalize(550),
                        height: ResponsiveScreen.normalize(115),
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "45%", paddingLeft: "5%" }}>
                        <View
                          style={[
                            styles3.txtworkcard,
                            {
                              fontSize: ResponsiveScreen.fontSize(28),
                              fontWeight: "600",
                              width: "100%",
                              height: "30%",
                              borderRadius: 5,
                              backgroundColor: "#f2f2f2",
                            },
                          ]}
                        ></View>
                      </View>

                      <View></View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: (ww * 12) / 100,
          // height: wh * 16 / 100,
          flexDirection: "row",
          width: (ww * 90) / 100,
          position: "absolute",
          borderRadius: ((ww + wh) * 2) / 200,
          bottom: "2%",
          backgroundColor: "#192570",
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
          onPress={() => History()}
        >
          <View style={{ alignItems: "center" }}>
            <MaterialIcons
              name="history"
              size={ResponsiveScreen.fontSize(39)}
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
            History
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: (ww * 75) / 100,
            marginLeft: (ww * 3) / 100,
            backgroundColor: "white",
            borderRadius: ResponsiveScreen.normalize(50),
            elevation: 5,
          }}
          onPress={() => UserEdit()}
        >
          <View
            style={{
              padding: wh && (ww * 1.2) / 100,
              backgroundColor: "#f2ca30",
              borderRadius: ResponsiveScreen.normalize(50),
              width: (ww * 20) / 100,
            }}
          >
    
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="account-edit"
                size={24}
                color="#fff"
              />
            </View>
          </View>
          <View
            style={{
              borderRadius: ResponsiveScreen.normalize(50),
              alignItems: "center",
              // backgroundColor:'red'
            }}
          >
            <Text
              style={{
                paddingRight: (ww * 20) / 100,
                paddingTop: (wh * 1) / 100,
                color: "#192570",
                fontSize: ResponsiveScreen.fontSize(25),
              }}
            >
              Edit User Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: (ww * 75) / 100,
            marginTop: (wh * 1) / 100,
            marginLeft: (ww * 3) / 100,
            backgroundColor: "white",
            borderRadius: ResponsiveScreen.normalize(50),
            elevation: 5,
          }}
          onPress={() => ProjectCreate()}
        >
          <View
            style={{
              padding: wh && (ww * 1.2) / 100,
              backgroundColor: "#f2ca30",
              borderRadius: ResponsiveScreen.normalize(50),
              width: (ww * 20) / 100,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FontAwesome name="gears" size={24} color="#fff" />
            </View>
          </View>
          <View
            style={{
              borderRadius: ResponsiveScreen.normalize(50),
            }}
          >
            <Text
              style={{
                paddingRight: (ww * 17) / 100,
                paddingTop: (wh * 1) / 100,
                color: "#192570",
                fontSize: ResponsiveScreen.fontSize(25),
              }}
            >
              Create New project
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: (ww * 75) / 100,
            marginTop: (wh * 1) / 100,
            marginLeft: (ww * 3) / 100,
            backgroundColor: "white",
            borderRadius: ResponsiveScreen.normalize(50),
            elevation: 5,
          }}
          onPress={() => History()}
        >
          <View
            style={{
              padding: wh && (ww * 1.2) / 100,
              backgroundColor: "#f2ca30",
              borderRadius: ResponsiveScreen.normalize(50),
              width: (ww * 20) / 100,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <MaterialIcons name="history" size={24} color="#fff" />
     
            </View>
          </View>
          <View
            style={{
              borderRadius: ResponsiveScreen.normalize(50),
            }}
          >
            <Text
              style={{
                paddingRight: (ww * 29) / 100,
                paddingTop: (wh * 1) / 100,
                color: "#192570",
                fontSize: ResponsiveScreen.fontSize(25),
              }}
            >
              History
            </Text>
          </View>
        </TouchableOpacity> */}
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
