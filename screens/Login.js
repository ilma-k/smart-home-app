import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

//Simple Login interface

//imported icon
import Icon from "react-native-vector-icons/Ionicons";
import Buttons from "../components/Buttons";

//constant width to get application window's width using Dimensions
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Login = () => {
  //introducing states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigation
  const navigation = useNavigation();

  //navigate to a different page after successfully logging
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Room");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground style={styles.backgroundContainer}>
      <KeyboardAvoidingView style={styles.contain} behavior="padding">
        <View style={styles.bigContainer}>
          <View style={styles.logoContainer}>
            <Icon
              name={"ios-person-outline"}
              size={70}
              color={"#dad1e3"}
              style={styles.inputIcon}
            />
            <Text style={styles.logoText}>LOG IN</Text>
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
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Buttons title="OK" onPress={handleLogin}></Buttons>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dad1e3",
  },
  bigContainer: {
    backgroundColor: "#034a5a",
    padding: 60,
    borderRadius: 30,
    alignContent: "center",
    justifyContent: "center",
    width: WIDTH - 65,
  },
  buttonContainer: {
    paddingTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoText: {
    color: "white",
    fontSize: 25,
    fontWeight: 500,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: "center",
    opacity: 0.8,
  },
  input: {
    width: WIDTH - 165,
    height: 45,
    borderRadius: 35,
    fontSize: 16,
    paddingLeft: 35,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 15,
  },
  inputIcon: {
    position: "center",
    marginTop: 8,
    left: 37,
  },
});

export default Login;
