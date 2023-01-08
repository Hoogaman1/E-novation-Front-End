import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
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
  StatusBar,
  BackHandler
} from "react-native";
import {
  styles,
  styles2,
  btn,
  styles3,
  stylesAlF,
  stylesAlT,
} from "./styleSheets2.js";
import { Entypo } from "@expo/vector-icons";
// import { ListItem } from "@rneui/base";

// import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

import Lightbox from "react-native-lightbox-v2";

const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

const DocAlbum = (props) => {
  global.HANDSHAKE = "DocAlbum";
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);
  const navigation = useNavigation();
  const [dummyl, setDummyl] = useState(false)
  const [dummy, setDummy] = useState([
    {
      id: 1,
      att_file: "null",
      project: 1,
    },
    {
      id: 2,
      att_file: "null",
      project: 1,
    },
    {
      id: 3,
      att_file: "null",
      project: 1,
    },
    {
      id: 4,
      att_file: "null",
      project: 1,
    },
    {
      id: 5,
      att_file: "null",
      project: 1,
    },
    {
      id: 6,
      att_file: "null",
      project: 1,
    },
  ]);

  // const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  // const [showCamera, setShowCamera] = useState(false);

  // const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState([]);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageArray, setImageArray] = useState([]);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    //   const cameraPermission = await Camera.requestPermissionsAsync();
    // console.log("camera permission:", cameraPermission.status);

    // setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log("permission:", imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" 
      // &&
      // cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  // useEffect(() => {
  //     permisionFunction();
  // }, []);
  const [photo, setPhoto] = React.useState(null);
  const [photoShow, setPhotoShow] = React.useState(null);
  const takePicture = async () => {
    // if (camera) {
    //   const data = await camera.takePictureAsync(null);
    //   // console.log(data.uri);
    //   setImageUri(data.uri);
    //   setImageArray([...imageArray, data.uri]);
    //   setShowCamera(false);
    // }
  };

  const pickImage = async () => {
    setInternetCheck(3);

    permisionFunction();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }

    let localUri = result.uri;
    // setPhotoShow(localUri);
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    // formData.append('project',  project);
    console.log(global.OBJ.id);
    formData.append("att_file", { uri: localUri, name: filename, type });
    formData.append("project", global.PROJ.id);

    console.log(formData);
    // global.IMGDATA =formData;

    axios({
      method: "post",
      url: "http://" + global.UURL + "/BIGADMIN/doc/",
      // params:{
      //   email:email,
      // },
      headers: {
        "Content-Type": "multipart/form-data",
        //   'Content-Type': "application/json",
        Authorization: "Token " + tokenAuth,
        // 'Accept': 'application/json'
      },
      data: formData,
      //  {
      //     email: email,
      //     company_name:company,
      //     Introducedـfname:adminN,
      //     Introduced_lname:adminF,
      //     img:global.IMGDATA,
      //     password:password,
      // },
    })
      .then((Response) => setInternetCheck(1))
      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "DocAlbum";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });

    useEffect(() => {
      // props.navigation.navigate("NewPass"),
      console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh");
      axios({
        method: "get",
        // url: "http://" + global.UURL + "/BIGADMIN/listdoc/" + global.OBJ.id,
        url: "http://" + global.UURL + "/BIGADMIN/listdoc/" + global.PROJ.id,
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
        // .then(console.log('gjghghghghg'))
        .then((Response) => setDummy(Response.data))
        // .then(console.log(Response.data))
        // .then(setDum)
        .catch((error) => {
          if (error.response.status == "0") {
            global.HANDSHAKE = "DocAlbum";
            navigation.navigate("HandShake");
          } else {
            console.log(error);
          }
        });
    }, [internetCheck]);
  };

  const myImage = () => {
    console.log("man imagam");
  };
  const iconic = () => {
    console.log("man iconamamamam ");
  };

  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  // const obj = global.OBJ;
  // const [dummy, setDummy] = useState([]);
  const tokenAuth = global.TOKEN;
  console.log("fffffffff");
  console.log(dummy);
  console.log("gggggggggff");

  // console.log(obj)
  // console.log(dummy);

  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  // const[ project , setProject ] = useState([])
  // const [isActive, setIsActive] = useState(false);
  //   const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(true);
  // const[list , setList] = useState([''])
  const setAlert = () => {
    props.navigation.navigate("Alert", { token: tokenAuth });
  };
  const setPost = () => {
    props.navigation.navigate("Bearing", { token: tokenAuth });
  };
  const setDPost = () => {
    props.navigation.navigate("DocAlbum");
  };
  const setAPost = () => {
    props.navigation.navigate("PhotoAlbum");
  };
  const [internetCheck, setInternetCheck] = useState(0);

  useEffect(() => {
    // props.navigation.navigate("NewPass"),
    console.log("ddddddddddddddddddddd");
    axios({
      method: "get",
      url: "http://" + global.UURL + "/BIGADMIN/listdoc/" + global.PROJ.id,
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
    .then((Response) => {console.log(Response.data.length);
    
      if (Response.data.length > 0) {
        setDummy(Response.data);
        setDummyl(false);
      }else{
        setDummyl(true);
        // setInternetCheck(internetCheck+1)
      };
    
    })
      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "DocAlbum";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
  }, [internetCheck]);

  const delIcon = () => {
    // props.navigation.navigate("NewPass"),
    // console.log(id)
    axios({
      method: "delete",
      url: "http://" + global.UURL + "/BIGADMIN/docedit/" + global.DELETE,
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
      // .then(() => useEffect())
      .then((Response) => setInternetCheck(internetCheck + 1))

      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "DocAlbum";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
  };

  const [show, setState] = useState(false);
  const iconeDelet = (id) => {
    global.DELETE = id;
    setState(true);
  };

  // const khodeIcon = () =>{
  //     global.
  // }

  const myIcone = () => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url: "http://" + global.UURL + "/BIGADMIN/listdoc/" + global.PROJ.id,
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
      // .then((Response) => console.log(dummy))

      .catch((error) => {
        if (error.response.status == "0") {
          global.HANDSHAKE = "DocAlbum";
          navigation.navigate("HandShake");
        } else {
          console.log(error);
        }
      });
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
      <View style={[styles3.butbox, { flex: 7, marginTop: (wh * 4) / 100 }]}>
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              marginTop: (wh * 10) / 100,
              // backgroundColor: "green",
              // width:ww*60/100
            },
          ]}
        >
                    <View
            style={{
              width: (ww * 100) / 100,
              borderRadius: 20,
              height: (wh * 9) / 100,
              // backgroundColor: "blue",
            }}
          >
            <View
              style={{
                width: (ww * 100) / 100,
                borderRadius: 20,
                height: (ww * 20) / 100,
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
                    {"   "}Documents{"   "}
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
                borderColor:"#f2ca30",
                borderWidth:0.3,
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
                    {/* salam */}
                    {"  "}
                  </Text>
                </View>
                </View>
                </View>
              
            {/* </View> */}
            </View>

            <AwesomeAlert
              show={show}
              showProgress={false}
              title="✖"
              message="Do you sure to delete this document?"
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
                { marginTop: (wh * -2.3) / 100 },
              ]}
              messageStyle={stylesAlT.messageStyle}
              cancelButtonStyle={[
                stylesAlT.cancelButtonStyle,
                { width: (ww * 26) / 100 },
              ]}
              confirmButtonStyle={[
                stylesAlT.cancelButtonStyle,
                { width: (ww * 26) / 100 },
              ]}
              cancelText="Yes"
              confirmText="No"
              confirmButtonColor="#192570"
              cancelButtonColor="#f2ca30"
              cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
              confirmButtonTextStyle={stylesAlT.cancelButtonTextStyle}
              onCancelPressed={() => {
                setState(false);
                delIcon();
                // console.log("delete")
              }}
              onConfirmPressed={() => {
                setState(false);
              }}
            />

            {/* <SCLAlert
              // slideAnimationDuration='1110'
              theme="info"
              show={show}
              title="Delete Photo"
              titleContainerStyle={{ marginTop: 10 }}
              titleStyle={{ color: "blue" }}
              subtitle="Do you want to delete the photo?"
              // subtitleContainerStyle={{ backgroundColor: 'red' ,}}
              headerIconComponent={
                <AntDesign name="exclamationcircleo" size={34} color="blue" />
              }
              // headerContainerStyles={styles.headerContainerStyles}
              // headerContainerStyles={ViewPropTypes.headerContainerStyles}
              // headerInnerStyles={ViewPropTypes.headerContainerStyles}
              // headerInnerStyles={backgroundColor = 'red'}
            >
              <SCLAlertButton
                // containerStyle={ }
                theme="info"
                onPress={() => [setState(false), delIcon()]}
              >
                YES
              </SCLAlertButton>
              <SCLAlertButton theme="danger" onPress={() => setState(false)}>
                NO
              </SCLAlertButton>
              <SCLAlertButton theme="info" onPress={this.handleClose}>baste shavad</SCLAlertButton>
            </SCLAlert> */}

            <View
              style={{
                width: (ww * 82.7) / 100,
                height: (wh * 66) / 100,
                position: "absolute",
                left: 0,
                top: (wh * 10) / 100,
                paddingLeft: "3.5%",
                // backgroundColor:'red'
              }}
            >
                      {dummyl == true ? (
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
                        No Document.{' '}
                        <Text
                          style={{ color: "#f2ca30" }}
                          // onPress={() => {pickImage()}}
                        >
                          {' '}
                        </Text>
                       {" "}
                      </Text>
                    </View>
                  ) : (
              <View style={{flex:1}}>
              <FlatList
                data={dummy}
                numColumns={2}
                renderItem={(itemList) => (
                  <View style={{}}>
                    <View
                      style={{
                        width: (ww * 40) / 100,
                        height: (ww * 40) / 100,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: (wh * 0) / 100,
                        // marginRight: ((wh+ww) * 0.2) / 10,
                        
                      }}
                    >
                      <TouchableOpacity
                        onPress={myImage}
                        style={{
                          width: (ww * 37) / 100,
                          height: (ww * 37) / 100,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 8,
                          backgroundColor:'#ededed'
                        }}
                      >
                        {/* <Image
                                                    source={{ uri: itemList.item.img }}
                                                    // source={require("../assets/work.jpg")}
                                                    style={{
                                                        width: "100%",
                                                        height: '100%',
                                                        borderRadius: 8
                                                    }}
                                                /> */}
                       <Lightbox
                          // backgroundColor='transparcloseent'
                          useNativeDriver={false}
                          // onOpen={()=>{setDes(itemList.item.description)}}
                          backgroundColor="rgba(0,0,0,0.8)"
                          springConfig={{
                            tension: 1000000,
                            friction: 1000000,
                          }}
                          swipeToDismiss={false}
                          renderHeader={(close) => (
                            <TouchableOpacity
                              onPress={close}
                              style={{
                                position: "absolute",
                                top: 10,
                                left: 10,
                              }}
                              >
                                <Text style={{color:'#fff'}}>Close</Text>
                            </TouchableOpacity>
                          )}
                          renderContent={() => (
                            <View  style={{
                              position: "absolute",
                              top: "10%",
                              height: wh,
                              width: ww,
                              backgroundColor: "rgba(0,0,0,0.4)",
                            }}>
                               <View
                                    style={{
                                      height: "45%",
                                      width: (ww * 90) / 100,
                                      flexDirection: "column",
                                      alignSelf: "center",
                                      // justifyContent: '',
                                      marginTop: "1%",
                                    }}
                                  >
                                    <Text
                                      multiline={true}
                                      // onChangeText={onDeChange}
                                      style={{
                                        marginTop:"-5%",
                                        height: "60%",
                                        width: "100%",
                                        color: "#fff",
                                        // backgroundColor:'#fff',
                                        paddingTop: (wh * 1) / 100,
                                        textAlignVertical: "top",
                                        // paddingLeft: wh && (ww * 5) / 100,
                                        alignSelf: "center",
                                        padding: wh && (ww * 2) / 100,
                                        borderColor: "#fff",
                                        borderWidth: .5,
                                        borderRadius: (ww * 2) / 100,
                                        fontSize: ResponsiveScreen.fontSize(25),
                                        // backgroundColor:"#fff"
                                        backgroundColor:"rgba(2,2,2,0.5)"
                                      }}
                                      // placeholder={itemList.item.description}
                                      // placeholderTextColor="#fff"
                                      // placeholder={itemList.item.description}
                                      // onChangeText={onDeChange}
                                      // value={Des}
                                    >{itemList.item.description}</Text>
                                    <View style={{width:ww*90/100,marginTop:'2%',height:'8%',justifyContent:'space-between',flexDirection:'row-reverse',alignItems:'center'}}>
                          
                                    </View>
                                  </View>
                              <Image
                               style={{
                                width: (ww * 90) / 100,
                                height: (ww * 90) / 100,
                                alignSelf:'center',
                                marginTop:'-17%'
                                // borderRadius: (ww * 3) / 100,
                                // backgroundColor:'red'
                              }}
                                resizeMode="cover"
                                source={{
                                  uri:
                                    "http://" +
                                    global.UURL +
                                    itemList.item.att_file.slice(21),
                                }}
                              />
                            </View>
                          )}
                        >
                          
                          {itemList.item.att_file === "null" ? (
                            <Text
                              style={{
                                width: (ww * 37) / 100,
                                height: (ww * 37) / 100,
                                borderRadius: (ww * 3) / 100,
                                backgroundColor: "#ededed",
                                marginTop:ww*4/100,
                              }}
                            ></Text>
                          ) : (
                            <View>
                              <Image
                                style={{
                                  width: (ww * 37) / 100,
                                  height: (ww * 37) / 100,
                                  borderRadius: (ww * 3) / 100,
                                }}
                                resizeMode="cover"
                                source={{
                                  uri:
                                    "http://" +
                                    global.UURL +
                                    itemList.item.att_file.slice(21),
                                }}
                              />
                              <View
                                style={{
                                  position: "absolute",
                                  bottom: "3%",
                                  right: "3.5%",
                                  backgroundColor: "rgba(0,0,0,0.4)",
                                  borderRadius: 150,
                                  padding: (ww * 2) / 100,
                                }}
                              >
                                <SimpleLineIcons
                                      name="size-fullscreen"
                                      size={ResponsiveScreen.fontSize(23)}
                                      color="#fff"
                                    />
                              </View>
                            </View>
                          )}
                          {/* <Text>{itemList.item}</Text> */}
                        </Lightbox>
                        {itemList.item.att_file === "null" ? (
                          <Text></Text>
                        ) : (<View></View>
                          // <TouchableOpacity
                          //   //  onPress={() => delIcon(itemList.item.id)}
                          //   onPress={() => iconeDelet(itemList.item.id)}
                          //   style={{ position: "absolute", top: 1, right: 1 }}
                          // >
                          //   <Entypo
                          //     name="circle-with-minus"
                          //     size={ResponsiveScreen.fontSize(40)}
                          //     color="#f2ca30"
                          //   />
                          // </TouchableOpacity>
                          // <TouchableOpacity
                          //   //  onPress={() => delIcon(itemList.item.id)}
                          //   onPress={() => iconeDelet(itemList.item.id)}
                          //   style={{
                          //     position: "absolute",
                          //     top: "2%",
                          //     right: "1%",
                          //     backgroundColor: "rgba(0,0,0,0.4)",
                          //     borderRadius: 150,
                          //     padding: (ww * 1) / 100,
                          //   }}
                          // >
                            
                          //   <Feather
                          //     name="trash-2"
                          //     size={ResponsiveScreen.fontSize(37)}
                          //     color="#fff"
                          //   />
                          // </TouchableOpacity>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
              </View>
              )}
            </View>
          </View>
          {/* <View
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
            width: "33.3%",
            height: "100%",
            // backgroundColor: "#f2ca30",
            borderRadius: 5,
            justifyContent: "center",
          }}
          onPress={() => pickImage()}
        >
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="attach-file"
              size={ResponsiveScreen.fontSize(45)}
              color="#fff"
            />
          </View>
          
          <Text
            style={{
              alignSelf: "center",
              fontSize: ResponsiveScreen.fontSize(22),
              color: "#fff",
              marginTop: "-3%",
            }}
          >
            {" "}
            Attach File
          </Text>
        </TouchableOpacity>

        
        </View> */}
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