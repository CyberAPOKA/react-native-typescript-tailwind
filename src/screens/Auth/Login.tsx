import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
  ImageBackground,
  ScrollView,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function getUser() {
      let getToken = await fetch(
        "http://mymovingdays.gw2d.com.br/services/session/token"
      );
      let returnToken = await getToken.text();

      let connect = await fetch(
        "http://mymovingdays.gw2d.com.br/api/system/connect",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            dataType: "json",
            "x-csrf-token": returnToken,
          },
        }
      );
      let connec = await connect.json();
      console.log("Retorno Connect Inicial");
      console.log(connec);
      if (connec["user"]["roles"]["2"]) {
        await AsyncStorage.setItem("userData", JSON.stringify(connec));
        navigation.navigate("AreaRestrita");
      }
    }
    getUser();
  }, []);

  //Fazer Login
  async function doLogin() {
    // let getToken = await fetch(
    //   "http://mymovingdays.gw2d.com.br/services/session/token"
    // );

    let getToken = fetch("http://mymovingdays.gw2d.com.br/services/session/token", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erro:", error));

    let returnToken = await getToken.text();

    let reqs = await fetch("http://mymovingdays.gw2d.com.br/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        dataType: "json",
        "x-csrf-token": returnToken,
      },
      body: JSON.stringify({
        name: user,
        pass: password,
      }),
    }).catch((err) => {
      console.log(err);
    });
    let ress = await reqs.json();
    Keyboard.dismiss();
    if (!ress["user"]) {
      setMessage(ress);
      if (
        ress == "Missing required argument name" ||
        ress == "Missing required argument pass" ||
        ress == "O nome de usuário ou a senha são inválidos."
      ) {
        setMessage(ress);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        await AsyncStorage.clear();
      } else {
        let getToken = await fetch(
          "http://mymovingdays.gw2d.com.br/services/session/token"
        );
        let returnToken = await getToken.text();
        let connect = await fetch(
          "http://mymovingdays.gw2d.com.br/api/system/connect",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              dataType: "json",
              "x-csrf-token": returnToken,
            },
          }
        );
        let connec = await connect.json();
        if (connec["user"]["roles"]["2"]) {
          await AsyncStorage.setItem("userData", JSON.stringify(connec));
          navigation.navigate("AreaRestrita");
        }
        if (connec["user"]["roles"]["1"]) {
          console.log("user Anonimo");
        }
      }
    } else {
      console.log("Retorno tem User");
      let getToken = await fetch(
        "http://mymovingdays.gw2d.com.br/services/session/token"
      );
      let returnToken = await getToken.text();
      let connect = await fetch(
        "http://mymovingdays.gw2d.com.br/api/system/connect",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            dataType: "json",
            "x-csrf-token": returnToken,
          },
        }
      );
      let connec = await connect.json();
      await AsyncStorage.setItem("userData", JSON.stringify(connec));
      navigation.navigate("AreaRestrita");
    }
  }

  return (
    <View>
      <View>
        {/* <Image source={require("../assets/img/splash.png")} /> */}
      </View>

      <View>
        {message && <Text>{message}</Text>}
        <TextInput
          placeholder="Usuário:"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setUser(text)}
          className=""
        />
        <TextInput
          placeholder="Senha:"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={doLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
