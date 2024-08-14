import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SIZE = SCREEN_WIDTH * 0.75;
export const STROKE_WIDTH = 8; // Reduced stroke width for narrower lines
export const CENTER = SIZE / 2;
export const LINE_COUNT = 100; // Keep the line count
export const BASE_LINE_LENGTH = STROKE_WIDTH * 4.5; // Reduced base line length for more gap
export const ANGLE_STEP = (2 * Math.PI) / LINE_COUNT;
