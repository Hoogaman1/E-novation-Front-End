import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import {
//   MaterialCommunityIcons,
//   Octicons,
//   FontAwesome5,
//   AntDesign,
//   Ionicons
// } from "@expo/vector-icons";
// import AwesomeAlert from "react-native-awesome-alerts";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { styles, Tabletstyles, stylesAlF } from "./styleSheets2.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import {
  EvilIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Entypo,
  Feather,
} from "@expo/vector-icons";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
// import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
// import { getTimeProps } from "antd/lib/date-picker/generatePicker/index.js";
// import { and } from "react-native-reanimated";

const LoginPage = (props) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])
  const getData = async () => {
    // console.log('bbbbbbbbbbbbbb')

    try {
      const value = await AsyncStorage.getItem("@token");
      // if (value !== "1") {
        if (value !== "1") {
        // value previously stored
        global.TOKEN = value;
        // setToggle(true)
        props.navigation.navigate("OpenProject");
      } else {
      }
    } catch (e) {
      // setToggle(false)

      // error reading value
      console.log(e);
    }
  };
  getData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEChange = (textValue) => setEmail(textValue);
  const onPChange = (textValue) => setPassword(textValue);
  const isStatus = 404;
  const [count, setCount] = useState(0);
  const [show1, setState1] = useState(false);
  const [show2, setState2] = useState(true);
  const [showpass, setSP] = useState(false);
  const [biababa, setBiababa] = useState();
  const [checked1, setChecked1] = useState(false);
  // const [EmailER, setEmailEr] = useState(false);
  const storeData = async () => {
    if (checked1 == true) {

      try {
        await AsyncStorage.setItem("@email", email);
        await AsyncStorage.setItem("@password",password);
        
        // const testi = await AsyncStorage.getItem('@token')

        // console.log(testi)
      } catch (e) {
        // saving error
        console.log(e);
      }
    } else {
      console.log("checkBox is off");
    }
  };
  // const getData = async () => {

  //   try {
  //     const value = await AsyncStorage.getItem('@token')
  //     if(value !== null) {
  //       // value previously stored
  //       // onEChange({textValue:value})

  //       if(checked1==true && flag==1){
  //       console.log(email)
  //       setflag(flag+1)
  //       setEmail(value)
  //       console.log('asan oodafezs')
  //       }else{console.log('nemikhad')}

  //     }
  //   } catch(e) {
  //     // error reading value
  //     console.log('cache')

  //   }
  // }
  // getData()
  // console.log('kkkkkkkkkkkkkkkkkkkk');
  // useEffect(
  //   () => {
  // axios({
  //   method: "POST",
  //   // url: "http://127.0.0.1:8000/USER/login/",
  //   url: "http://" + global.UURL + "/BIGADMIN/handshake/",
  //   headers: {
  //     // 'Content-Type': "application/json",
  //     // Authorization: `Token ${mahdi}`,
  //     // 'Accept': 'application/json'
  //   },
  //   data: {
  //     // email: email,
  //     // password: password,
  //   },
  // }).then((response) => {if (response.data.status==='ok'){
  //   setState2(true),
  //   setTimeout(() => setCount( count + 1), 3500)
  // }})
  // .catch((error) => {setState2(false),console.log(count),setTimeout(() => setCount( count + 1), 2500);});}, [count]);

  const setSend = () => {
    setState1(false)
    // getData()
    axios({
      method: "POST",
      // url: "http://127.0.0.1:8000/USER/login/",
      url: "http://" + global.UURL + "/USER/login/",
      headers: {
        // 'Content-Type': "application/json",
        // Authorization: `Token ${mahdi}`,
        // 'Accept': 'application/json'
      },
      data: {
        email: email,
        password: password,
      },
    })
      // .then((response) => console.log(response.status))
      .then((response) => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavvvvvvvvv");
        console.log(response.status);
        // console.log(response.data.data);
        global.OBJ=response.data.data
        if (response.status == "202") {
          // console.log(response.data.data);
          // props.navigation.navigate("OpenProject",{token: response.data.data.token});
          // props.navigation.navigate("OpenProject",{token: response.data.data.token});
          // sendToken(response.data.data.token);
          global.TOKEN = response.data.data.token;
          storeData(response.data.data.token);

          global.DATA = response.data.data.company;
          setTimeout(() => sendToken(), 500);
          // sendToken()
          console.log(response.data);
          console.log(global.TOKEN);
          console.log("bad");
        }
        // else if(response.status == "404"){
        //   console.log('kakakakakakak')
        //   let brobaba = 'Wrong email or password';
        //   // let brobaba = error.response.data.data.error_message;
        //   // for (let i = 2; i < Object.keys(error.response.data.data.error_message).length; i++) {
        //   //   // brobaba += ((Object.keys(error.response.data))[i]) + " : ";
        //   //   brobaba += ((Object.values(error.response.data.data.error_message))[i]) + "\n";
        //   //   // console.log(((Object.keys(error.response.data.error_message))[i]));
        //   // }
        //   setBiababa(brobaba);
        //   // setState(true)
        //   setState1(true);
        //   console.log(brobaba);
        //   // console.log(error.response.data.data.error_message);
        // }
      })

      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status == "0") {
          global.HANDSHAKE = "Login";
          props.navigation.navigate("HandShake");
        } else if (error.response.status == "404") {
          let brobaba = "Wrong email or password";
          
          // let brobaba = error.response.data.data.error_message;
          // for (let i = 2; i < Object.keys(error.response.data.data.error_message).length; i++) {
          //   // brobaba += ((Object.keys(error.response.data))[i]) + " : ";
          //   brobaba += ((Object.values(error.response.data.data.error_message))[i]) + "\n";
          //   // console.log(((Object.keys(error.response.data.error_message))[i]));
          // }
          setBiababa(brobaba);
          // setState(true)
          setState1(true);
          // console.log(brobaba);
          // console.log(error.response.data.data.error_message);
        }else if (error.response.status == "500"){
          let brobaba = "Wrong email";
          
          // let brobaba = error.response.data.data.error_message;
          // for (let i = 2; i < Object.keys(error.response.data.data.error_message).length; i++) {
          //   // brobaba += ((Object.keys(error.response.data))[i]) + " : ";
          //   brobaba += ((Object.values(error.response.data.data.error_message))[i]) + "\n";
          //   // console.log(((Object.keys(error.response.data.error_message))[i]));
          // }
          setBiababa(brobaba);
          // setState(true)
          setState1(true);
        }
      });

    // );
  };
  const sendToken = () => {
    props.navigation.navigate("OpenProject");
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#f2ca30" }}>
        <KeyboardAvoidingView
          style={{ backgroundColor: "#f2ca30" }}
          behavior="position"
          keyboardVerticalOffset={ResponsiveScreen.normalize(-220)}
        >
          <View
            style={[
              styles.page,
              { flexDirection: "column", height: (wh * 96) / 100 },
            ]}
          >
            {/* <View style={{backgroundColor:'yellow'}}> */}

            <View
              style={{
                height: (wh * 30) / 100,
                alignItems: "center",
                // backgroundColor: "gray",
                width: "60%",
                position: "absolute",
                top: "38%",
              }}
            >
              {/* <View> */}
              {/* <ScrollView> */}
              <View style={[styles.box, {}]}>
                <StatusBar
                  animated={true}
                  backgroundColor="#f2ca30"
                  barStyle={"light-content"}
                  translucent={true}
                  hidden={false}
                />
                <View
                  style={{
                    height: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Text>phone</Text> */}

                  <Image
                    source={require("../assets/app_ui2-12.png")}
                    style={[styles.logo, {}]}
                    resizeMode="cover"
                  />
                </View>

                <View style={[styles.fields, { marginTop: "-2%" }]}>
                  <TextInput
                    placeholder="Type your email addresss  "
                    style={[
                      styles.text,
                      {
                        marginBottom: (wh * 0.5) / 100,
                        fontSize: ResponsiveScreen.fontSize(20),
                      },
                    ]}
                    onChangeText={onEChange}
                    value={email}
                  />
                </View>
                <View style={[styles.fields, { marginTop: (wh * 1) / 100 }]}>
                  {showpass == true ? (
                    <View style={{}}>
                      <TextInput
                        secureTextEntry={true}
                        // caretHidden={true}
                        // textContentType="oneTimeCode"

                        placeholder="password"
                        style={[
                          styles.text,
                          {
                            marginBottom: (wh * 0.5) / 100,
                            fontSize: ResponsiveScreen.fontSize(20),
                          },
                        ]}
                        onChangeText={onPChange}
                      />
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          alignSelf: "flex-end",
                          marginVertical: "2.8%",
                        }}
                        onPress={() => setSP(!showpass)}
                      >
                        <Ionicons
                          name="eye-outline"
                          size={ResponsiveScreen.fontSize(35)}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      <TextInput
                        secureTextEntry={false}
                        // caretHidden={true}
                        // textContentType="oneTimeCode"

                        placeholder="password"
                        style={[
                          styles.text,
                          {
                            marginBottom: (wh * 0.5) / 100,
                            fontSize: ResponsiveScreen.fontSize(20),
                          },
                        ]}
                        onChangeText={onPChange}
                      />
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          alignSelf: "flex-end",
                          marginVertical: "2.8%",
                        }}
                        onPress={() => setSP(!showpass)}
                      >
                        <Ionicons
                          name="eye-off-outline"
                          size={ResponsiveScreen.fontSize(35)}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                {/* <AwesomeAlert
                  show={show1}
                  showProgress={false}
                  title="⤫"
                  message="Wrong email or password !"
                  // alertContainerStyle={{backgroundColor:'green'}}
                  // overlayStyle={{backgroundColor:'red'}}
                  // progressSize={2000}
                  // progressColor={'red'}
                  contentContainerStyle={stylesAlF.contentContainerStyle}
                  contentStyle={stylesAlF.contentStyle}
                  actionContainerStyle={stylesAlF.actionContainerStyle}
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={true}
                  showConfirmButton={false}
                  titleStyle={stylesAlF.titleStyle}
                  messageStyle={stylesAlF.messageStyle}
                  cancelButtonStyle={stylesAlF.cancelButtonStyle}
                  cancelText="    Ok    "
                  confirmText="accept"
                  confirmButtonColor="#f2ca30"
                  cancelButtonColor="#f2ca30"
                  cancelButtonTextStyle={stylesAlF.cancelButtonTextStyle}
                  // cancelButtonColor="#192570"
                  onCancelPressed={() => {
                    setState1(false);
                    // console.log("delete")
                  }}
                  onConfirmPressed={() => {
                    hideAlert();
                  }}
                /> */}
                {/* <AwesomeAlert
        
        show={show2}
        showProgress={false}
        title=' '
        
      
        // title="⤫"
        message="Network connection was interrupted, please try again later!"
        // alertContainerStyle={{backgroundColor:'green'}}
        // overlayStyle={{backgroundColor:'red'}}
        // progressSize={2000}
        // progressColor={'red'}
        overlayStyle={{backgroundColor:'#192570'}}
        contentContainerStyle={[stylesAlF.contentContainerStyle,{position:'absolute',bottom:0,width:ww,height:ww*10/100,backgroundColor:'#f2ca30'}]}
        // contentContainerStyle={{position:'absolute',bottom:0}}
        contentStyle={stylesAlF.contentStyle}
        actionContainerStyle={stylesAlF.actionContainerStyle}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        titleStyle={stylesAlF.titleStyle}
        messageStyle={[stylesAlF.messageStyle,{marginTop:'-5%',fontSize:ResponsiveScreen.fontSize(20),color:'#192570'}]}
        cancelButtonStyle={stylesAlF.cancelButtonStyle}
        cancelText="    Ok    "
        confirmText="accept"
        confirmButtonColor="#f2ca30"
        cancelButtonColor="#f2ca30"
        cancelButtonTextStyle={stylesAlF.cancelButtonTextStyle}
        // cancelButtonColor="#192570"
        onCancelPressed={() => {
          setState2(false);
          // console.log("delete")
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
        
      /> */}

                {/* 
              <SCLAlert
                theme="danger"
                show={show1}
                title=""
                // titleContainerStyle={{ marginTop: 10 }}
                titleStyle={{ color: "#dc3545", fontWeight: "400" }}
                subtitle={biababa}
                // headerContainerStyles={{backgroundColor:'green',color:'green'}}
                // overlayStyle={{backgroundColor:'green',color:'green'}}
                // titleContainerStyle={{backgroundColor:'green',color:'green'}}
                // headerInnerStyles={{backgroundColor:'green',color:'green'}}
                Topp={'transparent'}
                marg={'28%'}
                subtitleContainerStyle={
                  {
                    // width: ww * 75 / 100,
                    // height: wh * 18 / 100,
                    // backgroundColor: 'red',
                    // fontSize:ResponsiveScreen.fontSize(80)
                    // alignItems: 'center',
                    // justifyContent: 'center'
                  }
                }
                subtitleStyle={{
                  textAlign: "justify",
                  fontSize: ResponsiveScreen.fontSize(30),
                  fontWeight: "300",
                  // backgroundColor:'green',color:'green'
                }}
                headerInnerStyles={{backgroundColor:'green'}}
                // headerContainerStyles
                headerIconComponent={
                  // <AntDesign name="close" size={30} color="red" />
                  <AntDesign name="exclamationcircleo" size={40} color="red" />
                }
                headerContainerStyles={{ backgroundColor:'green',color:'green' }}
                // headerContainerStyles={ViewPropTypes.headerContainerStyles}
                // headerInnerStyles={ViewPropTypes.headerContainerStyles}
                // headerInnerStyles={backgroundColor = 'red'}
              >
                <SCLAlertButton theme="danger" onPress={() => setState1(false)}
                containerStyle={{backgroundColor:'#f2ca30',width:'50%',alignSelf:'center'}}
                >
                  Try again
                </SCLAlertButton>
                <SCLAlertButton theme="info" onPress={this.handleClose}>baste shavad</SCLAlertButton>
              </SCLAlert> */}

