import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight, ImageBackground } from 'react-native';

export default class LoginRegister extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
  render (){
    const {navigate} = this.props.navigation;
    return (

    
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.frontlogo} source={require('../assets/logo.png')}></Image>

            </View>
            <View style={styles.middle}>
                <TouchableHighlight style={styles.button} onPress={() => navigate('Login')}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.button} onPress={() => navigate('Register')}>
                    <Text style={styles.buttonText}> Register </Text>
                </TouchableHighlight>
            </View>
        </View>
    
  );
}}
const styles= StyleSheet.create({

    container: {
        
        display:"flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
        height : "100%",
        padding: 15
        
    },
    middle: {
        marginTop:"25%",
        height:"50%",
        width:"100%",
    },
    button : {
        backgroundColor : "#2a2e2b",
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
    frontlogo: {
        width: 200,
        height: 200,
        marginTop:200
    }
    
    



});