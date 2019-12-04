import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight, ImageBackground } from 'react-native';

export default class Register extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
  render (){
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>

        <View style={styles.bottom}>
            <TouchableHighlight style={styles.button} onPress={() => navigate('ConfirmPhone')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
        </View>
    </View>
  );
}}
const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    bottom: {
        width: "80%",
        marginLeft: "10%",
        height: "20%",
        marginTop: 'auto',
        marginBottom: 0

    },
    button : {
        backgroundColor : "#2a2e2b",
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
});