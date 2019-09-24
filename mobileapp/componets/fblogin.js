import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.main}>
          <Image style={styles.socailIcon} source={require('../assets/facebook-logo.png')}/>
          <Text style={styles.loginText}>
            Continue with facebook
          </Text >
      </View>
    );
  }
};


const styles = StyleSheet.create({ 
    main : {
        backgroundColor : "#3C5A99",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        alignItems  : "center",
        padding : 16,
        borderRadius : 4
        
    },
    socailIcon: {
        height : 32,
        width : 32
    },
    loginText : {
        color : "white",
        flexGrow : 1,
        textAlign : "center",
        fontSize : 18
        
    }
});