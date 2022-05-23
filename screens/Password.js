import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import React from "react";
import firebase from "firebase/compat";

/*
  Simple user interface in which user will be able to change their email and 
  their password but firstly to authenticate him/herself by putting in their password
*/
import Buttons from "../components/Buttons";

const { width: WIDTH } = Dimensions.get("window");

export default class Password extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  };

  //firstly input current pasword
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            console.log("Password changed");
          })
          .catch(error => alert(error.message));
      })
      .catch(error => alert(error.message));
  }

  onChangeEmailPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updateEmail(this.state.newEmail)
          .then(() => {
            console.log("Email changed");
          })
          .catch(error => alert(error.message));
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.bigContainer}>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={"Current password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
              value={this.state.currentPassword}
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({ currentPassword: text });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={"New password"}
              secureTextEntry={true}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
              value={this.state.newPassword}
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({ newPassword: text });
              }}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Buttons
              title="Change password"
              onPress={this.onChangePasswordPress}
            ></Buttons>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={"New Email"}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
              value={this.state.newEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({ newEmail: text });
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Buttons title="Change email" onPress={this.onChangeEmailPress}></Buttons>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#024956",
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
  input: {
    width: WIDTH - 245,
    height: 45,
    borderRadius: 35,
    fontSize: 16,
    paddingLeft: 35,
    backgroundColor: "#024956",
    opacity: 0.5,
    color: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 15,
    margin: 5,
    paddingTop: 5,
  },
});
