import {StyleSheet, TextInput, TextInputProps, } from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS, sizes} from 'src/constants';

const CustomInput = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: RFValue(40),
    width: sizes.width * 0.9,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    paddingLeft: 10,
    ...FONTS.f3,
  },
});
