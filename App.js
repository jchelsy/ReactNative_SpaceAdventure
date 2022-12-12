import React from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import StartScreen from './src/screens/Start';
import HomeScreen from './src/screens/Home';


const { Navigator, Screen } = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Navigator>
      <Screen name="Start" component={StartScreen} options={{headerShown: false}} />
      <Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </Navigator>
  );
};


const getFonts = () => {
  return Font.loadAsync({
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('./src/assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./src/assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
  });
};


const App = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  } else {
    return <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={(e) => console.warn(e)}
    />;
  }
}

export default App;