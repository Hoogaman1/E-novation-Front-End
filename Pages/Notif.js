import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

// import { EvilIcons  , MaterialIcons  } from '@expo/vector-icons';
import { CheckBox } from "@rneui/themed";
// import TimeInput from '@tighten/react-native-time-input';
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
  Dimensions
} from "react-native";
import { styles3, styles2, btn } from "./styleSheets.js";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;

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

const Notif = (props) => {
  const [dummy, setDummy] = useState([]);
  // const [email, setEmail] = useState("");
  const navigation = useNavigation();

  var email = "ali@test.com";
  const [checked1, setChecked1] = useState(dummy.every_five_hour);
  const [checked2, setChecked2] = useState(dummy.every_hour);
  const [checked3, setChecked3] = useState(dummy.in_momment);
  const [checked4, setChecked4] = useState(dummy.sq_clock);
  const [mydata, setData] = useState("");

  const tokenAuth = global.TOKEN;
  // const obj = props.route.params.obj;
  // const { navigation } = props;
  // const [time, setTime] = useState('');
  //   const handleTimeChange = (time, validTime) => {
  //     if (!validTime) return;

  //     setTime(time);
  //   }
  const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  const [project, setProject] = useState([]);



  const setPost = () => {
    //   useEffect(() => {
    // }, [id_select]);
      axios({
        method: "PUT",
        url: "http://192.168.17.160:8000/USER/notif/",
        headers: {
          // 'Content-Type': "application/json",
          Authorization: "Token "+tokenAuth,
          // 'Accept': 'application/json'
        },
        data: {
          // every_hour: false,
          every_hour: checked1,
          every_five_hour: checked2,
          in_momment: checked3,
          sq_clock: checked4,
          
        },
      })
      // .then((response) => console.log(response.status))
      // .then(console.log('salam'))
      // .then((response) => {
      //   // console.log(response.data)
      //   if (response.status == "200") {
         
      //     // props.navigation.push({token:tokenAuth,obj:response.data});
      //     console.log("OOOOOOOOOOOOOOokkkkkkkkkkkkkkkkkkkkkkkKKKKKKKKKKKKKK")
      //   }
      //   })
        .catch((error) => console.log(error));
     };




  useEffect((props) => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url: "http://"+global.URl+"/USER/notif/",
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
      .then((Response) => setDummy(Response.data))
      .then((Response) => console.log(dummy))
      

      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles2.page}>
       <View style={styles3.topbox}>
        <Image
          source={require("../assets/app_ui2-13.png")}
          style={styles3.logo}
        />
        <TouchableOpacity
        onPress={() => {navigation.openDrawer({token:tokenAuth});}}
        >
         <Image
          source={require("../assets/app_ui2-11.png")}
          style={styles3.logo2}
        />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles2.butbox,
          {
            alignItems: "center",
            // backgroundColor: "red",
            width: ww,
            marginLeft: ww*0.5/100,
          },
        ]}
      >
        <Text
          style={{
            fontSize: ResponsiveScreen.normalize(50),
            color: "#f2ca30",
            marginTop: wh*15/100,
            fontFamily: "Roboto",
          }}
        >
          Notification Settings
        </Text>
        <View>
          {/* <FlatList
            data={dummy}
            renderItem={(itemList) => ( */}
              <View>
                <View
                  style={[
                    mystyles.card,
                    {
                      alignItems: "flex-start",
                      marginTop: wh*4/100,
                    },
                  ]}
                >
                  <CheckBox
                    center
                    title="After Each Update"
                    checked={checked1}
                    onPress={() => {setChecked1(!checked1),setChecked2(false),setChecked3(false),setChecked4(false);setPost()}}
                    
                  />
                </View>
                <View style={[mystyles.card, { alignItems: "flex-start" }]}>
                  <CheckBox
                    center
                    title="Once per Hour"
                    checked={checked2}
                    onPress={() => {setChecked2(!checked2),setChecked1(false),setChecked3(false),setChecked4(false);setPost()}}
                  />
                </View>
                <View style={[mystyles.card, { alignItems: "flex-start" }]}>
                  <CheckBox
                    center
                    title="Once after 5 Hours"
                    checked={checked3}
                // onPress={()=>{setSelect(itemList.item.id_number);setPost()}}>
                   
                    onPress={() => {setChecked3(!checked3),setChecked1(false),setChecked2(false),setChecked4(false);setPost()}}
                  />
                </View>
                <View style={[mystyles.card, { alignItems: "flex-start" }]}>
                  <CheckBox
                    center
                    title="Once per Day"
                    checked={checked4}
                    onPress={() => {setChecked4(!checked4),setChecked2(false),setChecked3(false),setChecked1(false);setPost()}}
                  />
                </View>
              </View>
            {/* )}
          /> */}
        </View>

        <View
          style={{
            // backgroundColor:'red',
            height: wh*10/100,
            width: ww*70/100,
            padding: ww*10/100,
          }}
        >
          <FlatList
            data={project}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  },
                ]}
              >
                <Text key={item.id}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Notif;

const mystyles = StyleSheet.create({
  card: {
    marginLeft: ww*0/100,
    // marginVertical:"10%",
    fontFamily: "Roboto",
    fontSize: ResponsiveScreen.normalize(60),
    marginTop: wh*1/100,
    // marginStart:35,
    // paddingStart:15,
    width: ww*70/100,
    height: wh*6/100,
    textAlign: "left",
    lineHeight: 50,
    borderRadius: ww*2/100,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
export { mystyles };
