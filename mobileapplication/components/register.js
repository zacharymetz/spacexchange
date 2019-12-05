import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight, ImageBackground } from 'react-native';

export default class Register extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: ""
        }

    }

    onChangeTextEmail(text){
        this.setState({email : text});
    }
    onChangeTextPass(text){
        this.setState({password : text});
    }


  render (){
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={{ height: 40, width: "100%", borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeTextEmail(text)}
          value={this.state.value}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={{ height: 40, width: "100%", borderColor: 'gray', borderWidth: 1,  }}
          textContentType="password"
          onChangeText={text => this.onChangeTextPass(text)}
          value={this.state.password}
        />
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
        marginTop: "100%",
        marginHorizontal: 15
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