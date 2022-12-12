import { StyleSheet } from 'react-native';

import * as Utils from '../utils/main';


export const typography = StyleSheet.create({
  title: {
    fontSize: Utils.scale(10),
    fontWeight: 'bold',
  },
  button: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: Utils.scale(20),
  },
});