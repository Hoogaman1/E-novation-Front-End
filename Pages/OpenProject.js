import React,{ useEffect, useState } from "react";
import axios from 'axios';

import {Text, View, TextInput ,TouchableOpacity,Image,FlatList} from 'react-native';
import {styles2} from './styleSheets.js'




const LoginPage = props =>{
  // const [email, setEmail] = useState("");
  var email = "ali@test.com";
  const [mydata, setData] = useState('');
  const onCChange = (textValue) => setCode(textValue);
//   const [email, setEmail] = useState('ali@test.com');
//   const onEChange = (textValue) => setEmail(textValue);
  const[ project , setProject ] = useState([])
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
          <Text style={{fontSize:32,color:'#f2ca30',marginTop:'20%'}}>Current Projects</Text>
          <View style={{height:150,width:'100%',padding:10}}>
            <FlatList 
            data={project}
            renderItem={({item}) => (
                <TouchableOpacity  style={[{backgroundColor:'blue',justifyContent:'center',alignItems:'center',flex:1,}]}  >
                    <Text key = {item.id}>{item.name}</Text>
                </TouchableOpacity>
            )} />
            </View>
        </View>
    </View>

  )

}
export default LoginPage;


// const styles = StyleSheet.create({


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

