import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight } from 'react-native';
export default class enableNotification extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={}>

          </View>
          <View style={}>
              
          </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({ 
    container: {
        display:"flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent : "center",
        flexDirection: "column",
        height : "100%"
        
      },
    main : {
        backgroundColor : "#3C5A99",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        alignItems  : "center",
        padding : 16,
        borderRadius : 4
        
    },
    confimMsg :{
        marginTop : 64,
        color : "red",
        textAlign : "center",
        fontWeight : "600",
        fontSize : 18
    },
    confirm : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        
    },

    confimInput :{
        borderBottomColor : "black",
        borderBottomWidth : 2,
        fontSize : 32,
        fontWeight  : "600",
        margin : 16
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
        
    },
    button : {
        backgroundColor : "red",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        alignItems  : "center",
        padding : 8,
        borderRadius : 4,
        marginTop : 16
        
    },
    buttonText : {
        color : "white",
        flexGrow : 1,
        textAlign : "center",
        fontSize : 32,fontWeight : "600"
        
    },
    resend:{
        color : "red",
        fontWeight : "600",
        textAlign : "center"
    }
});