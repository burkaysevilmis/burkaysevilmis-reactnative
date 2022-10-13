/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FONTS} from 'src/constants';

type TabProps = {
  label: string;
  isActive: boolean;
  indexNumber: number;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
  activeCategory: number;
  _id:string;
};
const TabItem: React.FC<TabProps> = ({
  isActive,
  label,
  activeCategory,
  indexNumber,
  setActiveCategory,
  _id
}) => {
  const handlePress = () => {
    if (activeCategory !== indexNumber) {
      setActiveCategory(indexNumber);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.box,
        {
          backgroundColor: isActive ? 'white' : 'black',
          padding: 5,
          borderWidth: isActive ? 2 : 0,
        },
      ]}>
      <Text
        style={[
          styles.txtCategorieName,
          {color: isActive ? 'black' : 'white'},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  txtCategorieName: {
    ...FONTS.f2,
  },
});
