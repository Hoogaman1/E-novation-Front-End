
// import React,{ useState } from "react";
// import axios from 'axios';

import { StyleSheet , Dimensions} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({


    page:{
      alignItems: 'center',
      backgroundColor: '#f2ca30',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      flexDirection: 'row',
      // flexWrap: 'wrap',
      flex: 1
    },
    fields: {
        height: 35,
        width: '90.8%',
        padding:10,
        backgroundColor: 'white',
        textAlign:'center',
        borderRadius:30,
        marginTop: -20,
        marginLeft:10,
    },
    text:{
        marginTop:-9,
        marginBottom:-5,
    },
    Button : {
        // justifyContent:'center',
        // alignItems:'center',
        // borderColor:'#fff',
        backgroundColor:'#192570',
        // color :"red",
        // Color:'blue',
        // underlayColor:'#fff',
        borderRadius:25,
        height: 30,
        width: '100%',
        padding:0,
        textAlign:'center',
        marginTop:1,
        // Align:'left',
        // flex:0,
    },
    box: {
      marginTop: '42%',
      height: '45%',
      width: '65%',
      padding:10,
      // backgroundColor:"green"
  },
  ButtonText:{
    color:'white',
    // width:"100%"
    // fontSize:12,
    fontSize:12,
    marginTop:4,
    marginLeft:10,
  },
  butbox:{
    justifyContent:'space-between',
  
    // marginTop: '10%',
    height: '50%',
    width: '100%',
    padding:10,
    flexDirection: 'row',
    // backgroundColor:"green",
    // flexDirection: 'column',
  },
  logo:{
    width:'100%', 
    height:100,
    marginRight:30 , 
    marginBottom:20 
  }
  });

export { styles }

const styles2 = StyleSheet.create({
    logo:{
        // height:"100%",
        width:win.width/1.7,
        // marginRight:30 , 
        // marginBottom:20 ,
        // marginTop:50 ,
        // marginLeft:30 ,
        // backgroundColor:'blue',
        resizeMode:'cover',
        flex:1
       },
    page:{
        // alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: '100%',
        width: win.width,
        flexDirection: 'column',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
      },
    topbox:{
        alignItems: 'center',
        // justifyContent: 'flex-end',
        // flexDirection: 'column',

        flexDirection: 'row',
        justifyContent:'space-between',

        marginTop: '10%',
        height: '9%',
        // width: '95%',
        width: win.width,

        // padding:10,
        // backgroundColor:"green"
    },
    butbox:{
      borderRadius: 50,
      backgroundColor:'white',
      height:"100%",
      width:'80%',
      marginLeft:-82

    },
    card: {
      fontWeight: 'bold',
      fontSize:18,
      marginTop: 20,
      marginStart:35,
      paddingStart:15,
      width:300,  
      height:60,   
      textAlign: 'left',
      lineHeight:50,
      borderRadius: 6,
      elevation:3,
      backgroundColor: '#fff',
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
            
    },
    card2: {
      fontWeight: 'bold',
      fontSize:18,
      marginTop: 10,
      marginStart:1,
      paddingStart:10,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },

  
    

})
const btn = StyleSheet.create({
  btn: {
    fontWeight: 'bold',
    padding:10,
    textAlign: 'center',
    fontSize:17,
    transform: [{ rotate: '90deg'}],
    color: '#fff',
    marginTop:-400,
    marginLeft: 420,
    // borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
backgroundColor: '#f2c92f',
width: 200,
height: 50,
  },
  btn2: {
    fontWeight: 'bold',
    padding:10,
    textAlign: 'center',
    fontSize:15,
    transform: [{ rotate: '90deg'}],
    color: '#fff',
    marginTop:-200,
    marginLeft: 420,
    borderBottomRightRadius: 50,
    // bsorderBottomRightRadius: 20,
    backgroundColor: '#192571',
width: 200,
height: 50,
  },
  trapezoid1: {
    marginTop: 0,
    marginLeft: 405,
    fontWeight: 'bold',
    paddingTop:10,
    textAlign: 'center',
    fontSize:18,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 250,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 70,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
   },
   trapezoid2: {
    marginTop:180,
    marginLeft: 405,
    fontWeight: 'bold',
    paddingTop:10,
    paddingLeft:10,
    textAlign: 'left',
    fontSize:18,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 250,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#192571',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
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
    fontWeight: 'bold',
    padding:14,
    textAlign: 'center',
    fontSize:17,
    transform: [{ rotate: '90deg'}],
    color: '#000',
    marginTop:-330,
    marginLeft: 420,
    // borderTopLeftRadius: 50,
    // borderBottomRightRadius: 50,
backgroundColor: '#e8e4e3',
width: 150,
height: 70,
  },
  btnc: {
    fontWeight: 'bold',
    padding:10,
    textAlign: 'center',
    fontSize:17,
    transform: [{ rotate: '90deg'}],
    color: '#fff',
    marginTop:-180,
    marginLeft: 420,
    // borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
backgroundColor: '#f2c92f',
width: 150,
height: 50,
  },
  btn3: {
    padding:10,
    marginTop:-500,
    marginLeft: -120,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#192571',
width: 20,
height: 322,
  },
  btn4: {
    padding:10,
    marginTop:-180,
    marginLeft: -120,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // bsorderBottomRightRadius: 20,
    backgroundColor: '#f2c92f',
width: 20,
height: 150,
  },
  trapezoida: {
    marginTop:-480,
    marginLeft: 400,
    fontWeight: 'bold',
    padding:5,
    textAlign: 'center',
    fontSize:17,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 200,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 70,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
   },
   trapezoidb: {
    marginTop:-155,
    marginLeft: 400,
    fontWeight: 'bold',
    padding:5,
    textAlign: 'center',
    fontSize:17,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 200,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
   },
});
export { styles2, btn }

