import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
} from "react-native";
import { styles2, btn, styles3 } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import Item from "antd/lib/list/Item.js";
import { set } from "react-native-reanimated";

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
  const [check, setCheck] = useState('3');
  // const tokenAuth = props.route.params.token;
  const navigation = useNavigation();
  // const tokenAuth = "";
  // console.log(global.OBJ)
  // const obj = props.route.params.obj;
  // const { navigation } = props;
  // console.log(dummy[0].project)
  // console.log(dummy.project)

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
  const Ddata = global.DATA;
  useEffect(() => {
    // props.navigation.navigate("NewPass"),
    const tokenAuth = global.TOKEN;
    // const obj = global.OBJ;
    // console.log(global.OBJ)

    axios({
      method: "GET",
      url: "http://" + global.UURL + "/BIGADMIN/history/" + Ddata.company,
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
    }).then((Response) => {
      try {
        setDummy(Response.data[0].project)

        if (check > 0) {
          setCheck(check - 1)
        }

        console.log(check);

      } catch (e) {
        // console.log('Error')
      }
    })

    // .then((Response) => console.log(Response.data))
  }, [check]);
  // console.log(check);

  return (
    <View style={[styles3.page, { flex: 1 }]}>
      <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
        <TouchableOpacity

          onPress={() => { navigation.openDrawer({ token: tokenAuth }); }}

        >
          <Ionicons
            name="ios-menu-sharp"
            size={35}
            color="black"
            style={{
              marginTop: ResponsiveScreen.normalize(-10),
              marginRight: ResponsiveScreen.normalize(30),
            }}

          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles3.butbox,
          { alignItems: "center", flexDirection: "column" },
        ]}
      >
        <View
          style={{
            width: (ww * 85) / 100,
            borderRadius: 20,
            height: (wh * 10) / 100,
            // backgroundColor: 'red'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: ww * 85 / 100,
              // backgroundColor: 'green'

            }}
          >
            <View
              style={{
                marginLeft: ResponsiveScreen.normalize(17),
                borderRadius: 60,
                width: ResponsiveScreen.normalize(140),
                height: ResponsiveScreen.normalize(140),
                // backgroundColor: 'green'
              }}
            >
              <Image
                source={{
                  uri: Ddata.img,
                }}
                style={{
                  width: ww * 19 / 100,
                  height: wh * 9 / 100,
                  borderRadius: 60
                }}
                resizeMode={'center'}
              />
            </View>
            <View
              style={{
                width: ww * 60 / 100,
                // backgroundColor: 'green'
              }}
            >
              <Text
                style={{
                  fontSize: ResponsiveScreen.fontSize(42),
                  color: "#f2ca30",
                  marginTop: wh * 2.5 / 100,
                  marginRight: ww * 5 / 100,
                  textAlign: 'left',
                  // backgroundColor: 'pink'
                }}
              >
                {Ddata.company}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ width: ww * 100 / 100, height: wh / 1.6, }}>
          <FlatList
            style={{
              width: ww * 100 / 100,
              paddingHorizontal: ww * 0 / 100,
              height: wh * 100 / 100,
              flexDirection: 'column',
            }}
            data={dummy}
            renderItem={(itemList) => (
              <TouchableOpacity style={mystyles.card}>
                <View style={{ height: wh * 5 / 100, width: ww * 85 / 100 }}>
                  <Text
                    style={{
                      color: "gray",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(40),
                      padding: ww && wh * .5 / 100,
                      // backgroundColor: 'red',
                      textAlign: 'center'
                    }}
                  >
                    {" "}
                    {itemList.item.name}
                  </Text>
                </View>
                <View style={{ height: wh * .1 / 100, width: ww * 81 / 100, backgroundColor: "#f2ca30", borderRadius: 100, marginHorizontal: ww * 2 / 100 }}></View>

                <View
                  style={{
                    height: wh * 0.05 / 100,
                    width: ww * 80 / 100,
                    backgroundColor: "#f2ca30",
                    borderRadius: 100,
                    marginHorizontal: ww * 1.5 / 100,
                  }}
                ></View>
                <View
                  style={{
                    height: wh * 8 / 100,
                    width: ww * 80 / 100,
                    flexDirection: "row",
                    // backgroundColor:'red'
                  }}
                >
                  <View
                    style={{
                      height: wh * 8 / 100,
                      width: ww * 28 / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'

                    }}
                  >
                    <Text
                      style={{
                        marginTop: wh * 1 / 100,
                        marginLeft: ww * 3.5 / 100,
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
                        marginTop: wh * 1 / 100,
                        marginLeft: ww * 3.5 / 100,
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
                      height: wh * 8 / 100,
                      width: ww * 27 / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: wh * 1 / 100,
                        marginLeft: ww * 2 / 100,
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
                        marginTop: wh * 1.4 / 100,
                        marginLeft: ww * 2 / 100,
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
                      height: wh * 7 / 100,
                      width: ww * 28 / 100,
                      flexDirection: "column",
                      // backgroundColor:'red'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: wh * 1 / 100,
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
                    <Text
                      style={{
                        marginTop: wh * 1 / 100,
                        // marginLeft: ResponsiveScreen.normalize(0),
                        fontSize: ResponsiveScreen.fontSize(18),
                        color: "#192570",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      End Date:<Text style={{ color: "gray" }}> 2022/3/12</Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
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
    </View>
  );
};

export default History;

const mystyles = StyleSheet.create({
  card: {
    fontFamily: "Roboto",
    marginTop: wh * 2 / 100,
    width: ww * 84 / 100,
    height: wh * 13 / 100,
    // textAlign: "left",
    marginLeft: ww * 8 / 100,
    marginBottom: wh * 1 / 100,
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
