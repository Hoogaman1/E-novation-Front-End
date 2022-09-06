import React, { useEffect, useState } from "react";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
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
} from "react-native";
import { styles3, styles2, btn } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
const Bearing = (props) => {
  // const [email, setEmail] = useState("");
  const [id_select, setSelect] = useState("");
  // console.log(tokenAuth)
  // console.log(obj[0][0])
  const tokenAuth = global.TOKEN;
  // const { navigation } = props;
  const navigation = useNavigation();


  const obj = global.OBJ;
  console.log('1')
  console.log(obj)
  console.log('2')
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
  const BellAlert = () =>
    Alert.alert(
      "New Event",
      "My Alert Msg",
      [
        // {
        //   text: "Ask me later",
        //   onPress: () => console.log("Ask me later pressed")
        // },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }

      ]
    );
  const setPost = () => {
    const tokenAuth = global.TOKEN;
    const obj = global.OBJ;
    // const { navigation } = props;

    props.navigation.navigate("PhotoAlbum");
  };
  const setDPost = () => {
    props.navigation.navigate("DocAlbum");
  };
  const setAlert = () => {
    props.navigation.navigate('Alert', { token: tokenAuth });
  }
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
  useEffect(() => {
    const obj = global.OBJ;
    // const { navigation } = props;
    // props.navigation.navigate("NewPass"),
    axios({
      method: "get",
      url: "http://" + global.UURL + "/USER/opproject/",
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
      // .then((response) => (console.log(response)))
      // console.log(response)})
      .catch((error) => console.log(error));
  });

  return (
    <View style={styles3.page}>
      <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
        <TouchableOpacity
          onPress={setAlert}
        >
          <FontAwesome5 name="bell" size={25} color="black" style={{ marginLeft: ww * 18 / 100, marginTop: wh * -1 / 100 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.openDrawer({ token: tokenAuth }); }}
        >
          <Image
            source={require("../assets/app_ui2-11.png")}
            style={styles3.logo2}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles3.butbox]}>
        <View
          style={[
            styles3.workbox,
            { alignItems: "center", flexDirection: "column" },
          ]}
        >
          <View
            style={{
              // backgroundColor:'red',
              width: ww * 85 / 100,
              borderRadius: 20,
              height: wh * 12 / 100,
            }}
          >
            <Text
              style={{
                fontSize: ResponsiveScreen.normalize(55),
                fontFamily: "Roboto",
                color: "#f2ca30",
                marginTop: wh * 4 / 100,
                marginLeft: ww * 7 / 100,
                // marginBottom:wh*5/100,
              }}
            >
              {obj.name}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor:"red",
              width: ww * 85 / 100,
              height: wh * 65 / 100,
              borderRadius: 20,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: ww * 20 / 100,
                height: wh * 65 / 100,
                borderRadius: 20,
                // backgroundColor:"pink"
              }}
            >
              <View>
                <View>
                  <Text
                    style={{
                      width: ww * 3.8 / 100,
                      height: wh * 61 / 100,
                      backgroundColor: "#f2ca30",
                      borderRadius: 100,
                      marginHorizontal: ww * 6.4 / 100,
                    }}
                  ></Text>
                </View>
                {obj.status === "1" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 6.2 / 100,
                      marginTop: -wh * 61 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "2" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 15.5 / 100,
                      marginTop: -wh * 63.3 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "3" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 24.2 / 100,
                      marginTop: -wh * 65.6 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "4" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 33.2 / 100,
                      marginTop: -wh * 67.9 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "5" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 42.2 / 100,
                      marginTop: -wh * 70.2 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "6" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 51.5 / 100,
                      marginTop: -wh * 72.6 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
                {obj.status === "7" ? (
                  <Text
                    style={[styles3.checkline, {
                      height: wh * 60.9 / 100,
                      marginTop: -wh * 74.9 / 100,
                    }]}
                  ></Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            </View>

            <View
              style={{
                width: ww * 62 / 100,
                height: wh * 65 / 100,
                borderRadius: 20,
                // backgroundColor:"red",
                marginHorizontal: -ww * 3.5 / 100,
              }}
            >
              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <MaterialCommunityIcons
                    name="forklift"
                    size={ww * 8 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Material supply</Text>
                </View>
              </View>

              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <MaterialCommunityIcons
                    name="scissors-cutting"
                    size={ww * 8 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Cutting</Text>
                </View>
              </View>
              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <MaterialCommunityIcons
                    name="tools"
                    size={ww * 7 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Matching</Text>
                </View>
              </View>
              <View
                style={[
                  styles3.workcard,
                  { paddingTop: ResponsiveScreen.normalize(0) },
                ]}
              >
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <FontAwesome5
                    name="paint-roller"
                    size={ww * 7 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text
                    style={[
                      styles3.txtworkcard,
                      {
                        fontSize: ResponsiveScreen.normalize(27),
                      },
                    ]}
                  >
                    Heat treatment/Coating/Painting or Plating
                  </Text>
                </View>
              </View>
              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <AntDesign
                    name="checksquare"
                    size={ww * 7 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Quality Control</Text>
                </View>
              </View>
              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                  }}
                >
                  <Octicons
                    name="package-dependencies"
                    size={ww * 7 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Packaging</Text>
                </View>
              </View>
              <View style={styles3.workcard}>
                <View
                  style={{
                    marginLeft: ww * 4 / 100,
                    // backgroundColor: 'red'
                  }}
                >
                  <MaterialCommunityIcons
                    name="truck-delivery"
                    size={ww * 7 / 100}
                    color="orange"
                  />
                </View>
                <View style={styles3.Viewtxtworkcard}>
                  <Text style={styles3.txtworkcard}>Ready for delivery</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles3.barbox}>
          <TouchableOpacity style={{
            marginTop: ResponsiveScreen.normalize(40),
            marginLeft: ResponsiveScreen.normalize(-9),
          }} onPress={setPost}>
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
                    marginTop: ResponsiveScreen.normalize(140),
                    marginLeft: ResponsiveScreen.normalize(-66),
                    color: "black",
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
              >
                Documents
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles3.barbut1}>
            <View>
              <Text
                style={styles3.bartxt}
                onPress={() =>
                  props.navigation.navigate("PhotoAlbum", {
                    name: "PhotoAlbum",
                  })
                }
              >
                Photo Album
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles3.barbut2}>
            <View>
              <Text style={styles3.bartxt}>Project Process</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles3.barbut3}>
            <View style={{marginTop:10}}>
            
              <Text style={styles3.bartxt}>Documents</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </View >
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
