import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';
import { findConfigFile } from 'typescript';
export default class ConfirmPhone extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../assets/building.png')} style={styles.container}>
          <View style={styles.buttonbg}>
            <Text style={styles.confimMsg} >Enter The 4 digit code sent to </Text>
            <View style={styles.confirm}>
                <TextInput style={styles.confimInput} />
                <TextInput style={styles.confimInput} />
                <TextInput style={styles.confimInput} />
                <TextInput style={styles.confimInput} />
            </View>
            <View >
                <View>
                    <TouchableHighlight style={styles.button}
                    onPress={() => navigate('LocationServices', {name: 'Jane'})}>
                        <Text style={styles.buttonText}> Next </Text>
                    </TouchableHighlight>
                    
                </View>
                
                <TouchableHighlight style={styles.resend}>
                    <Text style={styles.resend}>Resend Code </Text>
                </TouchableHighlight>
            </View>
        </View>
      </ImageBackground>
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
        height : "100%",
        width : "100%",
        
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
        color : "black",
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
    buttonbg: {
        backgroundColor: '#ffffffe3',
        width: (Dimensions.get('window').width/10*9),
        display:"flex",
        backgroundColor: '#fff',
        padding : 16
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
        marginTop : 16,
        marginBottom : 16,
        alignSelf : "stretch"
        
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
        textAlign : "center",
        
    }
});