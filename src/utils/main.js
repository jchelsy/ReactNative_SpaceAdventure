import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

import { SCREEN_WIDTH, SCREEN_HEIGHT } from './dimensions';

function scale(weight) {
  return Math.round(SCREEN_WIDTH / weight);
}


export { StatusBarHeight, SCREEN_WIDTH, SCREEN_HEIGHT, scale };