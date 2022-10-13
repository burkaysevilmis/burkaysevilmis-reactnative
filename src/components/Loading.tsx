import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {color, sizes} from 'src/constants/index';

type LoadingProps = {
  zIndex?: number;
};
const LoadingGlobal = ({zIndex = 1}: LoadingProps) => {
  return (
    <View style={[styles.flex, {zIndex}]}>
      <ActivityIndicator size="large" color={color.primary} />
    </View>
  );
};

export default LoadingGlobal;

const styles = StyleSheet.create({
  flex: {
    width: sizes.width,
    height: sizes.height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 150,
  },
});
