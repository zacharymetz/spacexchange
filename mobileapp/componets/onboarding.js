import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableHighlight } from 'react-native';
import Login from './fblogin';
import PhoneInput from 'react-native-phone-input';
export default class onboarding extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };
  render (){
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.brandText}>Spaceful</Text>
      </View>
      <View style={styles.jumbotron}>

      </View>
      <View style={styles.login}>
      <PhoneInput style={styles.phoneinput} placeholder="xxx-xxx-xxxx"/>

        <View >
            <TouchableHighlight style={styles.button}
                onPress={() => navigate('ConfirmPhone', {name: 'Jane'})}>
            <Text style={styles.buttonText}>
              Next
            </Text >
            </TouchableHighlight>
        </View>
        <View style={styles.orHolder}>
          <View style={styles.orLine}></View>
          <Text style={styles.or}>Or</Text>

          <View style={styles.orLine}></View>
        </View>
        <Login></Login>
        
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column",
    height : "100%"
    
  },
  brand : {
    display:"flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "row",
    margin: 64
  },
  logo : {
    height : 96,
    width : 96
  }, 
  brandText:{
    color : "red",
    fontSize : 42,
    fontWeight : "600",
    marginLeft : 24
  }, 
  jumbotron : {
    flexGrow : 1,

  },
  login : {
    backgroundColor: '#fff',
    margin: 32,
    padding : 16,
    width:"100%"
  },
  phoneinput : {
    width : "100%",
    fontSize : 48,
    textAlign : "center",
     borderBottomColor: 'gray', borderBottomWidth: 1 ,paddingBottom : 24
    
  },
  orHolder : {
    display : "flex",
    flexDirection : "row",
    width : "100%",
    justifyContent : "center",
    alignItems : "center",
    marginTop : 16,
    marginBottom : 16
  },
  or : {
    fontSize : 32,
    fontWeight : "600",
    color: "gray"
  },
  orLine : {
    flexGrow : 1,
    height : 2,
    backgroundColor : "gray",
    marginLeft : 16,
    marginRight : 16

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
    
}
});