{show1 ? (
                <View
                  style={{
                    backgroundColor: "#e5e5e5",
                    width: "80%",
                    height: (ww * 12) / 100,
                    marginTop: "5%",
                    borderRadius: ResponsiveScreen.normalize(10),
                    flexDirection: "row-reverse",
                  }}
                >
                  <View
                    style={{
                      flex: 2.2,
                      paddingLeft: "2%",
                      paddingRight: "2%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#575757",
                        fontSize: ResponsiveScreen.fontSize(19),
                        textAlign: "left",
                      }}
                    >
                      Wrong email or password !
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Feather
                      name="alert-triangle"
                      size={ResponsiveScreen.fontSize(60)}
                      color="#575757"
                    />
                  </View>
                </View>
              ) : (
                <View></View>
              )}
                <View style={[styles.butbox,{flexDirection:'column'}]}>
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.Button,
                        {
                          width:'100%',
                          flexDirection: "row",
                          height: (wh * 3) / 100,
                          marginTop: (wh * 1) / 100,
                        },
                      ]}
                      onPress={setSend}
                    >
                      <Text
                        style={[
                          styles.ButtonText,
                          { marginTop: (wh * 0.1) / 100 },
                        ]}
                      >
                        {"   "}Login{"   "}
                      </Text>
                      {/* <Text style={{transform: [{ rotate: "90deg" }],fontSize:hp('2%'),color:"#fff"}}> ^ </Text> */}
                    </TouchableOpacity>
                  </View>
                  <View
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    height: .9,
                    marginTop:"6%"
                    // position: "absolute",
                    // bottom: "43%",
                  }}
                ></View>
                  <View style={{alignItems:'flex-start'}}>
                    <View
                      style={{
                        height: (wh * 3) / 100,
                        marginTop: (ww * -1) / 100,
                        marginLeft: '-5.5%',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckBox
                        center
                        title="Remember me"
                        // <Feather name="check-square" size={24} color="black" />
                        checkedIcon={
                          <Feather
                            name="check-square"
                            size={ResponsiveScreen.fontSize(25)}
                            color="#192570"
                          />
                        }
                        uncheckedIcon={
                          <Feather
                            name="square"
                            size={ResponsiveScreen.fontSize(25)}
                            color="#192570"
                            // color="#f2ca30"
                          />
                        }
                        size={ResponsiveScreen.fontSize(30)}
                        containerStyle={{
                          backgroundColor: "#f2ca30",
                          height: (wh * 4) / 100,
                          padding: 0,
                          margin: 0,
                          marginRight: "-5%",
                        }}
                        textStyle={{
                          color: "#fff",
                          fontSize: ResponsiveScreen.normalize(25),
                        }}
                        wrapperStyle={{ height: (wh * 4) / 100 }}
                        checked={checked1}
                        checkedColor="#192570"
                        onPress={() => {
                          setChecked1(!checked1);
                        }}
                      />
                    </View>
                  </View>
                
                <View
                  style={{
                    // position: "absolute",
                    justifyContent: "flex-start",
                    alignItems:'flex-start',
                    flexDirection: "row",
                    // backgroundColor: "red",
                    width: "100%",
                    // bottom: "1%",
                    marginTop: (ww * 4) / 100,
                    // paddingHorizontal: "10%",

                    // height: (wh * 6) / 100
                  }}
                >
                  {/* <TouchableOpacity
                    // style={[{ backgroundColor: "transparent" }]}
                    style={[
                      styles.Button,
                      {
                        backgroundColor: "transparent",
                        // backgroundColor: "red",
                        height: (wh * 3) / 100,
                        marginTop: (ww * 0) / 100,
                        // alignSelf:'flex-start'
                      },
                    ]}
                    onPress={setSend}
                  >
                    <Text
                      style={[
                        styles.ButtonText,
                        {
                          fontSize: ResponsiveScreen.fontSize(24),
                          // marginTop: (wh * 1) / 100,
                          // marginLeft: (ww * 2) / 100,
                        },
                      ]}
                      onPress={() => props.navigation.navigate("ForgetPass")}
                    >
                      Forgot Password
                    </Text>
                  </TouchableOpacity> */}
                </View>
                </View>

                {show2 === true ? (
                  <View></View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#192570",
                      width: (ww * 70) / 100,
                      height: (wh * 11) / 100,
                      alignSelf: "center",
                      borderRadius: ((ww + wh) * 1) / 200,
                      marginTop: (wh * 5) / 100,
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: ((ww + wh) * 1) / 200,
                      }}
                    >
                      <View>
                        <Feather
                          name="wifi-off"
                          size={ResponsiveScreen.fontSize(40)}
                          color="#f2ca30"
                        />
                      </View>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: ResponsiveScreen.fontSize(24),
                          fontWeight: "600",
                          marginTop: "1%",
                        }}
                      >
                        Network connection is interrupted.
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: ResponsiveScreen.fontSize(24),
                          fontWeight: "600",
                        }}
                      >
                        Check your internet connection please.
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              <View></View>
              {/* </ScrollView> */}
              {/* </View> */}
            </View>
          </View>
        </KeyboardAvoidingView>
        {1.78 > wh / ww ? (
          <View
            style={{
              height: (wh * 6) / 100,
              alignItems: "center",
              // backgroundColor:"red",
              // marginTop: (wh * 0) / 100,
              position: "absolute",
              bottom: "6%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                // marginTop: (wh * -5) / 100,
                color: "white",
                fontSize: ResponsiveScreen.fontSize(22),
                // marginLeft: "23%",
              }}
            >
              Client Application
            </Text>
            <Text
              style={{
                marginTop: (wh * 1) / 100,
                // marginBottom: ResponsiveScreen.normalize(320),
                color: "white",
                fontSize: ResponsiveScreen.fontSize(17),
              }}
            >
              All rights reserved by E-novation engineering Co.{" "}
            </Text>
          </View>
        ) : (
          <View
            style={{
              height: (wh * 6) / 100,
              alignItems: "center",
              // backgroundColor:"red",
              // marginTop: (wh * 0) / 100,
              position: "absolute",
              bottom: "2%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                // marginTop: (wh * -5) / 100,
                color: "white",
                fontSize: ResponsiveScreen.fontSize(22),
                // marginLeft: "23%",
              }}
            >
              Client Application
            </Text>
            <Text
              style={{
                marginTop: (wh * 1) / 100,
                // marginBottom: ResponsiveScreen.normalize(320),
                color: "white",
                fontSize: ResponsiveScreen.fontSize(17),
              }}
            >
              All rights reserved by E-novation engineering Co.{" "}
            </Text>
          </View>
        )}

        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default LoginPage;

