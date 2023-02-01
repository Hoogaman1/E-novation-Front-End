import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
// import DatePicker from 'react-native-datepicker';
// import { DateTimePicker } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-modern-datepicker';

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
} from "react-native";
import { EvilIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { styles2, btn, styles3, stylesAlF, stylesAlT } from "./styleSheets3";
import { useNavigation } from "@react-navigation/native";

import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
const wf = Dimensions.get("screen").fontScale;
// console.log(wf);
const ws = Dimensions.get("screen").scale;
// console.log(ws);
const wh = Dimensions.get("screen").height;
// console.log(wh);
const ww = Dimensions.get("screen").width;
import ResponsiveScreen from "react-native-auto-responsive-screen";
import { log } from "react-native-reanimated";

const EditProject = (props) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [ShowSDATE, setShowSDATE] = useState(false);
  const [ShowEDATE, setShowEDATE] = useState(false);
 
  global.HANDSHAKE = "EditProject";
  const [stateB, setStateB] = useState(false);
  const [Bott, setBott] = useState(false);
  
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    if (!Bott) {
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handleBackButtonClick
        );
      };
    } else {
      BackHandler.addEventListener("hardwareBackPress", () => setStateB(true));
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handleBackButtonClick
        );
      };
    }
  });
  const [refresh, setRefresh] = useState(false);
 


  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timeoutVariable;
    if (refresh) {
      timeoutVariable = setTimeout(() => setRefresh(false), 5000);
    }

    axios({
      method: "get",
      url: "http://" + global.UURL + ":8000/BIGADMIN/projectedit/" + obj.id,
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        "Content-Type": "multipart/form-data",

        Authorization: "Token " + global.TOKEN,
        // 'Accept': 'application/json'
      },
    })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        navigation.addListener("focus", () => {
          setRefresh(true);
        });
      })

      .catch((error) => console.log(error));

    return () => clearTimeout(timeoutVariable);
  }, [refresh]);

  const tokenAuth = global.TOKEN;
  const navigation = useNavigation();

  const obj = global.PROJ;
  console.log(obj);
  const [mydata, setData] = useState("");
  // console.log(String(mydata.name))

  const [Pname, setPN] = useState(obj.name);
  const [ID, setID] = useState(String(obj.id_number));
  const [AMO, setAMO] = useState(String(obj.amount));
  const [OR, setOR] = useState(String(obj.order_number));
  const [DR, setDR] = useState(String(obj.drawing_num));
  const [Des, setDes] = useState(String(obj.description));


  const [MAN, setMan] = useState(String(obj.manager));
  const [ST, setST] = useState(String(obj.state));
  const [EST, setEST] = useState(String(obj.estimate));
  const [BUD, setBUD] = useState(String(obj.budjet));
  const [STD, setSTD] = useState(obj.start_date);
  const [start, setStart] = useState((STD.replace("-",'/')).replace("-",'/'));
  const [expe, setExpe] = useState((EST.replace("-",'/')).replace("-",'/'));


  // const [DES, setPassword] = useState("");
  const onPNChange = (textValue) => {
    setPN(textValue), setBott(true);
  };
  const onIDChange = (textValue) => {
    setID(textValue), setBott(true);
  };
  const onAMOChange = (textValue) => {
    setAMO(textValue), setBott(true);
  };
  const onORChange = (textValue) => {
    setOR(textValue), setBott(true);
  };
  const onDRChange = (textValue) => {
    setDR(textValue), setBott(true);
  };
  const onBUDChange = (textValue) => {
    setBUD(textValue), setBott(true);
  };
  const onESTChange = (textValue) => {
    setEST(textValue), setBott(true);
  };
  const onManChange = (textValue) => {
    setMan(textValue), setBott(true);
  };
  const onSTDChange = (textValue) => {
    setSTD(textValue), setBott(true);
  };
  const onDeChange = (textValue) => {
    setDes(textValue), setBott(true);
  };
  // const onRPChange = (textValue) => setRepass(textValue);

  // var email = "ali@test.com";
  const AcseptAlert = () => {
    DONE();
    setState1(false);
    console.log("navigate");
    navigation.navigate("History");
    console.log("navigate");

    // setState(false);
    // navigation.navigate("meTest")
  };
  const AcseptAlert1 = () => {
    Submit();
    setState4(false);

    console.log("navigate");
    navigation.navigate("OpenProject");
    console.log("navigate");

    // setState(false);
    // navigation.navigate("meTest")
  };
  const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  // const[ project , setProject ] = useState([])
  // const [isActive, setIsActive] = useState(false);
  //   const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(true);
  // const[list , setList] = useState([''])
  // useEffect(() => {
  //   // props.navigation.navigate("NewPass"),

  //   axios({
  //     method: "get",
  //     url: "http://127.0.0.1:8000/USER/opproject/",
  //     // params:{
  //     //   email:email,
  //     // },
  //     headers: {
  //       // 'Content-Type': "application/json",
  //       'Authorization': "Token 7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
  //       // 'Accept': 'application/json'
  //     },
  //     data: {
  //       // verification_code: code,
  //     },

  //   })
  //     .then((response) => console.log(response))
  //     // console.log(response)})
  //     .catch((error) => console.log(error));
  // });
  let formData = new FormData();
  // console.log('sssssssssssssssssssssssss');
  // console.log(formData);

  const [show, setState] = useState(false);

  const DONE = () => {
    axios({
      method: "patch",
      url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
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
        done: true,
      },
    })
      .then((response) => {
        if (response.data) {
          // setState(true);
          // console.log(response.data);
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
          // global.HANDSHAKE = 'EditProject';
          navigation.navigate("HandShake");
        } else {
          // setState(true)
          console.log(error);
        }
      });
  };

  const [show1, setState1] = useState(false);
  const [show4, setState4] = useState(false);

  const [show2, setState2] = useState(false);
  const [biababa, setBiababa] = useState();

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(global.PROJ.amount);
  console.log(global.PROJ.name);
  console.log(global.PROJ.order_number);
  

 

 


  const Submit = () => {
    formData.append("done", 'False');
    formData.append("next", 'False');
    formData.append("revert", 'False');
    formData.append("amount", AMO);
    formData.append("name", Pname);
    formData.append("drawing_num", DR);
    formData.append("order_number", OR);
    formData.append("id_number", ID);
    formData.append("description", Des);
    formData.append("manager", MAN);
    formData.append("estimate", (EST.replace('/','-')).replace('/','-'));
    // formData.append("estimate", EST);
    formData.append("budjet", BUD);
    formData.append("start_date", (STD.replace('/','-')).replace('/','-'));
    // formData.append("start_date", STD);
    formData.append("state", ST);
  
  

    global.PROJ.name = ("name", Pname);
    // global.PROJ.amount = String(mydata.amount)
    global.PROJ.amount = ("amount", AMO);
    global.PROJ.id_number = ("id_number", ID);
    global.PROJ.order_number = ("order_number", OR);
    console.log(formData)
    
    axios({
      method: "patch",
      url: "http://" + global.UURL + "/BIGADMIN/projectedit/" + obj.id,
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        "Content-Type": "multipart/form-data",

        Authorization: "Token " + global.TOKEN,
        // 'Accept': 'application/json'
      },
      data: formData,
    })
      .then((response) => {
        console.log("PEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEhen")
        console.log(response.status)
        if (response.data) {
          global.PROJ.name = Pname;
          // setState1(true);
          // console.log(response.data);
          // navigation.addListener('focus', () => {
          //   setRefresh(true)
          // })
        }
      })

      .catch((error) => {
        console.log('EEEEEEEEEEEEEEEEERRRRRRRRRRR')
        console.log(error)
        if (error.response.status == "0") {
          // global.HANDSHAKE = 'EditProject';
          navigation.navigate("HandShake");
        } else {
          let brobaba = "";
          for (let i = 0; i < Object.keys(error.response.data).length; i++) {
            brobaba += Object.keys(error.response.data)[i] + ": ";
            brobaba += Object.values(error.response.data)[i] + "\n" + "\n";
            // console.log(((Object.keys(error.response.data))[i]));
          }
          setBiababa(brobaba);
          // Alert.alert('User not created', brobaba)
          // setState1(true)
          setState2(true);
          // console.log(brobaba);
        }
      });
  };

  return (
    <View style={[styles3.page, { width: ww, height: (wh * 95) / 100 }]}>
      <View style={[styles3.topbox, { flex: 1, alignItems: "flex-end" ,}]}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={[styles3.logo, { height: (wh * 6) / 100 }]}
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
              marginTop: wh * -(0.5 / 100),
              marginRight: (ww * 4) / 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          top: (wh * 12) / 100,
          position: "absolute",
          width: (ww * 100) / 100,
          height: (ww * 22) / 100,
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
              {"   "}Job info{"   "}
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
          borderColor:"#f2ca30",
          borderWidth:0.5,
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
      </View>

{/* <View style={{height:wh*3}}> */}
      <ScrollView
        style={{marginTop: (ww * 50) / 100 }}
        // style={{ height: (wh * 83) / 100, marginTop: (ww * 50) / 100 }}
      >
        <View
          style={[
            styles3.butbox,
            {
              alignItems: "center",
              flexDirection: "column",
              // height: (wh * 150) / 100,
              width: "100%",
              marginTop: 0,
              paddingHorizontal: "2%",

              // flex: 7,
              // backgroundColor: "green",
            },
          ]}
        >
          <View
            style={{
              // width: (ww * 82) / 100,
              // height: (wh * 30) / 100,
              marginTop: "1%",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <View style={mystyles.styaleView}>
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> E-Novation Ref No: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={ID}
                  // onChangeText={onIDChange}
                >{ID}</Text>
              </View>
            </View>

            <View style={mystyles.styaleView}>
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Job Title: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={Pname}
                  // placeholder={Pname}
                  // onChangeText={onPNChange}
                >{Pname}</Text>
              </View>
            </View>

            <View style={mystyles.styaleView}>
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Total Quantity: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={AMO}
                  // onChangeText={onAMOChange}
                >{AMO}</Text>
              </View>
            </View>

            <View style={mystyles.styaleView}>
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Purchase Order Numbe: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={OR}
                  // onChangeText={onORChange}
                >{OR}</Text>
              </View>
            </View>

            <View
              style={[mystyles.styaleView, {  }]}
            >
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Custumer Drawing Number: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={DR}
                  // onChangeText={onDRChange}
                >{DR}</Text>
              </View>
            </View>
            
            <View
              style={[mystyles.styaleView, {  }]}
            >
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Start Date: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                {/* <TextInput
                  style={mystyles.TextInput}
                  value={STD}
                  onChangeText={onSTDChange}
                /> */}
                  <Text
                  style={mystyles.TextInput}
                  // value={DR}
                  // onChangeText={onDRChange}
                >{start.slice(8,)}/{start.slice(5,7)}/{start.slice(0,4)}</Text>
                  {/* <TouchableOpacity
                  // style={mystyles.TextInput}
                  style={{width:'10%',alignSelf:'flex-end',marginRight:'10%'}}
                  onPress={()=>setShowSDATE(!ShowSDATE)}
                  ><FontAwesome5 name="calendar-alt" size={ResponsiveScreen.normalize(45)} color="#575757"/></TouchableOpacity> */}
               
             
        
      
              </View>
            </View>
            {/* {ShowSDATE ?(
            <View
              style={[mystyles.styaleView, { height:ww*90/100 }]}
            >

                  <DatePicker
                        options={{
                          backgroundColor: '#fff',
                          textHeaderColor: '#575757',
                          textDefaultColor: '#575757',
                          selectedTextColor: '#fff',
                          mainColor: '#f2ca30',
                          textSecondaryColor: '#f2ca30',
                          borderColor: 'rgba(242, 202, 48, 1)',
                        }}
                        current={(STD.replace("-",'/')).replace("-",'/')}
                        
                        selected={(STD.replace("-",'/')).replace("-",'/')}
                        mode="calendar"
                        minuteInterval={30}
                        minimumDate={(STD.replace("-",'/')).replace("-",'/')}
                        maximumDate={(STD.replace("-",'/')).replace("-",'/')}
                        style={{ borderRadius: 10,width:ww*75/100 }}
                        // onSelectedChange={date => {setSTD(date),setBott(true)}}
                        disableDateChange={true}
                      />
                  </View>):(<View></View>)} */}
            <View
              style={[mystyles.styaleView, {  }]}
            >
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Expected Delivery Date: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
              <Text
                  style={mystyles.TextInput}
                  // value={DR}
                  // onChangeText={onDRChange}
                >{expe.slice(8,)}/{expe.slice(5,7)}/{expe.slice(0,4)}</Text>
                {/* <TextInput
                  style={mystyles.TextInput}
                  value={EST}
                  onChangeText={onESTChange}
                /> */}
                 {/* <TouchableOpacity
                  // style={mystyles.TextInput}
                  style={{width:'10%',alignSelf:'flex-end',marginRight:'12%'}}
                  onPress={()=>setShowEDATE(!ShowEDATE)}
                ><FontAwesome5 name="calendar-alt" size={ResponsiveScreen.normalize(45)} color="#575757"/></TouchableOpacity> */}
              </View>
            </View>
            {/* {ShowEDATE ?(
            <View
              style={[mystyles.styaleView, { height:ww*90/100 }]}
            >

                  <DatePicker
                        options={{
                          backgroundColor: '#fff',
                          textHeaderColor: '#575757',
                          textDefaultColor: '#575757',
                          selectedTextColor: '#fff',
                          mainColor: '#f2ca30',
                          textSecondaryColor: '#f2ca30',
                          borderColor: 'rgba(242, 202, 48, 1)',
                        }}
                        current={(EST.replace("-",'/')).replace("-",'/')}
                        selected={(EST.replace("-",'/')).replace("-",'/')}
                        mode="calendar"
                        minimumDate={(EST.replace("-",'/')).replace("-",'/')}
                        maximumDate={(EST.replace("-",'/')).replace("-",'/')}
                        minuteInterval={30}
                        style={{ borderRadius: 10,width:ww*75/100 }}
                        // onSelectedChange={date => {setEST(date),setBott(true)}}
                      />
                  </View>):(<View></View>)} */}
            <View
              style={[mystyles.styaleView, {  }]}
            >
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Job Manager: </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <Text
                  style={mystyles.TextInput}
                  // value={MAN}
                  // onChangeText={onManChange}
                >{MAN}</Text>
              </View>
            </View>
            {/* <View
              style={[mystyles.styaleView, { marginBottom: (wh * 4) / 100 }]}
            >
              <View style={[mystyles.ViewText, {}]}>
                <Text style={mystyles.Text}> Job Budjet. </Text>
              </View>
              <View style={[mystyles.ViewTextInpute, { flex: 1 }]}>
                <TextInput
                  style={mystyles.TextInput}
                  value={BUD}
                  onChangeText={onBUDChange}
                />
              </View>
            </View> */}

            

            {/* <View
              style={[
                mystyles.styaleView,
                {
                  flexDirection: "column",
                  paddingHorizontal: "2%",
                  paddingTop: "2%",
                  width: (ww * 80) / 100,
                  height: ww*40/100,
                },
              ]}
            > */}
              {/* <View style={[mystyles.ViewText, { justifyContent: "center" }]}> */}
                {/* {!Des ?( */}

                {/* <View style={{ height: "90%", width: (ww * 70) / 100 }}>
                  <Text>Description:</Text>
                  <TextInput
                    placeholder={
                      "This section is only for information and is not displayed to the Client"
                    }
                    multiline={true}
                    value={Des}
                    onChangeText={onDeChange}
                    style={[
                      mystyles.TextInput,
                      {
                        height: "100%",
                        width: "100%",
                        paddingTop: (wh * 1) / 100,
                        textAlignVertical: "top",
                        paddingLeft: wh && (ww * 5) / 100,
                      },
                    ]}
                  />
                </View> */}
                {/* ):( */}
                {/* //   <TextInput
              //   style={[mystyles.Text, { lineHeight:ResponsiveScreen.fontSize(29),paddingHorizontal:"2%" ,fontSize: ResponsiveScreen.fontSize(25),width:ww*80/100}]}
              //   value={Des}
              //   onChangeText={onDRChange}
              // />
              <View style={{ height: "80%" }} >
              <TextInput
                onChangeText={onDeChange}
                value={Des}
                multiline={true}
                style={[
                  mystyles.TextInput,
                  {
                    height: (wh * 22) / 100,
                    width: "100%",
                    paddingTop: (wh * 1) / 100,
                    textAlignVertical: "top",
                    paddingLeft: wh && (ww * 5) / 100,
                  },
                ]}
              />
             
            </View> */}
                {/* )} */}
              {/* </View> */}
            {/* </View> */}
            <View
              style={
                // mystyles.styaleView,
                {
                  flexDirection: "column",
                  paddingHorizontal: "2%",
                  paddingTop: "2%",
                  width: (ww * 80) / 100,
                  height: ww*25/100,
                }
              }
            ></View>
          </View>
          <AwesomeAlert
            show={show}
            showProgress={false}
            title="Are you sure to finish the Job?"
            message="Job will be moved to history"
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
            showConfirmButton={true}
            titleStyle={[
              stylesAlT.titleStyle,
              { fontSize: ResponsiveScreen.fontSize(30) },
            ]}
            messageStyle={stylesAlT.messageStyle}
            cancelButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            confirmButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            cancelText="Yes"
            confirmText="No"
            confirmButtonColor="#192570"
            cancelButtonColor="#f2ca30"
            cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
            onCancelPressed={() => {
              // setState(false);
              AcseptAlert();
              // console.log("delete")
            }}
            onConfirmPressed={() => {
              setState(false);
            }}
          />
          {/* <SCLAlert
          // slideAnimationDuration='1110'
          theme="success"
          show={show}
          title="It was successful"
          titleContainerStyle={{ marginTop: 10 }}
          // titleStyle={ }
          subtitle="The User was edited"
          // subtitleContainerStyle={{ backgroundColor: 'red' ,}}
          headerIconComponent={<Entypo name="check" size={34} color="green" />}
          // headerContainerStyles={styles.headerContainerStyles}
          // headerContainerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={backgroundColor = 'red'}
        >
          <SCLAlertButton
            // containerStyle={ }
            theme="success"
            onPress={() => [
              setState(false),
              navigation.navigate("OpenProject"),
            ]}
          >
            Go To OpenProject Page
          </SCLAlertButton>
          <SCLAlertButton theme="info" onPress={this.handleClose}>baste shavad</SCLAlertButton>
        </SCLAlert> */}

          <AwesomeAlert
            show={show1}
            showProgress={false}
            title="Are you sure to change the Job info?"
            message=" "
            // alertContainerStyle={{backgroundColor:'green'}}
            // overlayStyle={{backgroundColor:'red'}}
            // progressSize={2000}
            // progressColor={'red'}
            contentContainerStyle={[
              stylesAlT.contentContainerStyle,
              { width: (ww * 69) / 100 },
            ]}
            contentStyle={[stylesAlT.contentStyle, {}]}
            actionContainerStyle={stylesAlT.actionContainerStyle}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            titleStyle={[
              stylesAlT.titleStyle,
              { fontSize: ResponsiveScreen.fontSize(30) },
            ]}
            messageStyle={stylesAlT.messageStyle}
            cancelButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            confirmButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            cancelText="Yes"
            confirmText="No"
            confirmButtonColor="#192570"
            cancelButtonColor="#f2ca30"
            cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
            onCancelPressed={() => {
              // setState1(false);
              setState4(true);
              // console.log("delete")
            }}
            onConfirmPressed={() => {
              // hideAlert();
              setState1(false);
            }}
          />

          <AwesomeAlert
            show={show4}
            showProgress={false}
            title="✓"
            message="Job info Changed"
            // alertContainerStyle={{backgroundColor:'green'}}
            // overlayStyle={{backgroundColor:'red'}}
            // progressSize={2000}
            // progressColor={'red'}
            contentContainerStyle={[
              stylesAlT.contentContainerStyle,
              { width: (ww * 69) / 100 },
            ]}
            contentStyle={[stylesAlT.contentStyle, {}]}
            actionContainerStyle={stylesAlT.actionContainerStyle}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            // showConfirmButton={true}
            titleStyle={[
              stylesAlT.titleStyle,
              { fontSize: ResponsiveScreen.fontSize(35) },
            ]}
            messageStyle={stylesAlT.messageStyle}
            cancelButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            confirmButtonStyle={[stylesAlT.cancelButtonStyle, { width: "40%" }]}
            cancelText="OK"
            confirmText="No"
            confirmButtonColor="#192570"
            cancelButtonColor="#f2ca30"
            cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
            onCancelPressed={() => {
              setState1(false);
              AcseptAlert1();
              // console.log("delete")
            }}
            onConfirmPressed={() => {
              // hideAlert();
              setState1(false);
            }}
          />

          {/* <SCLAlert
          // slideAnimationDuration='1110'
          theme="success"
          show={show1}
          title="It was successful"
          titleContainerStyle={{ marginTop: 10 }}
          // titleStyle={ }
          subtitle="The User registered"
          // subtitleContainerStyle={{ backgroundColor: 'red' ,}}
          headerIconComponent={<Entypo name="check" size={34} color="green" />}
          // headerContainerStyles={styles.headerContainerStyles}
          // headerContainerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={backgroundColor = 'red'}
        >
          <SCLAlertButton
            // containerStyle={ }
            theme="success"
            onPress={() => setState1(false)}
          >
            OK
          </SCLAlertButton>
          <SCLAlertButton theme="info" onPress={this.handleClose}>baste shavad</SCLAlertButton>
        </SCLAlert> */}
          <AwesomeAlert
            show={stateB}
            showProgress={false}
            title="Are you sure to exit?"
            message="Changes would be lost if you exit"
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
            showConfirmButton={true}
            titleStyle={[
              stylesAlT.titleStyle,
              { fontSize: ResponsiveScreen.fontSize(30), textAlign: "center" },
            ]}
            messageStyle={stylesAlT.messageStyle}
            cancelButtonStyle={[
              stylesAlT.cancelButtonStyle,
              { width: "40%", height: (ww * 6.5) / 100 },
            ]}
            confirmButtonStyle={[
              stylesAlT.cancelButtonStyle,
              {
                width: "40%",
                height: (ww * 6.5) / 100,
                backgroundColor: "#192570",
              },
            ]}
            cancelText=" Cancel "
            confirmText=" Yes "
            confirmButtonColor="#f2ca30"
            cancelButtonColor="#f2ca30"
            cancelButtonTextStyle={stylesAlT.cancelButtonTextStyle}
            onCancelPressed={() => {
              // setState(false);
              setStateB(false);
              // console.log("delete")
            }}
            onConfirmPressed={() => {
              navigation.goBack();
            }}
          />
          <AwesomeAlert
            show={show2}
            showProgress={false}
            title="⤫"
            message="Job is not finished!"
            // alertContainerStyle={{backgroundColor:'green'}}
            // overlayStyle={{backgroundColor:'red'}}
            // progressSize={2000}
            // progressColor={'red'}
            contentContainerStyle={stylesAlF.contentContainerStyle}
            contentStyle={stylesAlF.contentStyle}
            actionContainerStyle={stylesAlF.actionContainerStyle}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={false}
            titleStyle={stylesAlF.titleStyle}
            messageStyle={stylesAlF.messageStyle}
            cancelText="Try again"
            confirmText="accept"
            confirmButtonColor="#f2ca30"
            cancelButtonColor="#f2ca30"
            cancelButtonTextStyle={stylesAlF.cancelButtonTextStyle}
            cancelButtonStyle={stylesAlF.cancelButtonStyle}
            onCancelPressed={() => {
              setState2(false);
              // console.log("delete")
            }}
            onConfirmPressed={() => {
              hideAlert();
            }}
          />

          {/* <SCLAlert
          // slideAnimationDuration='1110'
          theme="danger"
          show={show2}
          title="User not created"
          subtitle={biababa}
          subtitleContainerStyle={{
            // width: ww * 75 / 100,
            height: (wh * 18) / 100,
            // backgroundColor: 'red',
            alignItems: "center",
            justifyContent: "center",
          }}
          subtitleStyle={{
            textAlign: "justify",
            fontSize: 16,
            fontWeight: "500",
          }}
          headerIconComponent={<AntDesign name="close" size={30} color="red" />}
          headerContainerStyles={{ marginTop: 600 }}
          // headerContainerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={ViewPropTypes.headerContainerStyles}
          // headerInnerStyles={backgroundColor = 'red'}
        >
          <SCLAlertButton theme="danger" onPress={() => setState2(false)}>
            OK
          </SCLAlertButton>
          <SCLAlertButton theme="info" onPress={this.handleClose}>baste shavad</SCLAlertButton>
        </SCLAlert> */}
        </View>
      </ScrollView>
      {/* </View> */}
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
          justifyContent: "space-evenly",
        }}
      >
     
          <TouchableOpacity
            style={{
              // width: "33.3%",
              // height: "100%",
              flex: 1,
              // backgroundColor: "blue",
              borderRadius: 5,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Bearing")}
          >
            <View style={{ alignItems: "center" ,marginTop:'0%',marginBottom:'2%'}}>
            <Entypo
                name="back"
                size={ResponsiveScreen.fontSize(40)}
                color="#fff"
              />
              {/* <MaterialCommunityIcons name="briefcase-edit-outline" size={24} color="black" /> */}
            </View>
            {/* <View style={{width:'60%',height:1,backgroundColor:'#fff',alignSelf:'center'}}></View> */}
            <Text
              style={{
                alignSelf: "center",
                fontSize: ResponsiveScreen.fontSize(22),
                color: "#fff",
                marginTop: "-2%",
              }}
            >
              {" "}
              Back to Progress
            </Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};
export default EditProject;

const mystyles = StyleSheet.create({
  
  styaleView: {
    width: "100%",
    height: ww*10/100,
    justifyContent: "flex-start",
    elevation: 5,
    // borderWidth: .1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: (wh * 1) / 100,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  ViewText: {
    // borderRadius: 30,
    // marginLeft: (ww * 3) / 100,
    paddingStart: (ww * 1) / 100,
    // backgroundColor: 'red'
    justifyContent: "center",
    alignItems: "flex-start",
  },
  Text: {
    borderRadius: 10,
    fontSize: ResponsiveScreen.fontSize(25),
  },
  ViewTextInpute: {
    // borderRadius: 10,
    justifyContent: "center",
    width: "100%",
    // backgroundColor: 'green'
  },
  TextInput: {
    borderRadius: 10,
    padding: wh && (ww * 1.4) / 100,
    fontSize: ResponsiveScreen.fontSize(25),
    color:"#565656",
    fontWeight:'600',
  },
});
export { mystyles };