import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';


export default class LoginPage extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    async componentDidMount() {
      // TODO: You: Do firebase things
      // const { user } = await firebase.auth().signInAnonymously();
      // console.warn('User -> ', user.toJSON());
  
      // await firebase.analytics().logEvent('foo', { bar: '123'});
    }
  
    render() {
        return (<View style={Styles.main}>
            <Text>asdasd</Text>
            <Text>asdasd</Text>
        </View>)
    }
}


const Styles = {
    main : {
        display: "flex",
        flexDirection: "column",
        height : "100vh",
        alignItems : "center"
    }
}