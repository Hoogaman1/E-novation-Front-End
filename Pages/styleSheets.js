// import React,{ useState } from "react";
// import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Dimensions } from "react-native";
import ResponsiveScreen from 'react-native-auto-responsive-screen';
ResponsiveScreen.init(720, 1600)
const wf = Dimensions.get('screen').fontScale;
const ws = Dimensions.get('screen').scale;
const wh = Dimensions.get('screen').height;
const ww = Dimensions.get('screen').width;
// console.log(win)
const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize:wf*8,
    alignItems: "center",
    backgroundColor: "#f2ca30",
    justifyContent: "center",
    height:ResponsiveScreen.normalize(1600),
    width: ResponsiveScreen.normalize(720),
    flexDirection: "column",
    flexDirection: "row",
    // flexWrap: 'wrap',
    flex: 1,
  },
  fields: {
    fontFamily: "Roboto",
    fontSize:wf*8,
    position:'relative',
    height:ResponsiveScreen.normalize(60),
    width: ResponsiveScreen.normalize(420),
    // padding: 0,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 50,
    marginTop:ResponsiveScreen.normalize(-120),
    marginLeft: ResponsiveScreen.normalize(20),
    // marginRight: wp('5%'),
  },
  text: {
    
    fontFamily: "Roboto",
    fontSize:ResponsiveScreen.normalize(25),
    marginLeft:ResponsiveScreen.normalize(25)
  },
  Button: {
    // fontFamily: "Roboto",

    justifyContent:'center',
    alignItems:'center',
    // borderColor:'#fff',
    backgroundColor: "#192570",
    // color :"red",
    // Color:'blue',
    // underlayColor:'#fff',
    borderRadius: 50,
    height: ResponsiveScreen.normalize(60),
    width: ResponsiveScreen.normalize(120),
    // padding: 0,
    textAlign: "center",
    marginLeft: ResponsiveScreen.normalize(15),
    // Align:'left',
    // flex:0,
  },
  box: {
    fontFamily: "Roboto",
    marginTop: ResponsiveScreen.normalize(540),
    // height:hp("45%"),
    // width: hp("32%"),
    // marginLeft:wp("10%"),
    // marginRight:wp("10%"),
    padding: ResponsiveScreen.normalize(25),
    height:ResponsiveScreen.normalize(600),
    width:ResponsiveScreen.normalize(500),
    // backgroundColor:"red"
  },
  ButtonText: {
    fontFamily: "Roboto",
// alignItems:'center',
    color: "white",
    // width:"100%"
    // fontSize:12,
    textAlign: "center",

    fontSize:ResponsiveScreen.normalize(25),
    // fontSize: hp("1.4"),
    // marginTop: ws/100*200,
    // marginLeft: '25%',
    // paddingLeft: ws*700/100,
    // paddingRight: ws*3,
    // backgroundColor:"red"
  },
  butbox: {
    fontFamily: "Roboto",
    justifyContent: "space-between",
    marginTop: ResponsiveScreen.normalize(15),
    height: ResponsiveScreen.normalize(200),
    width: ResponsiveScreen.normalize(440),
    padding:ResponsiveScreen.normalize(10),
    flexDirection: "row",
    // backgroundColor:"green",
    // flexDirection: 'column',
  },
  logo: {
    // fontFamily: "Roboto",
    // backgroundColor:"red",
    width: ResponsiveScreen.normalize(450),
    height:ResponsiveScreen.normalize(150),
    // marginRight: wp('30%'),
    marginBottom: ResponsiveScreen.normalize(120),
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
    width:ww,

    // padding:10,
    // backgroundColor:"green"
  },
  butbox: {
    fontFamily: "Roboto",

    borderRadius: hp('50%'),
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
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
    marginBottom:  hp("7%"),
    marginLeft: wp("16%"),
  },
  icon4: {
    marginTop:hp("-7%"),
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
backgroundColor:"red",
    zIndex: 0,
    marginTop: hp('3%'),
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

    paddingTop: hp('0%'),
    paddingLeft: wp('0%'),
    textAlign: "center",
    fontSize: hp('1.7%'),
    transform: [{ rotate: "90deg" }],
    color: "#000",
    marginTop: hp("-33%"),
    marginLeft: wp("125%"),
    // borderTopLeftRadius: 50,
    // borderBottomRightRadius: 50,
    backgroundColor: "#e8e4e3",
    width: wp('35%'),
    height: hp('7%'),
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
    position:'absolute',
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
    paddingTop: hp('1%'),
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
    fontSize:ResponsiveScreen.normalize(25),
    alignItems: "center",
    backgroundColor: "#fff",
    // justifyContent: "center",
    height:ResponsiveScreen.normalize(1600),
    width: ResponsiveScreen.normalize(720),
    flexDirection: "column",
    // backgroundColor:"red",
    flex: 1,
    // flexDirection: "row",
    // flexWrap: 'wrap',
  },
  topbox: {
    fontFamily: "Roboto",
    alignItems: "center",
    // justifyContent: 'flex-end',
    // flexDirection: 'column',
    flexDirection: "row",
    marginTop:ResponsiveScreen.normalize(20),
    justifyContent: "space-between",
    // backgroundColor:'blue',
    // marginTop: "15%",
    height: ResponsiveScreen.normalize(200),
    // width: '95%',
    width:ResponsiveScreen.normalize(720),
    // paddingTop:wh/5.9,
    // padding:'30%',
  },
  butbox: {
    fontFamily: "Roboto",
    flexDirection:"row",
    borderRadius: 20,
    height: ResponsiveScreen.normalize(1360),
    width: ResponsiveScreen.normalize(720),
    // marginLeft: wp("-19%"),
    // backgroundColor:'transparent'
    // backgroundColor:"red"
  },
  workbox: {
    fontFamily: "Roboto",
    flexDirection:"column",
    borderRadius: 20,
    height: ResponsiveScreen.normalize(1360),
    width: ResponsiveScreen.normalize(600),
    // marginLeft: wp("-19%"),
    // backgroundColor:"orange"
  },
  barbox: {
    fontFamily: "Roboto",
    flexDirection:'column',
    borderRadius: 20,
    height: ResponsiveScreen.normalize(1360),
    width: ResponsiveScreen.normalize(130),
    // marginLeft: wp("-19%"),
    // backgroundColor:"green"
  },
  logo: {
    height: ResponsiveScreen.normalize(160),
    // width:50,
    width: ResponsiveScreen.normalize(500),
    // marginRight:30 ,
    // marginBottom:20 ,
    // marginTop:50 ,
    // marginLeft:30 ,
    // backgroundColor:'blue',
    resizeMode: "cover",
  },
  barbut1: {
    fontFamily: "Roboto",
    backgroundColor:"#f2ca30",
    transform: [{ rotate: "90deg" }],
    width:wh/5,
    height:ww/5,
    marginTop:wh/5.2,
    marginLeft:-(ww/8.2),
  },
  barbut2: {
    fontFamily: "Roboto",
    backgroundColor:"#e5e5e5",
    transform: [{ rotate: "90deg" }],
    width:wh/5,
    height:ww/5,
    marginTop:wh/9.1,
    marginLeft:-(ww/8.2),
  },
  barbut3: {
    fontFamily: "Roboto",
    backgroundColor:"#f2ca30",
    transform: [{ rotate: "90deg" }],
    width:wh/5,
    height:ww/5,
    marginTop:wh/9.1,
    marginLeft:-(ww/8.2),
  },
  bartxt: {
    fontFamily: "Roboto",
    width:wh/5,
    height:ww/5,
    marginTop:wh/30,
    marginLeft:ww/10
  },
  workcard: {
    // backgroundColor:"gray",
    fontFamily: "Roboto",
    width:ResponsiveScreen.normalize(450),
    height:ResponsiveScreen.normalize(120),
    marginBottom:ResponsiveScreen.normalize(25),
    borderRadius:ResponsiveScreen.normalize(18),
    flexDirection:"row",
    elevation: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    
  },
  txtworkcard:{
    // backgroundColor:"yellow",
    fontFamily: "Roboto",
    width:ResponsiveScreen.normalize(350),
    height:ResponsiveScreen.normalize(150),
    fontSize:ResponsiveScreen.normalize(35),
    paddingTop:ResponsiveScreen.normalize(30),
    paddingLeft:ResponsiveScreen.normalize(40),
    borderRadius:20,
    
    
  },
});
export { styles2, btn ,styles3};
