import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

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
  StyleSheet
} from "react-native";
import { styles2, btn, styles3 } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
import Item from "antd/lib/list/Item.js";
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
const History = (props) => {
  const tokenAuth = props.route.params.token;
  // const obj = props.route.params.obj;
  // const { navigation } = props;
  const [dummy, setDummy] = useState([]);
  console.log(dummy.project)

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
  useEffect(() => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/BIGADMIN/history/amirco",
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
    }).then((Response) => setDummy(Response.data[0]))
    // .then((Response) => console.log(dummy))
  }, []);
  return (
    <View style={styles3.page}>
      <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
      </View>
      <View style={[styles3.butbox,{alignItems:'center',flexDirection:'column'}]}>
      <View
            style={{
              // backgroundColor: "blue",
              width: ResponsiveScreen.normalize(700),
              borderRadius: 20,
              height: ResponsiveScreen.normalize(200),
            }}
          >
            <Text
              style={{
                fontSize: ResponsiveScreen.normalize(47),
                color: "#f2ca30",
                marginTop: ResponsiveScreen.normalize(50),
                marginLeft: ResponsiveScreen.normalize(50),
                marginBottom: ResponsiveScreen.normalize(15),
              }}
            >
              History of your Projects
            </Text>
          </View>
          <FlatList
          style={{width:ResponsiveScreen.normalize(700),paddingHorizontal:ResponsiveScreen.normalize(50),height:ResponsiveScreen.normalize(300),backgroundColor:'#fff'}}
            data={dummy.project}
            renderItem={(itemList) => (
              <TouchableOpacity style={mystyles.card}>
                <Text
                  style={
                    {
                      // backgroundColor:'red',
                      // maxWidth:200,
                      flexShrink: 1,
                      flexGrow: 1,
                      padding: ResponsiveScreen.normalize(0),
                      color: "gray",
                      fontFamily: "Roboto",
                      fontSize: ResponsiveScreen.fontSize(35),
                      marginTop: ResponsiveScreen.normalize(35),
                      paddingStart: ResponsiveScreen.normalize(25),
                      textAlign: "left",
                      lineHeight: ResponsiveScreen.normalize(110),
                      width:ResponsiveScreen.normalize(180),
                      marginLeft:ResponsiveScreen.normalize(20)
                     
                    }
                  }
                  onPress={() =>
                    props.navigation.navigate("Bearing", { name: "Bearing" })
                  }
                >
                  {itemList.item.name}
                </Text>

                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(-120),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'blue',

                  }}
                >
                  ID No.:<Text style={{ color: "gray" }}> {itemList.item.id_number}</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'blue',

                  }}
                >
                  Drowing No.:<Text style={{ color: "gray" }}> {itemList.item.drawing_num}</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(230),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'blue',

                  }}
                >
                  Amount:<Text style={{ color: "gray" }}> {itemList.item.amount}</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(-120),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'yellow',

                  }}
                >
                  Order No.:<Text style={{ color: "gray" }}> {itemList.item.order_number}</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'yellow',

                  }}
                >
                  Req No.:<Text style={{ color: "gray" }}>123456</Text>
                </Text>
                <Text
                  style={{
                    marginTop: ResponsiveScreen.normalize(25),
                    marginLeft: ResponsiveScreen.normalize(400),
                    fontSize: ResponsiveScreen.normalize(20),
                    color: "#192570",
                    fontWeight: "bold",
                    // backgroundColor:'yellow',

                  }}
                >
                    
                  End Date:<Text style={{ color: "gray" ,}}>2022/3/12</Text>
                </Text>
                <View
                  style={{
                    width: 2,
                    height: 78,
                    backgroundColor: "#f2ca30",
                    marginLeft: ResponsiveScreen.normalize(200),
                    marginTop: ResponsiveScreen.normalize(-120),
                    
                  }}
                ></View>
              </TouchableOpacity>
            )}
          />
        
      </View>
    </View>
  );
};

export default History;

const mystyles = StyleSheet.create({

  card: {
    fontFamily: "Roboto",
    marginTop: ResponsiveScreen.normalize(20),
    width: ResponsiveScreen.normalize(600),
    height: ResponsiveScreen.normalize(200),
    // textAlign: "left",
    marginLeft:ResponsiveScreen.normalize(5),
    marginBottom:ResponsiveScreen.normalize(10),
    borderRadius: ResponsiveScreen.normalize(20),
    // elevation: 1,
    // backgroundColor: "gray",
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor: "black",
    // shadowOpacity:3,
    // shadowRadius: 3,
    elevation: 2,
    backgroundColor: "#fff",
    shadowOffset: { width: -20, height: -20 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // alignItems:'stretch'
    
  },
  

})
export { mystyles};