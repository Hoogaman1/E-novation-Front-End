import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Pages/Login";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from 'react-native-reanimated';
import { useRoute } from "@react-navigation/native";

// import { Modalize } from 'react-native-modalize';

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
import LoginPage from "../Pages/Login";
const wf = Dimensions.get("screen").fontScale;
const ws = Dimensions.get("screen").scale;
const wh = Dimensions.get("screen").height;
const ww = Dimensions.get("screen").width;
ResponsiveScreen.init(720, 1600);

// const modalizeRef = useRef < Modalize > (null);

// const onOpen = () => {
//   modalizeRef.current?.open();
// };

const OpenProject = (props) => {






    // const [email, setEmail] = useState("");
    const route = useRoute();
    // const [dummy, setDummy] = useState([]);
    const tokenAuth = global.TOKEN;
    console.log(tokenAuth)
    const navigation = useNavigation();
    // const { navigation } = props;

    const [mydata, setData] = useState("");
    const onCChange = (textValue) => setCode(textValue);

    const [dummy, setDummy] = useState([]);




    const Alert = [
        {
            active: true,
            Project: 1,
            Id: 11,
            state: 111,
            dec: 'Lorem ipsum dolor sit amet. ',
            time: 'Sat 12:30',
        },
        {
            active: true,
            Project: 2,
            Id: 22,
            state: 222,
            dec: 'Lorem ipsum dolor sit amet. ',
            time: 'Sun 15:38',
        },
        {
            active: true,
            Project: 3,
            Id: 33,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. ',
            time: 'Fri 08:28',
        },
        {
            active: true,
            Project: 4,
            Id: 44,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. ',
            time: 'Mon 10:45',
        },
        {
            active: true,
            Project: 5,
            Id: 55,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. ',
            time: 'Wen 07:00',
        },
        {
            active: true,
            Project: 6,
            Id: 66,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. '
        },
        {
            active: true,
            Project: 7,
            Id: 77,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. '
        },
        {
            active: true,
            Project: 8,
            Id: 88,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. '
        },
        {
            active: true,
            Project: 9,
            Id: 99,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. '
        },
        {
            active: true,
            Project: 10,
            Id: 110,
            state: 'Lorem ipsum dolor sit amet. ',
            dec: 'Lorem ipsum dolor sit amet. '
        },
    ];


    // const [id_select, setSelect] = useState("");


    // const setPost = (props) => {

    //     //   useEffect(() => {
    //     // }, [id_select]);
    //     axios({
    //         method: "POST",
    //         url: "http://" + global.UURL + "/USER/opproject/",
    //         headers: {
    //             // 'Content-Type': "application/json",
    //             Authorization: "Token " + global.TOKEN,
    //             // 'Accept': 'application/json'
    //         },
    //         data: {
    //             id_number: id_select,
    //         },
    //     })
    //         // .then((response) => console.log(response.status))
    //         // .then(console.log('salam'))
    //         .then((response) => {
    //             // console.log(response.data)
    //             if (response.status == "202") {

    //                 // props.navigation.push({token:tokenAuth,obj:response.data});
    //                 global.OBJ = response.data;


    //                 props.navigation.navigate('Bearing', { token: tokenAuth, obj: global.OBJ });
    //             }
    //         })
    //         .catch((error) => console.log(error));
    // }
    // const setNPost = () => {
    //     props.navigation.navigate('Notif', { token: tokenAuth });
    // }
    // const setHPost = () => {
    //     props.navigation.navigate('History', { token: tokenAuth });
    // }
    const setAlert = () => {
        props.navigation.navigate('Alert', { token: tokenAuth });
    }
    // useEffect(() => {
    //     const tokenAuth = global.TOKEN;
    //     // const { navigation } = props;
    //     // const tokenAuth = props.navigation.navigate.getParam('token',null)
    //     // useEffect(() => {
    //     // }, [id_select]);
    //     // console.log(tokenAuth);
    //     // const dummyData = []
    //     axios({
    //         method: "get",
    //         url: "http://" + global.UURL + "/USER/opproject/",
    //         // params:{
    //         //   email:email,
    //         // },
    //         headers: {
    //             // 'Content-Type': "application/json",
    //             Authorization: "Token " + tokenAuth,
    //             // 'Accept': 'application/json'
    //         },
    //         data: {
    //             // verification_code: code,
    //         },
    //     })
    //         .then((Response) => setDummy(Response.data))

    //         .catch((error) => console.log(error));
    // }, []);

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
                    <FontAwesome name="bell" size={25} color="#f2ca30"
                        style={{
                            marginLeft: ww * 18 / 100,
                            marginTop: wh * -1 / 100
                        }} />
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

            {/* <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity> */}

            {/* <Modalize ref={modalizeRef}>...your content</Modalize> */}

            <View style={[styles3.butbox]}>
                <View
                    style={[
                        styles3.workbox,
                        { alignItems: "center", flexDirection: "column", width: ww },
                    ]}
                >
                    <View
                        style={{
                            // backgroundColor: "blue",
                            width: ww,
                            borderRadius: 20,
                            height: wh * 11 / 100,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: ResponsiveScreen.normalize(46),
                                fontFamily: "Roboto",
                                color: "#f2ca30",
                                marginTop: wh * 5 / 100,
                                marginLeft: ww * 14 / 100,
                                // marginBottom: wh*1/100,
                            }}
                        >
                            Alert Page
                        </Text>
                    </View>
                    <View
                        style={{
                            // backgroundColor: 'red',
                            width: ww * 82 / 100,
                            height: wh * 65 / 100,
                            marginTop: wh * 1 / 100,
                            // elevation:3,
                            borderRadius: 20,
                            flexDirection: "row",
                        }}
                    >
                        <FlatList
                            data={Alert}
                            style={{ width: ww * 81 / 100, paddingHorizontal: ww * -0 / 100, height: wh * 63 / 100 }}
                            renderItem={(itemList) => (
                                <TouchableOpacity
                                    style={[mystyles.card, { marginTop: wh * 0.7 / 100 }]}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{
                                            width: ww * 39.5 / 100,
                                            height: wh * 4 / 100,
                                            marginLeft: ww * 2 / 100,
                                            // backgroundColor: "green",
                                            marginTop: wh * .5 / 100,
                                            justifyContent: 'center'
                                        }}>
                                            {/* <Text style={{
                                            fontWeight: '600',
                                            fontFamily: 'sans-serif',
                                            color: '#525151',
                                            // backgroundColor: "green",
                                            fontSize: ResponsiveScreen.normalize(32),
                                        }}>

                                        </Text> */}
                                            <View style={{ backgroundColor: '#f00001', width: ww * 24 / 100, justifyContent: 'center', alignItems: 'center', borderRadius: ww && wh * 1 / 100 }}><Text style={{ paddingHorizontal: ww * .5 / 100, paddingVertical: wh * .8 / 100, color: '#fff', fontWeight: '600', fontSize: 12.5 }}> New Massege </Text></View>

                                        </View>
                                        <View style={{
                                            width: ww * 30 / 100,
                                            height: wh * 3.5 / 100,
                                            paddingLeft: ww * 2 / 100,
                                            // backgroundColor: "yellow",
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                fontWeight: '600',
                                                // fontFamily: 'sans-serif',
                                                color: '#505050',
                                                // backgroundColor: "green",
                                                fontSize: ResponsiveScreen.normalize(38),
                                                textAlign: 'right'
                                            }}>
                                                arian
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: ww * 30 / 100,
                                        height: wh * 3 / 100,
                                        paddingLeft: ww * 4 / 100,
                                        // backgroundColor: "yellow",
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontWeight: '400',
                                            // fontFamily: 'sans-serif',
                                            color: '#909090',
                                            // backgroundColor: "green",
                                            fontSize: ResponsiveScreen.normalize(30),
                                        }}>
                                            {itemList.item.time}
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>


                                        <View style={{
                                            width: ww * 67 / 100,
                                            height: wh * 3 / 100,
                                            paddingLeft: ww * 4 / 100,
                                            // backgroundColor: "yellow",
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                fontWeight: '600',
                                                // fontFamily: 'sans-serif',
                                                color: '#525151',
                                                // backgroundColor: "green",
                                                fontSize: ResponsiveScreen.normalize(30),
                                            }}>
                                                {itemList.item.dec}
                                            </Text>
                                        </View>

                                        <View  >
                                            {itemList.item.alarm === true ? (
                                                <Text></Text>
                                            ) : (
                                                <FontAwesome name="bell" size={19} color="#f2ca30" style={{ fontWeight: "bold", marginLeft: ww * 0 / 100, marginTop: wh * -0 / 100 }} />
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>

            </View>
        </View >
    );

};

export default OpenProject;


const mystyles = StyleSheet.create({

    card: {
        fontFamily: "Roboto",
        marginTop: wh * 10 / 100,
        width: ww * 75 / 100,
        height: wh * 12 / 100,
        // textAlign: "left",
        marginLeft: ww * 4 / 100,
        marginBottom: wh * 0.7 / 100,
        borderRadius: ww * 2 / 100,
        // elevation: 6,
        // backgroundColor: "gray",
        // shadowOffset: { width: 2, height: 2 },
        // shadowColor: "black",
        // shadowOpacity:3,
        // shadowRadius: 3,
        elevation: 4,
        backgroundColor: "#fff",
        // backgroundColor: "#aaa",
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        // alignItems:'stretch'

    },


})
export { mystyles };
