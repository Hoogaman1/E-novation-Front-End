
// import React,{ useState } from "react";
// import axios from 'axios';

import { StyleSheet , Dimensions} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({


    page:{
      fontFamily:'Roboto',

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
      fontFamily:'Roboto',

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
      fontFamily:'Roboto',

        marginTop:-9,
        marginBottom:-5,
    },
    Button : {
      fontFamily:'Roboto',

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
      fontFamily:'Roboto',

      marginTop: '42%',
      height: '45%',
      width: '65%',
      padding:10,
      // backgroundColor:"green"
  },
  ButtonText:{
    fontFamily:'Roboto',

    color:'white',
    // width:"100%"
    // fontSize:12,
    fontSize:12,
    marginTop:4,
    marginLeft:10,
  },
  butbox:{
    fontFamily:'Roboto',

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
    fontFamily:'Roboto',

    width:'100%', 
    height:100,
    marginRight:30 , 
    marginBottom:20 
  }
  });

export { styles }

const styles2 = StyleSheet.create({
    logo:{
      
height:"70%",
// width:50,
        width:win.width/1.7,
        // marginRight:30 , 
        // marginBottom:20 ,
        // marginTop:50 ,
        // marginLeft:30 ,
        // backgroundColor:'blue',
        resizeMode:'cover',
       
       },
    page:{
      fontFamily:'Roboto',

        // alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: '100%',
        width: win.width,
        flexDirection: 'column',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
      },
    topbox:{
      fontFamily:'Roboto',

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
      fontFamily:'Roboto',

      borderRadius: 50,
      backgroundColor:'white',
      height:"100%",
      width:'80%',
      marginLeft:-125

    },
    card: {
      
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: 20,
      marginStart:50,
      paddingStart:15,
      width:280,  
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
    carda: {
            fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'20%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    cardb: {
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'24%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    cardc: {
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'24%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    cardd: {
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'21%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    carde: {
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'25%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    cardf: {
      fontFamily:'Roboto',
      fontSize:18,
      marginTop: -27,
      marginStart:'25%',
      paddingStart:1,
      width:200,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',
                 
    },
    
    icon1: {
      marginTop: '-18.5%',
      marginBottom:'10%',
      marginLeft:'16%',               
    },
    icon2: {
      marginTop: '-18%',
      marginBottom:'18%',
      marginLeft:'17%',               
    },
    icon3: {
      marginTop: '-18%',
      marginBottom:'16%',
      marginLeft:'18%',              
    },
    icon4: {
      marginTop: '-11%',
      marginBottom:'11%',
      marginLeft:'17%',                
    },
    icon5: {
      marginTop: '-12%',
      marginBottom:'11%',
      marginLeft:'18%',               
    },
    icon6: {
      marginTop: '-12%',
      marginBottom:'11%',
      marginLeft:'18%',                
    },
    icon7: {
      marginTop: '-12%',
      marginBottom:'11%',
      marginLeft:'17%',
    },


  
    

})
const btn = StyleSheet.create({
  btn: {
    fontFamily:'Roboto',

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
    fontFamily:'Roboto',

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
      fontFamily:'Roboto',

      zIndex: 0,
    marginTop: 0,
    marginLeft: '143%',
    paddingTop:15,
    textAlign: 'center',
    fontSize:13,
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
    borderStyle: 'solid',
   },
   trapezoid2: {
    fontFamily:'Roboto',

    zIndex: 0,
    marginTop:'15%',
    marginLeft: '143%',
    paddingTop: 15,
    paddingLeft:'1%',
    textAlign: 'left',
    fontSize:13,
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
    fontFamily:'Roboto',

    paddingTop:15,
    paddingLeft:5,
    textAlign: 'center',
    fontSize:14,
    transform: [{ rotate: '90deg'}],
    color: '#000',
    marginTop:-250,
    marginLeft: '148%',
    // borderTopLeftRadius: 50,
    // borderBottomRightRadius: 50,
backgroundColor: '#e8e4e3',
width: 150,
height: 55,
  },
  btnbb: {
    fontFamily:'Roboto',

    paddingTop:15,
    paddingLeft:5,
    textAlign: 'center',
    fontSize:14,
    transform: [{ rotate: '90deg'}],
    color: '#000',
    marginTop:'-113%',
    marginLeft: '148%',
    // borderTopLeftRadius: 50,
    // borderBottomRightRadius: 50,
backgroundColor: '#f2c92f',
width: 150,
height: 55,
  },
  btnc: {
    fontFamily:'Roboto',

    fontWeight: 'bold',
    padding:10,
    textAlign: 'center',
    fontSize:17,
    transform: [{ rotate: '90deg'}],
    color: '#fff',
    marginTop:500,
    marginLeft: 420,
    // borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
backgroundColor: '#f2c92f',
width: 150,
height: 50,
  },
  btn4: {
    fontFamily:'Roboto',

    padding:10,
    marginTop:-170,
    marginLeft: -120,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // bsorderBottomRightRadius: 20,
    backgroundColor: '#f2c92f',
width: 20,
height: 170,
  },
  btn3: {
    fontFamily:'Roboto',

    padding:10,
    marginTop:-450,
    marginLeft: -120,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#192571',
width: 20,
height: 322,
  },
  
  trapezoida: {
    fontFamily:'Roboto',

    marginTop:'-130%',
    marginLeft: '143%',
    paddingLeft:'20%',
    paddingTop:17,
    paddingRight:'10%',
    textAlign: 'center',
    fontSize:14,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 200,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 70,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    borderBottomStartRadius:50,
   },
   trapezoidb: {
    fontFamily:'Roboto',

    marginTop:'-30%',
    marginLeft: '143%',
    paddingTop:15,
    paddingRight:'20%',
    textAlign: 'center',
    fontSize:14,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 190,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
   },
   trapezoidc: {
    fontFamily:'Roboto',
    
    marginTop:'-165%',
    marginLeft: '143%',
    paddingTop:15,
    paddingLeft:'10%',
    textAlign: 'center',
    fontSize:14,
    color: '#000',
    transform: [{ rotate: '90deg'}],
    width: 190,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#e8e4e3',
    borderLeftWidth: 70,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
   },
   trapezoidd: {
    fontFamily:'Roboto',

    marginTop:'-66%',
    marginLeft: '143%',
    paddingTop:15,
    paddingRight:'20%',
    textAlign: 'center',
    fontSize:14,
    color: '#fff',
    transform: [{ rotate: '90deg'}],
    width: 190,
    height: 0,
    borderTopWidth: 55,
    borderTopColor: '#f2c92f',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 70,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
   },
});
export { styles2, btn }

