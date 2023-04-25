import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import { Camera } from "expo-camera";
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
  ScrollView,
  Dimensions,
  BackHandler,
  KeyboardAvoidingView,
} from "react-native";
import {
  styles,
  styles2,
  btn,
  styles3,
  stylesAlF,
  stylesAlT,
} from "./styleSheets3";

// import { ListItem } from "@rneui/base";

// import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

import Lightbox from "react-native-lightbox-v2";

const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

const DocAlbum = (props) => {
  global.HANDSHAKE = "NotePad";
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  const yourRef = useRef(null);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);
  const [ADD, setADD] = useState("cc");
  const tokenAuth = global.TOKEN;
  const setPost = () => {
    props.navigation.navigate("Bearing", { token: tokenAuth });
  };
  const setDPost = () => {
    props.navigation.navigate("DocAlbum", { token: tokenAuth });
  };
  const setAPost = () => {
    props.navigation.navigate("PhotoAlbum");
  };
  const obj = global.PROJ;
  const navigation = useNavigation();
  const [dummy, setDummy] = useState("");
  const [Des, setDes] = useState("");
  const onDeChange = (textValue) => {
    setDes(textValue);
  };
  const [DesC, setDesC] = useState("");
  const onDeCChange = (textValue) => {
    setDesC(textValue);
  };
  //   const DONE = (id) => {
  //     // setState1(false)
  //     // const obj = global.OBJ;

  //     axios({
  //       method: "post",
  //       url: "http://" + global.UURL + "/BIGADMIN/comment/",
  //       // params:{
  //       //   email:email,
  //       // },
  //       headers: {
  //         // 'Content-Type': "application/json",
  //         Authorization: "Token " + global.TOKEN,
  //         // 'Accept': 'application/json'
  //       },
  //       data: {
  //         comment: DesC,
  //         project: obj.id,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.data) {
  //           console.log("salammmmmmmmmmmmmmmmmmmmmmmm");

  //           // setADD(false);
  //         }
  //       })
  //       // navigation.addListener('focus', () => {
  //       //   setRefresh(true)
  //       // }))
  //       // .then((response) => (console.log(EF))
  //       // .then(console.log(EF))
  //       // .catch((error) => console.log(error));

  //       .catch((error) => {
  //         if (error.response.status == "0") {
  //           // global.HANDSHAKE = 'History';
  //           navigation.navigate("HandShake");
  //         } else {
  //           // setState(true)
  //           console.log(error);
  //           console.log("Odafezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  //         }
  //       });
  //   };
  //   const Edit = (id) => {
  //     // setState1(false)
  //     // const obj = global.OBJ;

  //     axios({
  //       method: "PUT",
  //       url: "http://" + global.UURL + "/BIGADMIN/commentedit/" + id,
  //       // params:{
  //       //   email:email,
  //       // },
  //       headers: {
  //         // 'Content-Type': "application/json",
  //         Authorization: "Token " + global.TOKEN,
  //         // 'Accept': 'application/json'
  //       },
  //       data: {
  //         comment: Des,
  //         project: id,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.data) {
  //           console.log("salammmmmmmmmmmmmmmmmmmmmmmm");
  //           setADD("cc");
  //         }
  //       })
  //       // navigation.addListener('focus', () => {
  //       //   setRefresh(true)
  //       // }))
  //       // .then((response) => (console.log(EF))
  //       // .then(console.log(EF))
  //       // .catch((error) => console.log(error));

  //       .catch((error) => {
  //         if (error.response.status == "0") {
  //           // global.HANDSHAKE = 'History';
  //           navigation.navigate("HandShake");
  //         } else {
  //           // setState(true)
  //           console.log(error);
  //           console.log("Odafezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  //         }
  //       });
  //   };
  //   const Delete = (id) => {
  //     // setState1(false)
  //     // const obj = global.OBJ;

  //     axios({
  //       method: "delete",
  //       url: "http://" + global.UURL + "/BIGADMIN/commentedit/" + id,
  //       // params:{
  //       //   email:email,
  //       // },
  //       headers: {
  //         // 'Content-Type': "application/json",
  //         Authorization: "Token " + global.TOKEN,
  //         // 'Accept': 'application/json'
  //       },
  //       data: {
  //         comment: Des,
  //         project: id,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.data) {
  //           console.log("salammmmmmmmmmmmmmmmmmmmmmmm");
  //           setADD("cc");
  //         }
  //       })
  //       // navigation.addListener('focus', () => {
  //       //   setRefresh(true)
  //       // }))
  //       // .then((response) => (console.log(EF))
  //       // .then(console.log(EF))
  //       // .catch((error) => console.log(error));

  //       .catch((error) => {
  //         if (error.response.status == "0") {
  //           // global.HANDSHAKE = 'History';
  //           navigation.navigate("HandShake");
  //         } else {
  //           // setState(true)
  //           console.log(error);
  //           console.log("Odafezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  //         }
  //       });
  //   };
  const [internetCheck, setInternetCheck] = useState(0);
  useEffect(() => {
    axios({
      method: "get",
      url:global.UURL + "/BIGADMIN/listcom/" + obj.id,
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token " + tokenAuth,
        // 'Accept': 'application/json'
      },
    })
      .then((response) => {
        // dummy = [response.data,{"project":"-1"}]
        setDummy(response.data);
        setInternetCheck(internetCheck + 1);
        // setDummy(dummy[0].);
        // console.log(dummy);
      })

      .catch((error) => console.log(error));
  }, [internetCheck]);

  return (
    <View style={styles3.page}>
      <View style={[styles3.topbox, { flex: 1, alignItems: "flex-end" }]}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={[styles3.logo, { height: (wh * 7) / 100 }]}
        />
        <TouchableOpacity
          style={{ marginBottom: (ww * 3) / 100 }}
          onPress={() => {
            navigation.openDrawer({ token: tokenAuth });
          }}
        >
          <Ionicons
            name="ios-menu-sharp"
            size={ResponsiveScreen.fontSize(60)}
            color="black"
            style={{
              marginTop: wh * (1 / 100),
              marginRight: (ww * 4) / 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles3.butbox, { flex: 7, marginTop: (wh * 4) / 100 }]}>
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              marginTop: (wh * 10) / 100,
              // backgroundColor: "green",
              height: "85%",
              // width:ww*60/100
            },
          ]}
        >
          <View
            style={{
              width: (ww * 100) / 100,
              borderRadius: 20,
              height: (wh * 10) / 100,
              // backgroundColor: 'blue',
              alignItems: "center",
            }}
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
                >
                  {"  "}
                  {global.OBJ.company_name}
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
                  {"   "}Message board{"   "}
                  {/* sdas sssssssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaav */}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: "1.5%",
                width: "85%",
                height: (ww * 8) / 100,
                paddingHorizontal: "0.8%",
                borderRadius: (ww * 4) / 200,
                flexDirection: "row",
                // marginRight:'-3%',
                alignItems: "center",
                alignSelf: "center",
                // backgroundColor: "#fff",
                justifyContent: "space-between",
                borderColor: "#f2ca30",
                borderWidth: 0.5,
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
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: (ww * 2) / 200,
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: (ww * 2) / 200,
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
                    {/* salam */}
                    {"  "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: (ww * 82.7) / 100,
              // height: (ww * 115) / 100,
              // height: "80%",
              // flex:1,
              // position: "absolute",
              // left: 0,
              // top: (ww * 43) / 100,
              // paddingLeft: "3.5%",
              // backgroundColor: "red",
              // alignItems:'center'
            }}
          >
            <View
              style={{
                width: (ww * 82.7) / 100,
                // // height: (ww * 115) / 100,
                height: "100%",
                // // flex:1,
                // position: "absolute",
                // left: 0,
                // top: (ww * 43) / 100,
                // paddingLeft: "3.5%",
                //   backgroundColor: "blue",
                alignItems: "center",
              }}
            >
              {/* <ScrollView>
                <View style={{backgroundColor:'pink',width:'100%',alignItems:'center',alignSelf:'center'}}>

                

                </View>
                
              </ScrollView> */}
              <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={150}
              >
                <FlatList
                  // ref={yourRef}
                  // onContentSizeChange={() => yourRef.current.scrollToEnd() }
                  // onLayout={() => yourRef.current.scrollToEnd() }
                  removeClippedSubviews={false}
                  style={{
                    // width: ww * 100 / 100,
                    // paddingHorizontal: (ww * 0) / 100,
                    // height: wh * 100 / 100,
                    // flex: 1,
                    height: "80%",
                    width: (ww * 80) / 100,
                    flexDirection: "column",
                    // backgroundColor: "blue",
                    marginLeft: "-2.5%",
                    marginBottom: "10%",
                  }}
                  data={dummy}
                  renderItem={(itemList) => (
                    <View style={{ width: "95%" }}>
                      <TouchableOpacity
                        //   onLongPress={() => {
                        //     setADD(String(itemList.item.id));

                        //     console.log(itemList.item.comment),
                        //     setDes(itemList.item.comment);
                        //   }}
                        style={{
                          backgroundColor: "#f6f6f6",
                          marginBottom: "4%",
                          width: "97%",
                          // marginLeft: "6%",
                          borderRadius: 10,
                          // flexDirection:'row'
                        }}
                        //   delayLongPress={50}
                      >
                        {/* <View style={{ height: "90%", width: (ww * 70) / 100 }}> */}
                        <View
                         style={{
                          alignSelf: "flex-start",
                          // backgroundColor: "red",
                          width:'100%',
                          paddingTop: (wh * 1) / 100,
                          // textAlignVertical: "top",
                          // paddingLeft: wh && (ww * 5) / 100,
                          paddingRight: wh && (ww * 5) / 100,
                          flexDirection:'row',
                          justifyContent:'space-between',
                          padding: wh && (ww * 1.4) / 100,
                          
                          // fontSize: ResponsiveScreen.fontSize(25),
                        }}>
                          <Image
                    source={require("../assets/iconcl.png")}
                    style={{
                      alignSelf:'center',
                      width:ww*10/100,
                      height: ww*10/100,
                      resizeMode: 'cover',
                    }}
                  />
                          <Text  style={{
                            alignSelf:'center',
                            color: "#575757",
                            // paddingTop: (wh * 1) / 100,
                            textAlignVertical: "top",
                            fontWeight:'600',
                            marginLeft:"-10%",

                            // padding: wh && (ww * 1.4) / 100,
                            fontSize: ResponsiveScreen.fontSize(25),
                          }}>E-novation Admin </Text>
                        <Text
                          style={{
                            alignSelf:'center',
                            color: "#575757",
                            // paddingTop: (wh * 1) / 100,
                            textAlignVertical: "top",
                            // paddingLeft: wh && (ww * 5) / 100,

                            // padding: wh && (ww * 1.4) / 100,
                            fontSize: ResponsiveScreen.fontSize(25),
                          }}
                        >
                          {(itemList.item.after_time).slice(8,)}/{(itemList.item.after_time).slice(5,7)}/{(itemList.item.after_time).slice(0,4)}
                        </Text>
                        </View>
                        <Text
                          multiline={true}
                          // onChangeText={onDeChange}
                          style={{
                            // height: "100%",
                            // width: "100%",
                            color: "#575757",
                            paddingTop: (wh * 1) / 100,
                            textAlignVertical: "top",
                            paddingLeft: wh && (ww * 5) / 100,

                            padding: wh && (ww * 1.4) / 100,
                            fontSize: ResponsiveScreen.fontSize(25),
                          }}
                        >
                          {itemList.item.comment}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
                {/* <View style={{height:ww*10/100}}></View> */}
              </KeyboardAvoidingView>
            </View>
          </View>
          <View
            style={{
              height: (ww * 11) / 100,
              // height: wh * 16 / 100,
              flexDirection: "row",
              width: (ww * 90) / 100,
              position: "absolute",
              borderRadius: ((ww + wh) * 2) / 200,
              bottom: "-3%",
              backgroundColor: "#192570",

              left: "5%",
              justifyContent: "center",
              zIndex: 9999,
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
              onPress={() => {
                props.navigation.navigate("Bearing");
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Entypo
                  name="back"
                  size={ResponsiveScreen.fontSize(40)}
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
                Back to progress
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {wh / ww > 1.85 ? (
          <View
            style={{
              // backgroundColor: 'black'
              position: "absolute",
              right: -4,
              top: (wh * 15) / 100,
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
              <TouchableOpacity style={styles3.barbut22} onPress={setPost}>
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        color: "#222",
                        marginTop: ResponsiveScreen.normalize(170),
                        marginLeft: ResponsiveScreen.normalize(-66),
                      },
                    ]}
                  >
                    Job Progress
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
          </View>
        ) : (
          <View
            style={{
              //   backgroundColor: 'black',
              position: "absolute",
              right: -4,
              top: (wh * 17) / 100,
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
                onPress={setPost}
              >
                <View>
                  <Text
                    style={[
                      styles3.bartxt,
                      {
                        color: "#222",
                        marginTop: ResponsiveScreen.normalize(170),
                        marginLeft: ResponsiveScreen.normalize(-66),
                      },
                    ]}
                  >
                    Job Progress
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
    </View>
  );
};

export default DocAlbum;

const mystyles = StyleSheet.create({
  Text: {
    color: "white",
    textAlign: "center",
    fontSize: ResponsiveScreen.fontSize(35),
    // backgroundColor: 'gray'
  },
  TouchableOpacity: {
    position: "absolute",
    bottom: (wh * 2) / 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: ResponsiveScreen.normalize(550),
    // marginTop: ResponsiveScreen.normalize(35),
    // marginLeft: ww * 9 / 100,
    backgroundColor: "#fff",
    borderRadius: ResponsiveScreen.normalize(50),
    elevation: 3,
    // backgroundColor: 'gray'
  },
  TouchableOpacityView: {
    padding: ResponsiveScreen.normalize(12),
    borderRadius: ResponsiveScreen.normalize(50),
    // backgroundColor: 'gray'
  },
});
export { mystyles };
