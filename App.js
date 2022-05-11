import React, { cloneElement } from 'react';
import { TextInput, View, StyleSheet, Text, ImageBackground, Image, TouchableWithoutFeedbackBase, Dimensions, TouchableOpacity } from 'react-native';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Start from './screens/Start';
import User from './screens/User';

//variable to define stack for navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerTransparent: 'true',
          headerTitle: '',
        }}
        >
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="User" component={User}/>
          
        </Stack.Navigator>
    </NavigationContainer>
);
}

