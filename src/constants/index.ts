import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
export const color = {
  primary: '#3EA849',
  accent: '#00B373',
  white: 'white',
  gray: '#F2F2F2',
  black: 'black',
  green: 'green',
  red: 'red',
  blue: 'blue',
  bg: '#FCFCFC',
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  input: {
    height: width < 330 ? RFValue(45) : RFValue(42),
    width: (width * 85) / 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(10),
    color: 'black',
    backgroundColor: 'white',
    flex: 1,
  },
};
export const sizes = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  fs0: RFValue(10),
  fs1: RFValue(11),
  fs2: RFValue(12),
  fs3: RFValue(13),
  fs4: RFValue(14),
  fs5: RFValue(15),
  fs6: RFValue(16),
  fs7: RFValue(17),
  fs8: RFValue(18),
  fs9: RFValue(19),
  fs10: RFValue(20),
  fs11: RFValue(21),
  // app dimensions
  width,
  height,
  isSmall: width < 330 ? true : false,
  m5: 5,
  p5: 5,
  m10: 10,
  p10: 10,
  m15: 15,
  p15: 15,
  m20: 20,
  p20: 20,
};
export const FONTS = {
  f0: {fontFamily: 'Helvetica', fontSize: sizes.fs0, color: '#000000'},
  f1: {fontFamily: 'Helvetica', fontSize: sizes.fs1, color: '#000000'},
  f2: {fontFamily: 'Helvetica', fontSize: sizes.fs2, color: '#000000'},
  f3: {fontFamily: 'Helvetica', fontSize: sizes.fs3, color: '#000000'},
  f4: {fontFamily: 'Helvetica', fontSize: sizes.fs4, color: '#000000'},
  f5: {fontFamily: 'Helvetica', fontSize: sizes.fs5, color: '#000000'},
  f6: {fontFamily: 'Helvetica', fontSize: sizes.fs6, color: '#000000'},
  f7: {fontFamily: 'Helvetica', fontSize: sizes.fs7, color: '#000000'},
  f8: {fontFamily: 'Helvetica', fontSize: sizes.fs8, color: '#000000'},
  f9: {fontFamily: 'Helvetica', fontSize: sizes.fs9, color: '#000000'},
  f10: {fontFamily: 'Helvetica', fontSize: sizes.fs10, color: '#000000'},
  f11: {fontFamily: 'Helvetica', fontSize: sizes.fs11, color: '#000000'},

  f0b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs0, color: '#000000'},
  f1b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs1, color: '#000000'},
  f2b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs2, color: '#000000'},
  f3b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs3, color: '#000000'},
  f4b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs4, color: '#000000'},
  f5b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs5, color: '#000000'},
  f6b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs6, color: '#000000'},
  f7b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs7, color: '#000000'},
  f8b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs8, color: '#000000'},
  f9b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs9, color: '#000000'},
  f10b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs10, color: '#000000'},
  f11b: {fontFamily: 'Helvetica-Bold', fontSize: sizes.fs11, color: '#000000'},
};
const Url = 'https://upayments-studycase-api.herokuapp.com/api';
const testUrl = '';
export const baseUrl = Url;

