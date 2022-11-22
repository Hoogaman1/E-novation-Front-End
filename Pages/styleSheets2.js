// import React,{ useState } from "react";
// import axios from 'axios';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { StyleSheet, Dimensions } from "react-native";
  import ResponsiveScreen from "react-native-auto-responsive-screen";
  ResponsiveScreen.init(720, 1600);
  ResponsiveScreen.init(720, 1600);
  const wf = Dimensions.get("screen").fontScale;
  const ws = Dimensions.get("screen").scale;
  const wh = Dimensions.get("screen").height;
  const ww = Dimensions.get("screen").width;
  // console.log(win)
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Roboto",
      fontSize: ResponsiveScreen.fontSize(20),
      alignItems: "center",
      backgroundColor: "#f2ca30",
      // backgroundColor: "#f2ca30",
      // justifyContent: "center",
      height: wh,
      width: ww,
      flexDirection: "column",
      flexDirection: "row",
      // flexWrap: 'wrap',
      flex: 1,
    },
    fields: {
      // fontFamily: "Roboto",
      fontSize: ResponsiveScreen.fontSize(30),
      position: "relative",
      height: wh * 3.5 / 100,
      width:'80%',
      // width: ww*60/100,
      justifyContent:'center',
      paddingHorizontal: ResponsiveScreen.normalize(12),
      backgroundColor: "#fff",
      // textAlign: "center",
      borderRadius: ResponsiveScreen.normalize(10),
      // marginTop: ResponsiveScreen.normalize(-120),
      // marginLeft: '2.5%',
      // marginRight: wp('5%'),
    },
    text: {
      // fontFamily: "Roboto",ddddddddddd
      fontSize: ResponsiveScreen.fontSize(25),
      // marginLeft: ww * 3 / 100,
      // marginTop: wh * 0.5 / 100,
      // backgroundColor:'gray',
      width:'100%'
    },
    Button: {
      // fontFamily: "Roboto",
  
      justifyContent: "center",
      alignItems: "center",
      // borderColor:'#fff',
      // backgroundColor: "#192570",
      backgroundColor: '#192570',
      // color :"red",
      // Color:'blue',
      // underlayColor:'#fff',
      borderRadius: ResponsiveScreen.normalize(10),
      height: wh * 5 / 100,
      // width: ww * 15 / 100,
      // padding: 0,
      textAlign: "center",
      // marginLeft: ww * 2 / 100,
      // Align:'left',
      // flex:0,
    },
    box: {
      fontFamily: "Roboto",
      // marginTop: wh * 15 / 100,
      // height:hp("45%"),
      // width: hp("32%"),
      // marginLeft:wp("10%"),
      // marginRight:wp("10%"),
      // paddingHorizontal: wh * 3 / 100,
      height: '100%',
      width: '100%',
      alignItems:'center'
      // backgroundColor:"red"
    },
    ButtonText: {
      // fontFamily: "Roboto",
      // alignItems:'center',
      color: "white",
      // height:"100%",
      // fontSize:ResponsiveScreen.fontSize(25),
      // textAlign: "center",
      // lineHeight:30,
  
      fontSize: ResponsiveScreen.fontSize(25),
      // fontSize: hp("1.4"),
      // marginTop: ws/100*200,
      // marginBottom: '5%',
      // paddingLeft: ws*700/100,
      // paddingBottom: wh * 0.5 / 100,
      // backgroundColor:"red"
    },
    butbox: {
      // paddingHorizontal: ResponsiveScreen.normalize(20),
      // fontFamily: "Roboto",
      justifyContent: "space-between",
      marginTop: ww * 1 / 100,
      height: wh * 10 / 100,
      width: '80%',
      // paddingHorizontal: ww * 1 / 100,
      flexDirection: "row",
      // backgroundColor:"green",
      // flexDirection: 'column',
    },
    logo: {
      // fontFamily: "Roboto",
      // backgroundColor:"red",
      width: '100%',
      height: '70%',
      position:'absolute',
      // left:'-1%'
      // marginRight: wp('30%'),
      // marginBottom: wh * 3 / 100,
    },
    
  });
  
  export { styles };
  
  const styles2 = StyleSheet.create({
    logo: {
      height: hp("6%"),
      // width:50,
      width: ww / 1.7,
      // marginRight:30 ,
      // marginBottom:20 ,
      // marginTop:50 ,
      // marginLeft:30 ,
      // backgroundColor:'blue',
      resizeMode: "cover",
    },
    page: {
      fontFamily: "Roboto",
  
      // alignItems: 'center',
      // backgroundColor: "red",
      justifyContent: "center",
      height: hp("100%"),
      width: ww,
      flexDirection: "column",
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
    },
    topbox: {
      fontFamily: "Roboto",
  
      alignItems: "center",
      // justifyContent: 'flex-end',
      // flexDirection: 'column',
  
      flexDirection: "row",
      justifyContent: "space-between",
  
  
      marginTop: hp("4%"),
      height: hp("9%"),
      // width: '95%',
      width: ww,
  
      // padding:10,
      // backgroundColor:"green"
    },
    butbox: {
      fontFamily: "Roboto",
  
      borderRadius: hp("50%"),
      height: hp("100%"),
      width: hp("40%"),
      marginLeft: wp("-19%"),
    },
    butbox2: {
      fontFamily: "Roboto",
  
      borderRadius: 50,
      backgroundColor: "white",
      height: "100%",
      width: "80%",
      marginLeft: -82,
    },
    card: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: 20,
      marginStart: 50,
      paddingStart: 15,
      width: 280,
      height: 60,
      textAlign: "left",
      lineHeight: 50,
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    carda: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "20%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    cardb: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "24%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    cardc: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "24%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    cardd: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "21%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    carde: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "25%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    cardf: {
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: -27,
      marginStart: "25%",
      paddingStart: 1,
      width: 200,
      height: 60,
      textAlign: "left",
      lineHeight: 30,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    cardg: {
      padding: 15,
      color: "gray",
      fontFamily: "Roboto",
      fontSize: 18,
      marginTop: 20,
      marginStart: 35,
      paddingStart: 11,
      width: 330,
      height: 110,
      textAlign: "left",
      lineHeight: 66,
      borderRadius: 6,
      elevation: 3,
      backgroundColor: "#fff",
      shadowOffset: { width: 3, height: 3 },
      shadowColor: "#111",
      shadowOpacity: 3,
      shadowRadius: 3,
    },
  
    icon1: {
      marginTop: hp("-7%"),
      marginBottom: hp("4%"),
      marginLeft: wp("16%"),
    },
    icon2: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
    icon3: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
    icon4: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
    icon5: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
    icon6: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
    icon7: {
      marginTop: hp("-7%"),
      marginBottom: hp("7%"),
      marginLeft: wp("16%"),
    },
  });
  const btn = StyleSheet.create({
    btn: {
      fontFamily: "Roboto",
  
      fontWeight: "bold",
      padding: 10,
      textAlign: "center",
      fontSize: 17,
      transform: [{ rotate: "90deg" }],
      color: "#fff",
      marginTop: -400,
      marginLeft: 420,
      // borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      backgroundColor: "#f2c92f",
      width: 200,
      height: 50,
    },
    btn2: {
      fontFamily: "Roboto",
  
      fontWeight: "bold",
      padding: 10,
      textAlign: "center",
      fontSize: 15,
      transform: [{ rotate: "90deg" }],
      color: "#fff",
      marginTop: -200,
      marginLeft: 420,
      borderBottomRightRadius: 50,
      // bsorderBottomRightRadius: 20,
      backgroundColor: "#192571",
      width: 200,
      height: 50,
    },
    trapezoid1: {
      fontFamily: "Roboto",
      backgroundColor: "red",
      zIndex: 0,
      marginTop: hp("3%"),
      marginLeft: wp("3%"),
      paddingTop: 15,
      textAlign: "center",
      fontSize: 13,
      color: "#fff",
      transform: [{ rotate: "90deg" }],
      width: 250,
      height: 0,
      borderTopWidth: 55,
      borderTopColor: "#f2c92f",
      borderLeftWidth: 70,
      borderLeftColor: "transparent",
      borderRightWidth: 0,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
    trapezoid2: {
      fontFamily: "Roboto",
  
      zIndex: 0,
      marginTop: "15%",
      marginLeft: "143%",
      paddingTop: 15,
      paddingLeft: "1%",
      textAlign: "left",
      fontSize: 13,
      color: "#fff",
      transform: [{ rotate: "90deg" }],
      width: 250,
      height: 0,
      borderTopWidth: 55,
      borderTopColor: "#192571",
      borderLeftWidth: 0,
      borderLeftColor: "transparent",
      borderRightWidth: 70,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
    //   btna: {
    //     fontWeight: 'bold',
    //     padding:10,
    //     textAlign: 'center',
    //     fontSize:17,
    //     transform: [{ rotate: '90deg'}],
    //     color: '#fff',
    //     marginTop:-480,
    //     marginLeft: 420,
    //     // borderTopLeftRadius: 50,
    //     borderBottomLeftRadius: 50,
    // backgroundColor: '#f2c92f',
    // width: 150,
    // height: 50,
    //   },
    btnb: {
      fontFamily: "Roboto",
  
      paddingTop: hp("0%"),
      paddingLeft: wp("0%"),
      textAlign: "center",
      fontSize: hp("1.7%"),
      transform: [{ rotate: "90deg" }],
      color: "#000",
      marginTop: hp("-33%"),
      marginLeft: wp("125%"),
      // borderTopLeftRadius: 50,
      // borderBottomRightRadius: 50,
      backgroundColor: "#e8e4e3",
      width: wp("35%"),
      height: hp("7%"),
    },
    btnbb: {
      fontFamily: "Roboto",
  
      paddingTop: 15,
      paddingLeft: 5,
      textAlign: "center",
      fontSize: 14,
      transform: [{ rotate: "90deg" }],
      color: "#000",
      marginTop: "-113%",
      marginLeft: "148%",
      // borderTopLeftRadius: 50,
      // borderBottomRightRadius: 50,
      backgroundColor: "#f2c92f",
      width: 150,
      height: 55,
    },
    btnc: {
      fontFamily: "Roboto",
  
      fontWeight: "bold",
      padding: 10,
      textAlign: "center",
      fontSize: 17,
      transform: [{ rotate: "90deg" }],
      color: "#fff",
      marginTop: 500,
      marginLeft: 420,
      // borderTopLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: "#f2c92f",
      width: 150,
      height: 50,
    },
    btn4: {
      fontFamily: "Roboto",
  
      padding: 10,
      marginTop: -170,
      marginLeft: -120,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      // bsorderBottomRightRadius: 20,
      backgroundColor: "#f2c92f",
      width: 20,
      height: 170,
    },
    btn3: {
      fontFamily: "Roboto",
  
      padding: 10,
      marginTop: -450,
      marginLeft: -120,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: "#192571",
      width: 20,
      height: 322,
    },
  
    trapezoida: {
      position: "absolute",
      fontFamily: "Roboto",
      // backgroundColor:'red',
      marginTop: hp("-52%"),
      marginLeft: wp("39%"),
      paddingLeft: wp("27%"),
      paddingTop: hp("0%"),
      paddingRight: wp("2%"),
      textAlign: "center",
      fontSize: hp("1.7%"),
      color: "#fff",
      transform: [{ rotate: "90deg" }],
      width: wp("20%"),
      height: hp("2%"),
      borderTopWidth: 55,
      borderTopColor: "#f2c92f",
      borderLeftWidth: 70,
      borderLeftColor: "transparent",
      borderRightWidth: 0,
      borderRightColor: "transparent",
      borderStyle: "solid",
      borderBottomStartRadius: 50,
    },
    trapezoidb: {
      fontFamily: "Roboto",
  
      marginTop: wp("-30%"),
      marginLeft: wp("122%"),
      paddingTop: hp("1%"),
      paddingRight: wp("10%"),
      textAlign: "center",
      fontSize: hp("1.7%"),
      color: "#fff",
      transform: [{ rotate: "90deg" }],
      width: wp("50%"),
      height: hp("2%"),
      borderTopWidth: 55,
      borderTopColor: "#f2c92f",
      borderLeftWidth: 0,
      borderLeftColor: "transparent",
      borderRightWidth: 70,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
    trapezoidc: {
      fontFamily: "Roboto",
  
      marginTop: "-165%",
      marginLeft: "143%",
      paddingTop: 15,
      paddingLeft: "10%",
      textAlign: "center",
      fontSize: 14,
      color: "#000",
      transform: [{ rotate: "90deg" }],
      width: 190,
      height: 0,
      borderTopWidth: 55,
      borderTopColor: "#e8e4e3",
      borderLeftWidth: 70,
      borderLeftColor: "transparent",
      borderRightWidth: 0,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
    trapezoidd: {
      fontFamily: "Roboto",
  
      marginTop: "-66%",
      marginLeft: "143%",
      paddingTop: 15,
      paddingRight: "20%",
      textAlign: "center",
      fontSize: 14,
      color: "#fff",
      transform: [{ rotate: "90deg" }],
      width: 190,
      height: 0,
      borderTopWidth: 55,
      borderTopColor: "#f2c92f",
      borderLeftWidth: 0,
      borderLeftColor: "transparent",
      borderRightWidth: 70,
      borderRightColor: "transparent",
      borderStyle: "solid",
    },
  });
  const styles3 = StyleSheet.create({
    page: {
      fontFamily: "Roboto",
      fontSize: ResponsiveScreen.fontSize(17),
      alignItems: 'center',
      backgroundColor: "#fff",
      // justifyContent: "center",
      // height: wh,
      // width: ww,
      flexDirection: "column",
      // backgroundColor: "red",
      flex: 1,
      // flexDirection: "row",
      // flexWrap: 'wrap',
    },
    topbox: {
      marginTop:'10%',
      fontFamily: "Roboto",
      // alignItems: "center",
      // justifyContent: 'flex-end',
      // flexDirection: 'column',
      flexDirection: "row",
      // marginTop: wh * 0 / 100,
      // marginBottom: wh * 4 / 100,
      justifyContent: "space-between",
      alignItems: 'center',
      // backgroundColor: 'blue',
      // marginTop: "15%",
      // height: wh * 7 / 100,
      // width: '95%',
      width: ww * 100 / 100,
      // paddingTop:wh/5.9,
      // padding:'30%',
      // flex: 2,
      // top:'6%',
      top:ww*6/100,
      position: 'absolute',
      zIndex:999,
  
    },
    butbox: {
      // fontFamily: "Roboto",
      flexDirection: "row",
      // borderRadius: 20,
      // height: wh * 89 / 100,
      // width: ww * 100 / 100,
      // marginLeft: wp("-19%"),
      // backgroundColor: 'red',
      marginTop: wh * 17 / 100,
      // flex: 3,
      // position: 'absolute',
      // bottom: 1,
    },
    workbox: {
      fontFamily: "Roboto",
      flexDirection: "column",
      // borderRadius: 20,
      // height: wh * 98 / 100,
      flex: 8,
      // width: ResponsiveScreen.normalize(600),
      // marginLeft: wp("-19%"),
  
    },
    barbox: {
      fontFamily: "Roboto",
      flexDirection: "column",
      borderRadius: 20,
      height: wh * 70 / 100,
      width: ResponsiveScreen.normalize(130),
      // position:'absolute',
      // top:wh*30/100,
      // left:-180,
      // zIndex:999
      // marginLeft: wp("-19%"),
      // marginTop: wh * 5 / 100,
      // backgroundColor: "green",
    },
    notif: {
      backgroundColor: "red",
      // width: (ww * 5) / 100,
      height: (ww * 4) / 100,
      borderRadius: (ww * 50) / 100,
      position: "absolute",
      right: (ww * -.5) / 100,
      bottom: (wh * 1.3) / 100,
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: ResponsiveScreen.fontSize(18),
      fontWeight: "500",
    },
    logo: {
      height: wh * 5 / 100,
      // width:50,
      width: ww * 50 / 100,
      // marginRight:30 ,
      // marginBottom:20 ,
      // marginTop: wh * 8 / 100,
      // marginLeft:30 ,
      // flex: 4,
      // backgroundColor: 'blue',
      resizeMode: 'cover',
    },
    logo2: {
      height: ResponsiveScreen.normalize(100),
      // width:50,
      width: ResponsiveScreen.normalize(20),
      marginRight: ResponsiveScreen.normalize(60),
      // marginBottom:20 ,
      marginTop: ResponsiveScreen.normalize(-10),
      // marginLeft:30 ,
      // backgroundColor:'blue',
      resizeMode: "cover",
    },
    barbut1: {
      fontFamily: "Roboto",
      backgroundColor: "#f2ca30",
      transform: [{ rotate: "90deg" }],
      width: wh / 5,
      height: ww / 5,
      marginTop: wh / 5.2,
      marginLeft: -(ww / 8.2),
      justifyContent:'center'
    },
    barbut2: {
      fontFamily: "Roboto",
      backgroundColor: "#e5e5e5",
      transform: [{ rotate: "90deg" }],
      width: wh / 5,
      height: ww / 5,
      marginTop: wh / 9.1,
      marginLeft: -(ww / 8.2),
      justifyContent:'center'
    },
    barbut3: {
      fontFamily: "Roboto",
      backgroundColor: "#f2ca30",
      transform: [{ rotate: "90deg" }],
      width: wh / 5,
      height: ww / 5,
      marginTop: wh / 9.1,
      marginLeft: -(ww / 8.2),
      justifyContent:'center'
    },
    bartxt: {
      // fontFamily: "Roboto",
      fontSize:ResponsiveScreen.fontSize(23),
      transform: [{ rotate: "90deg" }],
      width: ResponsiveScreen.normalize(250),
      height: ResponsiveScreen.normalize(50),
      marginTop: ResponsiveScreen.normalize(-150),
      marginLeft: ResponsiveScreen.normalize(-45),
      color: "#fff"
    },
    workcard: {
      // backgroundColor: "gray",
      fontFamily: "Roboto",
      width: ResponsiveScreen.normalize(450),
      height: ResponsiveScreen.normalize(100),
      marginBottom: ResponsiveScreen.normalize(48),
      borderRadius: ResponsiveScreen.normalize(18),
      flexDirection: "row",
      elevation: 4,
      backgroundColor: "#fff",
      shadowOffset: { width: 3, height: 3 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 3,
      alignItems: 'center'
    },
    workcardN: {
      // backgroundColor: "gray",
      fontFamily: "Roboto",
      width: ResponsiveScreen.normalize(450),
      height: ResponsiveScreen.normalize(100),
      marginBottom: ResponsiveScreen.normalize(25),
      borderRadius: ResponsiveScreen.normalize(18),
      flexDirection: "row",
      elevation: 4,
      backgroundColor: "#fff",
      shadowOffset: { width: 3, height: 3 },
      shadowColor: "#333",
      shadowOpacity: 0.3,
      shadowRadius: 3,
      alignItems: 'center'
    },
    workcard2: {
      // backgroundColor:"gray",
      fontFamily: "Roboto",
      width: ResponsiveScreen.normalize(550),
  
      height: ResponsiveScreen.normalize(120),
      marginBottom: ResponsiveScreen.normalize(25),
      marginLeft: ResponsiveScreen.normalize(35),
      borderRadius: ResponsiveScreen.normalize(18),
      flexDirection: "row",
      // elevation: 3,
      backgroundColor: "#fff",
      // shadowOffset: { width: 1, height: 1 },
      // shadowColor: "red",
      // shadowOpacity: 0.3,
      // shadowRadius: 1,
      zIndex: 3
    },
    container: {
      flex: 1,
      // backgroundColor:'red',
      // marginLeft: 10,
      // marginRight: 10,
      alignItems: 'center',
      justifyContent: "center",
      // marginTop:'-50%',
      // marginLeft:'-50%'
      // transform: [{ rotate: "180deg" }],
    },
    iconOnly: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: ResponsiveScreen.normalize(25),
    },
    txtworkcard: {
      // backgroundColor: "yellow",
      fontWeight: '500',
      // fontFamily: 'sans-serif-medium',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#525151',
      // fontFamily: "Roboto",
      width: ww * 55 / 100,
      // height: ResponsiveScreen.normalize(150),
      fontSize: ResponsiveScreen.normalize(27),
      // paddingTop: ResponsiveScreen.normalize(32),
      paddingLeft: ResponsiveScreen.normalize(40),
      borderRadius: 20,
    },
    checkline: {
      width: ResponsiveScreen.normalize(30),
      height: ResponsiveScreen.normalize(220),
      backgroundColor: "#192570",
      borderRadius: 100,
      marginHorizontal: ResponsiveScreen.normalize(50),
    },
    barbut11: {
      fontFamily: "Roboto",
      // backgroundColor: "#f2ca30",
      // transform: [{ rotate: "90deg" }],
      // width: ResponsiveScreen.normalize(60),
      // height: ResponsiveScreen.normalize(20),
      // marginTop: ResponsiveScreen.normalize(100),
      marginLeft: ResponsiveScreen.normalize(-9),
      justifyContent:'center',
      
    },
    barbut22: {
      fontFamily: "Roboto",
      backgroundColor: "#fafafa",
      // transform: [{ rotate: "90deg" }],
      width: ResponsiveScreen.normalize(115),
      height: ResponsiveScreen.normalize(280),
      marginTop: ResponsiveScreen.normalize(-21),
      marginLeft: ResponsiveScreen.normalize(23.5),
      // justifyContent:'center'
    },
    barbut33: {
      fontFamily: "Roboto",
      marginTop: ResponsiveScreen.normalize(0),
      marginLeft: ResponsiveScreen.normalize(20),
      justifyContent:'center'
    },
    barPA:{
      backgroundColor:'#fbfbfb',
      width:'100%',
      height:'33%',
      borderTopLeftRadius:(ww+wh)*5/200,
  
    },
    barDA:{
      backgroundColor:'#fbfbfb',
      width:'100%',
      height:'33%',
      borderBottomLeftRadius:(ww+wh)*5/200,
  
    },
    barPP:{
      backgroundColor:'#757575',
      width:'100%',
      height:'33%',
    },
  });
  const stylesAlF = StyleSheet.create({
    contentContainerStyle:{
      backgroundColor:'#fff',
      borderRadius:(ww+wh)*1/200,
      width:ww*65/100,
      height:ww*35/100
    },
    contentStyle:{
      backgroundColor:'transparent',
      borderRadius:50,
    // marginTop:100,
    // paddingTop:100,
    },
    actionContainerStyle:{
      backgroundColor:'transparent',
      borderRadius:50
    },
  
    titleStyle:{
      color:'#f2ca30',
      fontSize:ResponsiveScreen.fontSize(80),
      // marginTop:"-2%",
      fontWeight:'500',
      backgroundColor:'transparent',
      marginTop:wh*-3.5/100
    },
    messageStyle:{
      color:'#575757',
      fontSize:ResponsiveScreen.fontSize(23),
      marginBottom:0,
      
    },
    cancelButtonStyle:{
      width:ww*40/100,
      height:ww*6.5/100,
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:0,
      paddingTop:0
    },
  
    cancelButtonTextStyle:{
      color:'#fff',
    },
  });
  const stylesAlT = StyleSheet.create({
    contentContainerStyle:{
      backgroundColor:'#fff',
      borderRadius:(ww+wh)*1/200,
      width:ww*65/100,
      height:ww*37/100
    },
    contentStyle:{
      backgroundColor:'transparent',
      borderRadius:50,
    // marginTop:100,
    // paddingTop:100,
    },
    actionContainerStyle:{
      backgroundColor:'transparent',
      borderRadius:50
    },
  
    titleStyle:{
      color:'#f2ca30',
      fontSize:ResponsiveScreen.fontSize(50),
      // marginTop:"-2%",
      fontWeight:'500',
      backgroundColor:'transparent',
      marginTop:wh*-1.3/100
    },
    messageStyle:{
      color:'#575757',
      fontSize:ResponsiveScreen.fontSize(23)
    },
    cancelButtonStyle:{
      width:ww*40/100,
      height:ww*6.5/100,
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:0,
      paddingTop:0
    },
  
    cancelButtonTextStyle:{
      color:'#fff',
      fontSize:ResponsiveScreen.fontSize(23)
    },
  
  });
  export { styles2, btn, styles3,stylesAlF,stylesAlT };