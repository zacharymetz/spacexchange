import React, { Component } from 'react';
import { View, Button, Text, Alert} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{backgroundColor: 'red', height: 100, width: 100, marginTop: 150}}>
            <Button title="Login">
            </Button>
            <Button title="Register" onPress={() => Alert.alert('Simple Button pressed')}>
            </Button>
            
        <Text>HERE FDSAFDSA</Text>
      </View>
    );
  }
};
