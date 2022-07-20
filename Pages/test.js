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
import Svg, {
  Circle,
  Ellipse,
  G,
  // Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  // Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";
import { styles, styles2, btn, styles3 } from "./styleSheets.js";

const PhotoAlbum = (props) => {
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
  //   const { navigation } = props;
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  //   const obj = props.route.params.obj;
  //   const [dummy, setDummy] = useState([]);
  //   const tokenAuth = props.route.params.token;
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

  return (
    <View style={styles3.page}>
      <View style={styles3.topbox}>
        <View>
          <Image
            source={require("../assets/app_ui2-13.png")}
            style={styles3.logo}
          />
        </View>
        <View>
          <Image source={require("../assets/app_ui2-11.png")} />
        </View>
      </View>
      <View style={[styles3.butbox, { alignItems: "center" }]}>
        <View
          style={[
            styles3.workbox,
            {
              alignItems: "center",
              flexDirection: "column",
              //   backgroundColor: "red",
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
                fontSize: ResponsiveScreen.normalize(75),
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
          ></View>
        </View>

        <View>
          <View style={[styles3.barbox, { backgroundColor: "gray" }]}>
            <Svg
              width={ResponsiveScreen.normalize(2600)}
              height={ResponsiveScreen.normalize(600)}
            >
              <Rect
                x={ResponsiveScreen.normalize(10)}
                y={ResponsiveScreen.normalize(200)}
                width={ResponsiveScreen.normalize(120)}
                height={ResponsiveScreen.normalize(250)}
                fill="yellow"
                // strokeWidth="3"
                // stroke="rgb(0,0,0)"
              />
              <Circle
                cx={ResponsiveScreen.normalize(57)}
                cy={ResponsiveScreen.normalize(200)}
                r={ResponsiveScreen.normalize(50)}
                fill="red"
              />
              <Polygon
                points="40,5 70,80 25,95"
                fill="lime"
                stroke="purple"
                strokeWidth="1"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PhotoAlbum;
