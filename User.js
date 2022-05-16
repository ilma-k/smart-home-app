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
Simple user interface in which user will be able to change their phone number,
their password and to log out of the application
*/

//imported icons
import Icon from "react-native-vector-icons/Ionicons";
import Message from "react-native-vector-icons/Fontisto";
import Logout from "react-native-vector-icons/AntDesign";
import BackIcon from "react-native-vector-icons/Ionicons";
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
          <Text style={styles.userName}>
            {auth.currentUser?.name}</Text>
          <Text>
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
          <Buttons title="Change password"></Buttons>
          <Buttons title="Log Out" onPress={handleSignOut}>
            <Logout name={"logout"} size={20} color={"#055B5C"} />
          </Buttons>
        </View>
      </View>

      <BackIcon
        name={"ios-return-down-back-outline"}
        size={20}
        color={"#055B5C"}
      />
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
    backgroundColor: "#dad1e3",
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
    paddingTop: 10,
  },
  userName: {
    fontSize: 26,
  },
});
