import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

/*
Simple user interface to handle changing user's email address and their
their password and to log out of the application
*/

//imported icons
import Icon from "react-native-vector-icons/Ionicons";
import Message from "react-native-vector-icons/Fontisto";
import Buttons from "../components/Buttons";

const { width: WIDTH } = Dimensions.get("window");

const User = () => {
  const navigation = useNavigation();
  

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Start");
      })
      .catch(error => alert(error.message));
  };
  const handlePassword = () => {
        navigation.replace("Password");
  };
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.bigContainer}>
        <View style={styles.logoContainer}>
          <Icon
            name={"ios-person-circle-outline"}
            size={70}
            color={"#055B5C"}
            style={styles.inputIcon}
          />
          <Text style={styles.text}>
            <Message
              name={"email"}
              size={20}
              color={"#055B5C"}
              style={styles.inputIcon}
            />
            User email: {auth.currentUser?.email}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Buttons title="Change password/email" onPress={handlePassword}></Buttons>
          <Buttons title="Log Out" onPress={handleSignOut}>
          </Buttons>
        </View>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#024956",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  bigContainer: {
    backgroundColor: "white",
    padding: 60,
    borderRadius: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH - 145,
  },
  buttonsContainer: {
    margin: 5,
    paddingTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
});
