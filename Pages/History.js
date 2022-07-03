import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { styles, styles2, btn } from "./styleSheets.js";

const LoginPage = (props) => {
  // const [email, setEmail] = useState("");
  var email = "ali@test.com";
  const [mydata, setData] = useState("");
  const onCChange = (textValue) => setCode(textValue);
  //   const [email, setEmail] = useState('ali@test.com');
  //   const onEChange = (textValue) => setEmail(textValue);
  const [project, setProject] = useState([]);
  useEffect(() => {
    // props.navigation.navigate("NewPass"),

    axios({
      method: "get",
      url: "http://127.0.0.1:8000/USER/opproject/",
      // params:{
      //   email:email,
      // },
      headers: {
        // 'Content-Type': "application/json",
        Authorization: "Token 7a5b55841e8ad94f989a789ef4d23e5809ce0c48",
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
  return (
    <View style={styles2.page}>
      <View style={styles2.topbox}>
        <View>
          <Image
            source={require("../assets/app_ui2-13.png")}
            style={styles2.logo}
          />
        </View>
        <View>
          <Image source={require("../assets/app_ui2-11.png")} />
        </View>
      </View>
      <View style={[styles2.butbox, { alignItems: "center" }]}>
        <Text
          style={{
            fontSize: 30,
            color: "#f2ca30",
            marginTop: "20%",
            marginRight: "-40%",
            marginLeft: "-20%",
            fontFamily: "Roboto",
          }}
        >
          History of Your Projects
        </Text>

        <View>
          <TouchableOpacity>
            <Text
              style={[styles2.cardg, { marginLeft: 32, width: 330 }]}
              onPress={() =>
                props.navigation.navigate("Bearing", { name: "Bearing" })
              }
            >
              Bearing
            </Text>

            <Text
              style={{
                marginTop: "-24%",
                marginLeft: "38%",
                fontSize: 10,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              ID No.:<Text style={{ color: "gray" }}>123456</Text>
            </Text>
            <Text
              style={{
                marginTop: "1.5%",
                marginLeft: "38%",
                fontSize: 10,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              Patent No.:<Text style={{ color: "gray" }}>123456</Text>
            </Text>
            <Text
              style={{
                marginTop: "2%",
                marginLeft: "38%",
                fontSize: 10,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              Patent No:<Text style={{ color: "gray" }}>123456</Text>
            </Text>
            <Text
              style={{
                marginTop: "-17.3%",
                marginLeft: "70%",
                fontSize: 10,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              Order No.:<Text style={{ color: "gray" }}>12</Text>
            </Text>
            <Text
              style={{
                marginTop: "1.6%",
                marginLeft: "70%",
                fontSize: 10,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              Req No.:<Text style={{ color: "gray" }}>123456</Text>
            </Text>
            <Text
              style={{
                marginTop: "2%",
                marginLeft: "70%",
                fontSize: 9,
                color: "#192570",
                fontWeight: "bold",
              }}
            >
              End Date:<Text style={{ color: "gray" }}>2022/3/12</Text>
            </Text>
            <View
              style={{
                width: 2,
                height: 78,
                backgroundColor: "#f2ca30",
                marginLeft: "35%",
                marginTop: "-19%",
              }}
            ></View>

            <View></View>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginTop: "-30%",
              marginLeft: "-0.3%",
              paddingLeft: "170%",
              zIndex: 1,
            }}
          >
            <EvilIcons name="gear" size={32} color="white" />
          </Text>
          <Text style={btn.trapezoid1}> Current Projects</Text>
        </View>

        <View>
          <Text
            style={{
              marginTop: "-15%",
              paddingTop: "40%",
              paddingLeft: "170%",
              zIndex: 1,
            }}
          >
            <MaterialIcons name="history-toggle-off" size={30} color="white" />
          </Text>
          <Text style={btn.trapezoid2}> History of Your Projects</Text>
        </View>

        <View style={{ height: 150, width: "100%", padding: 10 }}>
          <FlatList
            data={project}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  },
                ]}
              >
                <Text key={item.id}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
