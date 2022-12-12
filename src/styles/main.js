import { StyleSheet } from 'react-native';

import * as Utils from '../utils/main';

import * as Colors from './colors';
import { typography } from './typography';


const main = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Utils.StatusBarHeight,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export { main, typography, Colors };