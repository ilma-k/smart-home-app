import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
//import { Component } from "react";
import { auth } from "../firebase";

//import bgImage from '../assets/bacground.jpg'
import OcticonIcon from "react-native-vector-icons/Octicons";
import Buttons from "../components/Buttons";

//Simple Signup page where you are able to input information like your Username,
//Surname, Email, Phone number and Password to register into the application

const { width: WIDTH } = Dimensions.get("window");

const Signup = () => {
  //introducing states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //defining a variable for navigation
  const navigation = useNavigation();

//changing view from sign up to user page
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("User");
      }
    });
    return unsubscribe;
  }, []);

  //authentication using Firebase for email and password for sign up page
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ImageBackground style={styles.backgroundContainer}>
      <View style={styles.bigContainer}>
        <View style={styles.logoContainer}>
          <OcticonIcon
            name={"light-bulb"}
            size={60}
            color={"#dad1e3"}
            style={styles.inputIcon}
          />
          <Text style={styles.logoText}>Smart Home App</Text>
          <Text style={styles.logoTexttwo}>Register for free</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Name"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Surname"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Phone number"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <Buttons title="Register" onPress={handleSignUp}></Buttons>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dad1e3",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  bigContainer: {
    backgroundColor: "#034a5a",
    padding: 60,
    borderRadius: 30,
    alignContent: "center",
    justifyContent: "center",
    width: WIDTH - 65,
  },
  logoText: {
    color: "white",
    fontSize: 25,
    fontWeight: 500,
    marginTop: 10,
  },
  logoTexttwo: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
    marginTop: 11,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: "center",
    opacity: 0.8,
  },
  input: {
    width: WIDTH - 165,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "center",
    marginTop: 8,
    left: 37,
  },
});

export default Signup;
