import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import onboarding from './componets/onboarding';
import ConfirmPhone from './componets/confirmPhone';
import LandingPage from './componets/landing';
import LocationListing from './componets/location';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';

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

const App = createAppContainer(MainNavigator);

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
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
 
  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}



export default App;