import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";
// import Slider from "react-native-slider";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  Foundation,
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
// import { styles3, styles2, btn } from "./styleSheets.js";
import { styles2, btn, styles3, stylesAlF, stylesAlT } from "./styleSheets3";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { log } from "react-native-reanimated";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
const Bearing = (props) => {
  // const PPOBJ=""
  // console.log(navigation)
  global.HANDSHAKE = "Bearing";
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => navigation.goBack())
  //   return () => backHandler.remove()
  // }, [])
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
  const [EF, setEF] = useState("0");
  const [Ho, setHo] = useState(false);

  const [POBJ, setPOBJ] = useState("");
  // console.log(
  //   "kkkkkkkkkkkffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  // );
  const obj = global.PROJ;
  const sd = Number(POBJ.state);
  global.HANDSHAKE = "Bearing";
  // const mm = Number(global.PROJ.status);
  // const ss=(Number({sd}))
  // console.log(obj.status);
  // console.log("lllllllll");
  // const [email, setEmail] = useState("");
  const [id_select, setSelect] = useState("");
  // console.log(tokenAuth)
  // console.log(obj[0][0])
  const tokenAuth = global.TOKEN;
  const [mstate, setMState] = useState({ vale: Number(global.PROJ.state) });

  // console.log("88888888888888888888888");
  // console.log(mstate);
  // console.log("999999999999999999999");
  // const { navigation } = props;
  const [state8, setState8] = useState(false);

  const [state, setState] = useState({
    vale: Number(global.PROJ.state),
    // vale: 1
    // vale: 0.089
  });
  const [myc, setCSS] = useState(String(global.PROJ.state));
  const [Start, setStart] = useState(Number(myc));
  const [End, setEnd] = useState(Number(7));

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
  const Note = () => {
    props.navigation.navigate("NotePad");
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
  const setDPost = () => {
    props.navigation.navigate("DocAlbum");
  };
  const nextState = (SS) => {
    // props.navigation.navigate("DocAlbum");
    console.log("nexteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    // let i = (End - Start)
    // let i = 0
    // console.log(SS);

    // // let j = (End - Start)
    // // console.log(j)
 
    //   // console.log(i)
  
    //     axios({
    //       method: "patch",
    //       url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
    //       // params:{
    //       //   email:email,
    //       // },
    //       headers: {
    //         // 'Content-Type': "application/json",
    //         Authorization: "Token " + tokenAuth,
    //         // 'Accept': 'application/json'
    //       },
    //       data: {
    //         state:SS,
    //         next: false,
    //         revert: false,
    //         done: false,
            
    //       },
    //     })
    //       // .then((response) => setTimeout(() => setEF(EF - 1), 20000))
    //       // .then((response) => setEF(EF - 1))

    //       // .then(console.log(EF))
    //       .then((response) => {
    //         console.log(response.status)
    //         if (response.status != "200") {
    //           // global.HANDSHAKE = "Bearing";
    //           navigation.navigate("HandShake");
    //         }
    //       })
    //       .catch((error) => {
    //         if (error.response.status == "0") {
    //           // global.HANDSHAKE = "Bearing";
    //           navigation.navigate("HandShake");
    //         } else {
    //           console.log(error);
    //         }
    //       });
  

    // }});

    // };
  };
  // const prvState = () => {
  //   // props.navigation.navigate("DocAlbum");
  //   console.log("prvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
  //   // let i = (Start - End)
  //   // let i = 0
  //   console.log(Start);
  //   console.log(End);
  //   console.log(Start - End);
  //   // let j = (Start - End)
  //   // console.log(j)

  //   for (let i = Start - End; i > 0; i--) {
  //     // console.log(i)
  //     setTimeout(() => {
  //       axios({
  //         method: "patch",
  //         url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
  //         // params:{
  //         //   email:email,
  //         // },
  //         headers: {
  //           // 'Content-Type': "application/json",
  //           Authorization: "Token " + tokenAuth,
  //           // 'Accept': 'application/json'
  //         },
  //         data: {
  //           next: false,
  //           revert: true,
  //           done: false,
  //         },
  //       })
  //         // .then((response) => setTimeout(() => setEF(EF + 1), 20000))
  //         .then((response) => {
  //           if (response.status != "200") {
  //             // global.HANDSHAKE = "Bearing";
  //             navigation.navigate("HandShake");
  //           }
  //         })
  //         .then(console.log(EF))
  //         .catch((error) => {
  //           if (error.response.status == "0") {
  //             // global.HANDSHAKE = "Bearing";
  //             navigation.navigate("HandShake");
  //           } else {
  //             console.log(error);
  //           }
  //         });
  //     }, 500);
  //   }

  //   // };
  // };

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
      // setEnd(Number(1));
    } else if (val < 2) {
      setCSS("2");
      console.log("state 2");
      // setEnd(Number(2));
    }

    else if (val < 3) {
      setCSS("3");
      console.log("state 3");
      // setEnd(Number(3));
    }

    else if (val < 4) {
      setCSS("4");
      console.log("state 4");
      // setEnd(Number(4));
    }

    else if (val < 5) {
      setCSS("5");
      console.log("state 5");
      // setEnd(Number(5));
    }

    else if (val < 6) {
      setCSS("6");
      console.log("state 6");
      // setEnd(Number(6));
    }

    else if (val < 7) {
    
      setCSS("7");
      console.log("state 7");
      // setEnd(Number(7));
    }
    else if (val < 8) {
    
      setCSS("8");
      console.log("state 8");
      // setEnd(Number(7));
    }
    else{
    
      setCSS("9");
      console.log("state 9");
      // setEnd(Number(7));
    }

  };

  const SC = (val) => {
    setState8(true);
    if (val < 1) {
      console.log("SC state 1");
      setState({ vale: 0.714 });
      nextState(1);
    } else if (val < 2) {
      console.log("SC state 2");
      setState({ vale: 1.70 });
      nextState(2);
    } else if (val < 3) {
      console.log("SC state 3");
      setState({ vale: 2.70 });
      nextState(3);
    } else if (val < 4) {
      console.log("SC state 4");
      setState({ vale: 3.75 });
      nextState(4);
    } else if (val < 5) {
      console.log("SC state 5");
      setState({ vale: 4.80 });
      nextState(5);
    } else if (val < 6) {
      console.log("SC state 6");
      setState({ vale: 5.9 });
      nextState(6);
    } else if (val < 7) {
      console.log("SC state 7");
      setState({ vale: 6.9 });
      nextState(7);
    } else if (val < 8) {
      console.log("SC state 8");
      setState({ vale: 7.87 });
      nextState(8);
    } else if (val < 9) {
      console.log("SC state 9");
      setState({ vale: 9 });
      nextState(9);
    } 
    
  };

  // const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    if (global.PROJ.state === "1") {
      setState({ vale: Number(global.PROJ.state) - 0.32 });
      setCSS("1");
    } else if (global.PROJ.state === "2") {
      setState({ vale: Number(global.PROJ.state) - 0.27 });
      setCSS("2");
    } else if (global.PROJ.state === "3") {
      setState({ vale: Number(global.PROJ.state) - 0.21 });
      setCSS("3");
    } else if (global.PROJ.state === "4") {
      setState({ vale: Number(global.PROJ.state) - 0.15 });
      setCSS("4");
    } else if (global.PROJ.state === "5") {
      setState({ vale: Number(global.PROJ.state) - 0.08 });
      setCSS("5");
    } else if (global.PROJ.state === "6") {
      setState({ vale: Number(global.PROJ.state) - 0.04 });
      setCSS("6");
    } else if (global.PROJ.state === "7") {
      setState({ vale: Number(global.PROJ.state) });
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

    axios({
      method: "get",
      url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
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
        // navigation.addListener('focus', () => {
        //   setRefresh(true)
        // })
      )
      .then(console.log("salam"))
      .catch((error) => {
        if (error.response.status == "0") {
          // global.HANDSHAKE = "Bearing";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
  }, [EF]);
  // return () => clearTimeout(timeoutVariable)
  // },
  // [refresh]
  // []
  // );
  // state = {
  //   value: 0.2
  // };
  return (
    <View style={[styles3.page, {}]}>
      <AwesomeAlert
        show={state8}
        showProgress={false}
        title="✓"
        message="Job state updated!"
        // alertContainerStyle={{backgroundColor:'green'}}
        // overlayStyle={{backgroundColor:'red'}}
        // progressSize={2000}
        // progressColor={'red'}
        contentContainerStyle={stylesAlT.contentContainerStyle}
        contentStyle={stylesAlT.contentStyle}
        actionContainerStyle={stylesAlT.actionContainerStyle}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={false}
        titleStyle={stylesAlT.titleStyle}
        messageStyle={stylesAlT.messageStyle}
        cancelButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
        confirmButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
        cancelText="    Ok    "
        confirmText="cancel"
        confirmButtonColor="#192570"
        cancelButtonColor="#f2ca30"
        cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
        onCancelPressed={() => {
          // setState(false);
          setState8(false);
          setHo(false);
          // setEF(EF + 1)
          // AcseptAlert();
          // console.log("delete")
        }}
        onConfirmPressed={() => {
          setState8(false);
        }}
      />
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={"dark-content"}
        translucent={true}
        hidden={false}
      />

      <View style={[styles3.topbox, { flex: 2 }]}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={[styles3.logo, { height: (wh * 7) / 100 }]}
        />
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
              marginTop: wh * (1 / 100),
              marginRight: (ww * 4) / 100,
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
                  {"   "}Job Progress{"   "}
                  {/* sdas sssssssssssssssssssss aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaav */}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: "-4%",
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
                borderRadius: (ww * 2) / 200,
                alignItems: "flex-start",
                justifyContent: "center",
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
            </View>
          </View>

          <View style={{ width: ww, height: "75%", marginTop: "2.5%" }}>
            <View
              style={{
                flex: 1,
                // width: ResponsiveScreen.normalize(600),
                // height: ResponsiveScreen.normalize(1000),
                borderRadius: 20,
                flexDirection: "row",
                // backgroundColor: "pink"
              }}
            >
              {/* /// --------------------------------------cart----------------------- /// */}

            
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                 
                    <View
                      style={{
                        // width: ResponsiveScreen.normalize(620),
                        // height: ,
                        flex:1,
                        borderRadius: ResponsiveScreen.normalize(100),
                        // backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        marginHorizontal: ResponsiveScreen.normalize(-20),
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <View style={[styles3.container,{height:'100%'}]}>
                          <Slider
                            disabled={true}
                            style={{
                              width: ResponsiveScreen.normalize(1000),
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
                            maximumValue={9}
                            vertical={true}
                            // step={0.143}
                            step={0.0}
                            // thumbTintColor={'red'}
                            thumbTintColor={"transparent"}
                            // value={Number(global.PROJ.status)}
                            value={state.vale}
                            useNativeDriver={true}
                            // onValueChange={value =>{setState({ value }),console.log(value)}}
                            onValueChange={(value) => SK(value)}
                            onSlidingComplete={(value) => SC(value)}
                            // onSlidingStart={(value) => setStart(Number(myc))}
                          />
                        </View>
                      </View>
                      {myc === '1' ?(
                      <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/12.png")}
                                  style={[styles3.state, {height:ww*11/100,width:ww*11/100, }]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/21.png")}
                                  style={[styles3.state, { }]}
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
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/31.png")}
                                  style={[styles3.state, { }]}
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
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/41.png")}
                                  style={[styles3.state, { }]}
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
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/51.png")}
                                  style={[styles3.state, { }]}
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
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/61.png")}
                                  style={[styles3.state, { }]}
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
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '2' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              marginBottom: 0,
                              backgroundColor: "#fff",
                              // width: ResponsiveScreen.normalize(505),
                              // marginLeft: "-6%",
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, {}]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
                            </Text>
                          </View>
                        </TouchableOpacity>


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
                            }}
                          >
                               <Image
                                  source={require("../assets/ens/22.png")}
                                  style={[styles3.state, {width:ww*11/100,height:ww*11/100 }]}
                                />
                          </View>
                          <View>
                            <Text
                            style={[
                              styles3.txtworkcard,
                              {
                                color: "#fff",
                                fontWeight: "900",
                                fontSize: ResponsiveScreen.fontSize(25),
                              },
                            ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/31.png")}
                                  style={[styles3.state, { }]}
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
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/41.png")}
                                  style={[styles3.state, { }]}
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
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/51.png")}
                                  style={[styles3.state, { }]}
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
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/61.png")}
                                  style={[styles3.state, { }]}
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
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '3' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                              marginBottom: 0,
                              backgroundColor: "#fff",
                              // width: ResponsiveScreen.normalize(505),
                              // marginLeft: "-6%",
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, { }]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/32.png")}
                                  style={[styles3.state, { width:ww*11/100,height:ww*11/100}]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/41.png")}
                                  style={[styles3.state, { }]}
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
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/51.png")}
                                  style={[styles3.state, { }]}
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
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/61.png")}
                                  style={[styles3.state, { }]}
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
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '4' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                       
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, {}]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/42.png")}
                                  style={[styles3.state, {height:ww*11/100,width:ww*11/100, }]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/51.png")}
                                  style={[styles3.state, { }]}
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
                        <TouchableOpacity style={[styles3.workcard, {}]}>
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: ResponsiveScreen.normalize(25),
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/61.png")}
                                  style={[styles3.state, { }]}
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
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '5' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                             
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, {}]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/43.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Machining
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/52.png")}
                                  style={[styles3.state, { height:ww*11/100,width:ww*11/100,}]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
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
                            <Image
                                  source={require("../assets/ens/61.png")}
                                  style={[styles3.state, { }]}
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
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '6' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                            
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, { }]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/43.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/53.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/62.png")}
                                  style={[styles3.state, { height:ww*10/100,width:ww*10/100,}]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/71.png")}
                                  style={[styles3.state, { }]}
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
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '7' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                           
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, { }]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/43.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/53.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
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
                            <Image
                                  source={require("../assets/ens/63.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Quality Control
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                            <Image
                                  source={require("../assets/ens/72.png")}
                                  style={[styles3.state, { height:ww*11/100,width:ww*11/100,}]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/81.png")}
                                  style={[styles3.state, { }]}
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
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):myc === '8' ?(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                      
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, { }]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/43.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/53.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
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
                            <Image
                                  source={require("../assets/ens/63.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/73.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Packaging
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                           <Image
                                  source={require("../assets/ens/82.png")}
                                  style={[styles3.state, { height:ww*11/100,width:ww*11/100,}]}
                                />
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Ready for Delivery
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
                           <Image
                                  source={require("../assets/ens/91.png")}
                                  style={[styles3.state, { }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
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
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      ):(
                        <View
                        style={{ flexDirection: "column-reverse", flex: 4,height:'100%',justifyContent:'space-between' }}
                      >
                        <TouchableOpacity
                          style={[
                            styles3.workcard,
                            {
                             
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
                            {/* <Foundation
                              name="clipboard-pencil"
                              size={ResponsiveScreen.normalize(57)}
                              color="#f2ca30"
                            /> */}
                             <Image
                                  source={require("../assets/ens/13.png")}
                                  style={[styles3.state, {}]}
                                />
         
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                  // fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Engineering/Designing{"\n"}/Drafting
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
                               <Image
                                  source={require("../assets/ens/23.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Material Supply
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
                          {/* <MaterialCommunityIcons
                              name="scissors-cutting"
                              size={ResponsiveScreen.normalize(60)}
                              color="#bfbfbf"
                            /> */}
                             <Image
                                  source={require("../assets/ens/33.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Cutting
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
                             {/* <MaterialCommunityIcons
                              name="tools"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/43.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Machining
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
                            {/* <FontAwesome5
                              name="paint-roller"
                              size={ResponsiveScreen.normalize(55)}
                              color="#bfbfbf"
                            /> */}
                            <Image
                                  source={require("../assets/ens/53.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Heat treatment/Coating{"\n"}/Painting or Plating
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
                            <Image
                                  source={require("../assets/ens/63.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Quality Control
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
                            <Image
                                  source={require("../assets/ens/73.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Packaging
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
                           <Image
                                  source={require("../assets/ens/83.png")}
                                  style={[styles3.state, { }]}
                                />
                          </View>
                          <View>
                            <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#000",
                                },
                              ]}
                            >
                              Ready for Delivery
                            </Text>
                          </View>
                        </TouchableOpacity>
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
                            }}
                          >
                           <Image
                                  source={require("../assets/ens/92.png")}
                                  style={[styles3.state, {height:ww*11/100,width:ww*11/100, }]}
                                />
                            {/* <FontAwesome5 name="file-invoice-dollar" size={24} color="black" /> */}
                          </View>
                          <View>
                          <Text
                              style={[
                                styles3.txtworkcard,
                                {
                                  color: "#fff",
                                  fontWeight: "900",
                                  fontSize: ResponsiveScreen.fontSize(25),
                                },
                              ]}
                            >
                              Invoicing
                            </Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                      )}
                    </View>
             
                </View>
         
               

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
      <View
        style={{
          height: (ww * 11) / 100,
          // height: wh * 16 / 100,
          flexDirection: "row",
          width: (ww * 90) / 100,
          position: "absolute",
          borderRadius: ((ww + wh) * 2) / 200,
          bottom: "2%",
          backgroundColor: "#192570",
          // paddingVertical:'3%',
          justifyContent: "center",
        }}
      >
        {/* <TouchableOpacity
          style={{
            // width: "33.3%",
            // height: "100%",
            flex: 1,
            backgroundColor: "#f2ca30",
            borderTopLeftRadius: ((ww + wh) * 2) / 200,
            borderBottomLeftRadius: ((ww + wh) * 2) / 200,
            justifyContent: "center",
            
          }}
          onPress={() => EDIT()}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="information-circle-outline"
              size={ResponsiveScreen.fontSize(43)}
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
            {" "}
            Jobs info
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#fff",
            width: 1,
            height: "50%",
            alignSelf: "center",
          }}
        ></View> */}
               <TouchableOpacity
          style={{
            // width: "33.3%",
            // height: "100%",
            flex: 1,
            // backgroundColor: "#f2ca30",
            borderTopLeftRadius: ((ww + wh) * 2) / 200,
            borderBottomLeftRadius: ((ww + wh) * 2) / 200,
            justifyContent: "center",
            
          }}
          onPress={() => EDIT()}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="information-circle-outline"
              size={ResponsiveScreen.fontSize(43)}
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
            Jobs info
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#fff",
            width: 1,
            height: "50%",
            alignSelf: "center",
          }}
        ></View>
        <TouchableOpacity
          style={{
            // width: "33.3%",
            // height: "100%",
            flex: 1,
            // backgroundColor: "#f2ca30",
            borderTopLeftRadius: ((ww + wh) * 2) / 200,
            borderBottomLeftRadius: ((ww + wh) * 2) / 200,
            justifyContent: "center",
            marginVertical:'3%',
            // paddingVertical:'3%'
          }}
          onPress={() => Note()}
        >
          <View style={{ alignItems: "center" }}>
          
            <Ionicons
              name="document-text-outline"
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
              // marginTop: "-2%",
            }}
          >
            {" "}
            Message Board
          </Text>
        </TouchableOpacity>

                <View
          style={{
            backgroundColor: "#fff",
            width: 1,
            height: "50%",
            alignSelf: "center",
          }}
        ></View>
        
        <TouchableOpacity
          style={{
            // width: "33.3%",
            // height: "100%",
            flex: 1,
            // backgroundColor: "#f2ca30",
            borderRadius: 5,
            justifyContent: "center",
            marginVertical:'3%',
          }}
          onPress={() => navigation.navigate("OpenProject")}
        >
          <View style={{ alignItems: "center" }}>
            <AntDesign
              name="setting"
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
            Company Jobs
          </Text>
        </TouchableOpacity>
        
      </View>
      {/* <View
        style={{
          height: (wh * 7) / 100,
          marginTop: (-wh * 13) / 100,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: (ww * 75) / 100,
            marginTop: (wh * 0.5) / 100,
            backgroundColor: "#fff",
            borderRadius: ResponsiveScreen.normalize(50),
            elevation: 2,
          }}
          onPress={() => EDIT()}
        >
          <View
            style={{
              padding: wh && (ww * 1.5) / 100,
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
                paddingRight: (ww * 22) / 100,
                paddingTop: (wh * 1) / 100,
                color: "#192570",
                fontSize: ResponsiveScreen.fontSize(27),
              }}
            >
              Edit Project
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
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
