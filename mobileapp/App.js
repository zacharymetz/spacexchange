import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import onboarding from './componets/onboarding';
import ConfirmPhone from './componets/confirmPhone';
import LandingPage from './componets/landing';
import LocationListing from './componets/location';

//  we should do something and then 
//  decied weathe r to send them to onboarding
//  or juts let them in cuz it just goes to the 
//  first page on the list 
const MainNavigator = createStackNavigator({
  OnBoarding: {screen: onboarding},
  LandingPage : {screen :LandingPage},
  LocationListing : {screen: LocationListing},
  
  ConfirmPhone: {screen: ConfirmPhone},
  EnableNotifications: {screen: ConfirmPhone}
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App = createAppContainer(MainNavigator);

export default App;