// const styles = StyleSheet.create({

//   page:{
//     alignItems: 'center',
//     backgroundColor: '#f2ca30',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%',
//     flexDirection: 'column',
//     flexDirection: 'row',
//     // flexWrap: 'wrap',
//     flex: 1
//   },
//   fields: {
//       height: 35,
//       width: '90.8%',
//       padding:10,
//       backgroundColor: 'white',
//       textAlign:'center',
//       borderRadius:30,
//       marginTop: 10,
//       marginLeft:10
//   },
//   Button : {
//       // justifyContent:'center',
//       // alignItems:'center',
//       // borderColor:'#fff',
//       backgroundColor:'#192570',
//       // color :"red",
//       // Color:'blue',
//       // underlayColor:'#fff',
//       borderRadius:25,
//       height: 30,
//       width: '100%',
//       padding:0,
//       textAlign:'center',
//       marginTop:1,
//       // Align:'left',
//       // flex:0,
//   },
//   box: {
//     marginTop: '42%',
//     height: '45%',
//     width: '65%',
//     padding:10,
//     // backgroundColor:"green"
// },
// ButtonText:{
//   color:'white',
//   // width:"100%"
//   // fontSize:12,
// },
// butbox:{
//   justifyContent:'space-between',

//   // marginTop: '10%',
//   height: '50%',
//   width: '100%',
//   padding:10,
//   flexDirection: 'row',
//   // backgroundColor:"green",
//   // flexDirection: 'column',
// }
// });