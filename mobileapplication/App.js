import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import onboarding from './components/onboarding';
import ConfirmPhone from './components/confirmPhone';
import LandingPage from './components/landing';
import LocationListing from './components/location';
import SideMenu from './components/sideMenu';
import ShoppingCart from './components/shoppingCart';
import auth from '@react-native-firebase/auth';
import ConfirmCart from './components/confirmCart';
import { firebase } from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import SpaceCalender from './components/spaceCalender';
import SearchScreen from './components/searchScreen';
import TransactionsSummary from './components/transactionsSummary';
import SpecificTransaction from './components/specificTransaction';
import LocationServices from './components/locationservices';
import Profile from './components/profile';
import LoginRegister from './components/loginregister';
import Login from './components/login';
import Register from './components/register';
import CurrentRentals from './components/currentRentals';
import CancelBooking from './components/cancelBooking';

//  we should do something and then
//  decied weathe r to send them to onboarding
//  or juts let them in cuz it just goes to the
//  first page on the list
const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  LandingPage : {screen: LandingPage},
  LoginRegister: {screen: LoginRegister},
  CurrentRentals: {screen: CurrentRentals},
  SpaceCalender: {screen: SpaceCalender},
  
  Register: {screen: Register},
  OnBoarding: {screen: onboarding},
  LocationServices: {screen: LocationServices},
  TransactionsSummary: {screen: TransactionsSummary},
  SpecificTransaction: {screen: SpecificTransaction},
  SearchScreen: {screen: SearchScreen},
  ConfirmCart: {screen: ConfirmCart},
	LocationListing : {screen: LocationListing},
  ConfirmPhone: {screen: ConfirmPhone},
  EnableNotifications: {screen: ConfirmPhone},
  SideMenu: {screen: SideMenu},
  ShoppingCart: {screen: ShoppingCart},
  Profile: {screen: Profile},
  CancelBooking: {screen: CancelBooking},

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
    return subscriber; //unsubscribe on unmount
  }, []);
 
  if (initilizing) return null;
  return (
    <View>
      <Text>Welcome </Text>
    </View>
  );
}



export default Nav;