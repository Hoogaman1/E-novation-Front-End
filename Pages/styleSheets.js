
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
      backgroundColor:'red',
      height:"100%",
      width:'80%',
      marginLeft:-82

    }


})
export { styles2 }

