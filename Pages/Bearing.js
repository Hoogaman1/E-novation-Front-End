import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { MaterialCommunityIcons, Octicons,FontAwesome5, AntDesign } from '@expo/vector-icons';

import {Text, View, Button, TextInput, TouchableOpacity,Image,FlatList, StyleSheet, Pressable } from 'react-native';
import {styles, styles2, btn} from './styleSheets.js'


const LoginPage = props =>{
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
  const [mydata, setData] = useState('');
  const onCChange = (textValue) => setCode(textValue);
//   const [email, setEmail] = useState('ali@test.com');
//   const onEChange = (textValue) => setEmail(textValue);
  // const[ project , setProject ] = useState([])
  // const [isActive, setIsActive] = useState(false);
  //   const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(true);
  // const[list , setList] = useState([''])
  useEffect(()  => {
    // props.navigation.navigate("NewPass"),
    
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/USER/opproject/",
      // params:{
      //   email:email,
      // },
      headers: {
          // 'Content-Type': "application/json",
          'Authorization':  "Token 7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
          // 'Accept': 'application/json'
      },
      data: {
        // verification_code: code,
      },
      
    })
    .then((response) => console.log(response))
      // console.log(response)})
      .catch((error) => console.log(error));
  }); 
  return(

    <View style={styles2.page}>
        <View style={styles2.topbox}>
        
          <View>
            <Image source={require('../assets/app_ui2-13.png')} style={styles2.logo}/>
          </View>
          <View>
            <Image source={require('../assets/app_ui2-11.png')} />
          </View>
          
        </View>
        <View style={[styles2.butbox,{alignItems: 'center'}]}>
          <Text style={{fontSize:32,color:'#f2ca30',marginTop:'20%', marginLeft:-130}}>Bearing</Text>
          
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: 10,
      marginBottom:25,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
          <MaterialCommunityIcons name="forklift" size={28} color="orange" /> Material supply
          </Text>
        )}/>
                 <Text  style={styles2.icon1} ></Text>
                 {/* <Text style={styles2.carda}> Material supply</Text> */}
              </View>
              
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -10,
      marginBottom:-2,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
            <MaterialCommunityIcons name="scissors-cutting" size={24} color="orange" />  Cutting
          </Text>
        )}/>
                 <Text  style={styles2.icon2}> </Text>
                 {/* <Text style={styles2.cardb}>Cutting</Text> */}
              </View>
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -10,
      marginBottom:18,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
           <Text  style={styles2.icon3}><Octicons name="tools" size={22} color="orange" /> </Text>   Machining
          </Text>
        )}/>
                 
                 {/* <Text style={styles2.cardc}>Machining</Text> */}
              </View>
              <View>
              <Pressable
        children={({ pressed }) => (

          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -10,
      marginBottom:18,
      marginStart:'26%',
      paddingRight:15,
      paddingLeft:0,
      paddingTop:8,
      paddingBottom:0,
      width:270,  
      height:80,   
      textAlign: 'center',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
                <FontAwesome5 name="paint-roller" size={22} color="orange" />   Heat treatment/coating/
                                                                                  painting and plating</Text>
          
        )}/>
              
                 {/* <Text  style={{
      fontSize:18,
      marginTop: -30,
      marginBottom:30,
      marginStart:119,
      paddingStart:0,
      width:245,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',}}> Heat treatment/coating/</Text> */}
      {/* <Text style={{
      fontSize:18,
      marginTop: -62,
      marginBottom:-5,
      marginLeft:124,
      paddingStart:0,
      width:245,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',}}>painting and plating</Text> */}
              </View>
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -10,
      marginBottom:5,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
            <AntDesign name="checksquare" size={20} color="orange" />   Quality control
          </Text>
        )}/>
                 <Text style={styles2.icon5}></Text>
                 {/* <Text  style={styles2.cardd}> Quality control</Text> */}
              </View>
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -12,
      marginBottom:5,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
            <Octicons name="package-dependencies" size={21} color="orange" />   Packaging
          </Text>
        )}/>
                 <Text  style={styles2.icon6}> </Text>
                 {/* <Text style={styles2.carde}>Packaging</Text> */}
              </View>
              <View>
              <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#222',
          fontFamily:'Roboto',
      fontSize:18,
      marginTop: -12,
      marginBottom:5,
      marginStart:'26%',
      paddingLeft:10,
      paddingTop:8,
      width:270,  
      height:50,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 10,
      backgroundColor: pressed ? '#192571' : '#fff',
      elevation:3,
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,}}>
            <MaterialCommunityIcons name="truck-delivery" size={26} color="orange" />  Ready for delivery
          </Text>
        )}/>
                 <Text  style={styles2.icon7}> </Text>
                 {/* <Text style={styles2.cardf}>Ready for delivery</Text> */}
              </View>
              
              <View>
                <Text style={btn.trapezoida}
                onPress={() =>
        props.navigation.navigate('PhotoAlbum', { name: 'PhotoAlbum' })
      }>Photo Album</Text>
              </View>
              <View>
                <Text style={btn.btnb}>Project Process</Text>
              </View>
              <View>
                <Text style={btn.trapezoidb}>Documents</Text>
              </View>
              <TouchableOpacity>
              <View > 
              <Text style={btn.btn4}></Text>
              </View>
              <View>
                <Text style={btn.btn3}></Text>
              </View>
              </TouchableOpacity>
          <View style={{height:150,width:'100%',padding:10}}>
     
            <FlatList 
            // data={DATA}
            // renderItem={renderItem}
            // keyExtractor={item => item.id}
            renderItem={({renderItem}) => (
                <TouchableOpacity  style={[{backgroundColor:'blue',justifyContent:'center',alignItems:'center',flex:1,}]}  >
                    <Text key = {item.id}>{item.name}</Text>
                </TouchableOpacity>
            )} 
            
            />
            
            </View>
            
        </View>
    </View>
   
  
  )

}
export default LoginPage;


// const styles = StyleSheet.create({

 {/* <Button style={{
          backgroundColor: isActive ? 'yellow' : 'yellow',
          color: isActive ? 'yellow' : 'yellow',
        }} onPress={() =>
          {handleClick}
      } title="Press Me"></Button> */}
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

