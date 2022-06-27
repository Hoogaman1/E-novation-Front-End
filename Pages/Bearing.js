import React,{ useEffect, useState } from "react";
import axios from 'axios';

import {Text, View, Button, TextInput, TouchableOpacity,Image,FlatList} from 'react-native';
import {styles, styles2, btn} from './styleSheets.js'


const LoginPage = props =>{
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const Item = ({ title }) => (
    <View style={newstyle.item}>
      <Text style={newstyle.title}>{title}</Text>
    </View>
  );
  

  // const [email, setEmail] = useState("");
  var email = "ali@test.com";
  const [mydata, setData] = useState('');
  const onCChange = (textValue) => setCode(textValue);
//   const [email, setEmail] = useState('ali@test.com');
//   const onEChange = (textValue) => setEmail(textValue);
  const[ project , setProject ] = useState([])
  const[list , setList] = useState([''])
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
          <Text style={{fontSize:32,color:'#f2ca30',marginTop:'20%', marginLeft:-75}}>Bearing</Text>
          
              {/* <View>
                 <Text  style={styles2.card2} >1- Material supply</Text>
              </View>
              
              <View>
                 <Text  style={styles2.card2}>2- Cutting</Text>
              </View>
              <View>
                 <Text  style={styles2.card2}>3- Machining</Text>
              </View>
              <View>
                 <Text  style={{
      fontWeight: 'bold',
      fontSize:18,
      marginTop: 10,
      marginBottom:30,
      marginStart:25,
      paddingStart:20,
      width:245,  
      height:60,   
      textAlign: 'left',
      lineHeight:30,
      borderRadius: 6,
      backgroundColor: '#fff',}}>4- Heat treatment/coating/painting and plating</Text>
              </View>
              <View>
                 <Text  style={styles2.card2}>3- Quality control</Text>
              </View>
              <View>
                 <Text  style={styles2.card2}>6- Packaging</Text>
              </View>
              <View>
                 <Text  style={styles2.card2}>7- Ready for delivery</Text>
              </View>
               */}
              <View>
                <Text style={btn.trapezoida}>Photo Album</Text>
              </View>
              <View>
                <Text style={btn.btnb}>Project Process</Text>
              </View>
              <View>
                <Text style={btn.trapezoidb}>Documents</Text>
              </View>
              <View>
                <Text style={btn.btn3}></Text>
              </View>
              <View>
                <Text style={btn.btn4}></Text>
              </View>
               
          <View style={{height:150,width:'100%',padding:10}}>
          <SafeAreaView style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // renderItem={({renderItem}) => (
            //     <TouchableOpacity  style={[{backgroundColor:'blue',justifyContent:'center',alignItems:'center',flex:1,}]}  >
            //         <Text key = {item.id}>{item.name}</Text>
            //     </TouchableOpacity>
            // )} 
            
            />
            </SafeAreaView>
            </View>
            
        </View>
    </View>
   
  
  )

}
export default LoginPage;

const newstyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
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

