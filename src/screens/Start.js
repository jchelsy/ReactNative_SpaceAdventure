import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { main, typography, Colors } from '../styles/main';
import * as Utils from '../utils/main';

import Logo from '../assets/images/logo.svg';


// Scale the logo based on the device's screen width
const logo_size = Math.round(Utils.SCREEN_WIDTH * 0.8);

const StartScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} style={main.flex}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={main.container}>

        <View style={{marginTop: '10%'}}>
          <Text style={[typography.title, {color: Colors.LIGHT_GRAY}]}>
            Space Adventure
          </Text>
        </View>

        <View style={main.center}>
          <Logo width={logo_size} height={logo_size} />
        </View>

        <TouchableOpacity
          style={[styles.buttonStyle, {backgroundColor: Colors.PURPLE}]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={[typography.button, {color: Colors.WHITE}]}>
            Get Started!
          </Text>
          <MaterialIcon
            name="arrow-forward-ios"
            size={Utils.scale(20)}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default StartScreen;


const styles = StyleSheet.create({
  buttonStyle: {
    padding: 20,
    width: '80%',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
});