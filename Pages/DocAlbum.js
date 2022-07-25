import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import ResponsiveScreen from "react-native-auto-responsive-screen";
ResponsiveScreen.init(720, 1600);
import { useNavigation } from '@react-navigation/native';

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
} from "react-native";
import { styles, styles2, btn, styles3 } from "./styleSheets.js";

const PhotoAlbum = (props) => {
  const navigation = useNavigation();

  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: '1- Material supply',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: '2- Cutting',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: '3- Machining',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d73',
  //     title: '4- Heat treatment/coating/painting and plating',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d74',
  //     title: '5- Quality control',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d75',
  //     title: '6- Packaging',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d76',
  //     title: '7- Ready for delivery',
  //   },
  // ];
  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  // );
  // const Item = ({ title }) => (
  //   <View >
  //     <Text >{title}</Text>
  //   </View>
  // );

  // const [email, setEmail] = useState("");
  var email = "ali@test.com";
  // const { navigation } = props;
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  // const obj = props.route.params.obj;
  const obj = global.OBJ;

  const [dummy, setDummy] = useState([]);
  const tokenAuth = props.route.params.token;
  // console.log(tokenAuth)
  console.log("albummmmmmmmm");
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
  const  setPost = () => {
    // console.log(obj[0][0])
    props.navigation.navigate('Bearing',{token:tokenAuth,obj:obj});
  }
  const  setAPost = () => {
    // console.log(obj[0][0])
    props.navigation.navigate('PhotoAlbum',{token:tokenAuth,obj:obj});
  }
  useEffect(() => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url: "http://127.0.0.1:8000/BIGADMIN/listdoc/" + obj.id,
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
      .then((Response) => setDummy(Response.data))
      .then(console.log(dummy))
      .then(setDum)
      .catch((error) => console.log(error));
  }, []);
  const setDum = () => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url: "http://127.0.0.1:8000/BIGADMIN/listalbum/" + obj.id,
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
      .then(console.log("lalalala2"))
      .then(console.log(dummy))
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles3.page}>
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
      <View style={[styles3.butbox, { alignItems: "center" }]}>
        
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              // backgroundColor: "red",
            },
          ]}
        >
          <View
            style={{
              width: ResponsiveScreen.normalize(600),
              borderRadius: 20,
              height: ResponsiveScreen.normalize(200),
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: ResponsiveScreen.normalize(60),
                color: "#f2ca30",
                marginTop: ResponsiveScreen.normalize(50),
                marginLeft: ResponsiveScreen.normalize(50),
                marginBottom: ResponsiveScreen.normalize(25),
              }}
            >
              Documents
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: "pink",
              width: ResponsiveScreen.normalize(600),
              height: ResponsiveScreen.normalize(1150),
              borderRadius: 20,
              // flexDirection: "row",
            }}
          >
          
            <FlatList
              data={dummy}
              numColumns={2}
              renderItem={(itemList) => (
                <View >
                <TouchableOpacity
                  //   onPress={() => {props.navigation.navigate("Bearing",{token:tokenAuth});
                  style={{
                    // backgroundColor: "pink",
                    width: ResponsiveScreen.normalize(270),
                    height: ResponsiveScreen.normalize(270),
                    marginTop:ResponsiveScreen.normalize(30),
                    marginLeft:ResponsiveScreen.normalize(30),
                    // borderRadius: 50,
                    // flexDirection: "row",
                  }}
                  //   {setPost};
                  //   // console.log(id_select)
                  // }}
                  // onPress={()=>{setSelect(itemList.item)}}
                >
                    
                    <Image
                      source={{ uri: itemList.item.att_file }}
                      style={{ width: ResponsiveScreen.normalize(270), height: ResponsiveScreen.normalize(270),borderRadius:ResponsiveScreen.normalize(30) }}
                    />
                  
        
                </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>

        <View>
        <View style={styles3.barbox}>
          <TouchableOpacity
          onPress={setAPost}>
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
              <Text
                style={styles3.bartxt}
                // onPress={setPost}
              >
                Photo Album
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles3.barbut22}
          onPress={setPost}>
            <View>
              <Text
                style={[
                  styles3.bartxt,
                  {
                    marginTop: ResponsiveScreen.normalize(140),
                    marginLeft: ResponsiveScreen.normalize(-66),
                  },
                ]}
              >
                Project Process
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
      </View>
    </View>
  );
};
export default PhotoAlbum;

// const styles = StyleSheet.create({

{
  /* <Button style={{
          backgroundColor: isActive ? 'yellow' : 'yellow',
          color: isActive ? 'yellow' : 'yellow',
        }} onPress={() =>
          {handleClick}
      } title="Press Me"></Button> */
}
//   page:{
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//     justifyContent: 'center',
//     height: '100%',
//     width: '100%',
//     flexDirection: 'column',
//     flexDirection: 'row',
//     // flexWrap: 'wrap',
//     flex: 1
//   },
//   fields: {
//       height: 50,
//       width: '100%',
//       padding:10,
//       backgroundColor: 'white',
//       textAlign:'center',
//       borderRadius:30,
//       marginTop: 10,
//   },
//   Button : {
//       // justifyContent:'center',
//       // alignItems:'center',
//       // borderColor:'#fff',
//       backgroundColor:'blue',
//       // color :"red",
//       // Color:'blue',
//       // underlayColor:'#fff',
//       borderRadius:25,
//       height: 50,
//       width: '100%',
//       padding:10,
//       textAlign:'center',
//       marginTop:1,
//       // Align:'left',
//       // flex:0,
//   },
//   box: {
//     marginTop: '70%',
//     height: '50%',
//     width: '70%',
//     padding:10,
//     // backgroundColor:"green"
// },
// ButtonText:{
//   color:'white',
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
