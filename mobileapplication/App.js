import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import onboarding from './components/onboarding';
import ConfirmPhone from './components/confirmPhone';
import LandingPage from './components/landing';
import LocationListing from './components/location';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

//  we should do something and then 
//  decied weathe r to send them to onboarding
//  or juts let them in cuz it just goes to the 
//  first page on the list 
const MainNavigator = createStackNavigator({
	LandingPage : {screen :LandingPage},
	LocationListing : {screen: LocationListing},
  OnBoarding: {screen: onboarding},
  
  
  
  ConfirmPhone: {screen: ConfirmPhone},
  EnableNotifications: {screen: ConfirmPhone}
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const Nav = createAppContainer(MainNavigator);

function App() {
  // Set an initilizing state whilst Firebase connects
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
 
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initilizing) setInitilizing(false);
  }
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
 
  if (initilizing) return null;
 
  if (!user) {
    
    return <Nav/>;
    
  }
 
  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}



export default App;