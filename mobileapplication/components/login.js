import React from 'react';
import {StyleSheet, Text, View, Image,TextInput, TouchableHighlight, ImageBackground } from 'react-native';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }

  }

  onChangeText(text){
    this.setState({value : text});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={{ height: 40, width: "100%", borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.value}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={{ height: 40, width: "100%", borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.value}
        />

        <TouchableHighlight style={styles.button} onPress={() => navigate('ConfirmPhone')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
        
    display:"flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column",
    height : "100%",
    padding: 15,
    marginTop:"15%"
    
  },
  label: {
    fontSize: 25
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
