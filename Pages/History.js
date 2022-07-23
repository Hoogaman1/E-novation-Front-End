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
         <Image
          source={require("../assets/app_ui2-11.png")}
          style={styles3.logo2}
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
          style={{width:ResponsiveScreen.normalize(700),paddingHorizontal:ResponsiveScreen.normalize(50),height:ResponsiveScreen.normalize(1000),flexDirection:'column'}}
            data={dummy.project}
            renderItem={(itemList) => (
              <TouchableOpacity style={mystyles.card}>
                <View style={{height:ResponsiveScreen.normalize(80),width:ResponsiveScreen.normalize(600)}}> 
                <Text style={{
                  color: "gray",
                  fontFamily: "Roboto",
                  fontSize: ResponsiveScreen.fontSize(40),
                  // backgroundColor:'red',
                }}> {itemList.item.name}</Text>
                </View>
                <View style={{height:ResponsiveScreen.normalize(5),width:ResponsiveScreen.normalize(580),backgroundColor:"#f2ca30",borderRadius:100,marginHorizontal:ResponsiveScreen.normalize(12)}}></View>
                <View style={{height:ResponsiveScreen.normalize(115),width:ResponsiveScreen.normalize(600),flexDirection:'row'}}>

                <View style={{height:ResponsiveScreen.normalize(225),width:ResponsiveScreen.normalize(200),flexDirection:'column'}}>
                <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(30),
                    fontSize: ResponsiveScreen.normalize(22),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> ID No.:<Text style={{ color: "gray" }}> {itemList.item.id_number}</Text></Text>
                   <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(30),
                    fontSize: ResponsiveScreen.normalize(22),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> Drowing No.:<Text style={{ color: "gray" }}> {itemList.item.drawing_num}</Text></Text>
                  
                </View>
                <View style={{height:ResponsiveScreen.normalize(225),width:ResponsiveScreen.normalize(180),flexDirection:'column'}}>
                <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(20),
                    fontSize: ResponsiveScreen.normalize(22),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> Amount:<Text style={{ color: "gray" }}> {itemList.item.amount}</Text></Text>
                   <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(20),
                    fontSize: ResponsiveScreen.normalize(22),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> Order No.:<Text style={{ color: "gray" }}> {itemList.item.order_number}</Text></Text>
                </View>
                <View style={{height:ResponsiveScreen.normalize(225),width:ResponsiveScreen.normalize(220),flexDirection:'column'}}>
                <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(0),
                    fontSize: ResponsiveScreen.normalize(22),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> State.:<Text style={{ color: "gray" }}> {itemList.item.status}</Text></Text>
                   <Text style={{
                    marginTop: ResponsiveScreen.normalize(20),
                    marginLeft: ResponsiveScreen.normalize(0),
                    fontSize: ResponsiveScreen.normalize(21),
                    color: "#192570",
                    fontWeight: "bold",
                  }}> End Date:<Text style={{ color: "gray" ,}}> 2022/3/12</Text></Text>
                </View>
                </View>
                
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
    marginTop: ResponsiveScreen.normalize(25),
    width: ResponsiveScreen.normalize(600),
    height: ResponsiveScreen.normalize(200),
    // textAlign: "left",
    marginLeft:ResponsiveScreen.normalize(5),
    marginBottom:ResponsiveScreen.normalize(10),
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
  

})
export { mystyles};