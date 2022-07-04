import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { MaterialCommunityIcons, Octicons,FontAwesome5, AntDesign } from '@expo/vector-icons';

import {Text, View, Button, TextInput, TouchableOpacity,Image,FlatList, StyleSheet, Pressable, ScrollView } from 'react-native';
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
          <Text style={{fontSize:32,color:'#f2ca30',marginTop:'20%', marginLeft:-50}}>Photo Album</Text>
          <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} style={{color: 'white',flex: 1,marginLeft:'0%', marginRight:'-20%', }}>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'5%', marginTop:'5%',marginBottom:'-8%', borderRadius:10 }}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'51%', marginTop:'-36%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'5%', marginTop:'10%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'51%', marginTop:'-36%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'5%', marginTop:'10%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'51%', marginTop:'-36%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'5%', marginTop:'10%',marginBottom:'-8%', borderRadius:10}}/>
          </View>
          <View>
          <Image source={require('../assets/2.jpg')} style={{width:150, height:150, marginLeft:'51%', marginTop:'-36%',marginBottom:'5%', borderRadius:10}}/>
          </View>
          </ScrollView>
              <View>
                <Text style={btn.trapezoidc}
                onPress={() =>
        props.navigation.navigate('Bearing', { name: 'Bearing' })
      }>Project Process</Text>
              </View>
              <View>
                <Text style={btn.btnbb}>Photo Album</Text>
              </View>
              <View>
                <Text style={btn.trapezoidd}>Documents</Text>
              </View>
            
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

