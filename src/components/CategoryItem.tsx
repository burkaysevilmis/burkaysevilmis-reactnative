import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Category} from 'src/models/categories';
import {FONTS} from 'src/constants';

type CategoryProps = {
  item: Category;
  handleCategory: (categoryName: string) => void;
};
const CategoryItem: React.FC<CategoryProps> = ({item, handleCategory}) => {
  return (
    <Pressable
      onPress={() => handleCategory(item.name)}
      style={styles.container}>
      <Text style={styles.txtName}>{item.name.toLocaleLowerCase()}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
  },
  txtName: {
    ...FONTS.f3,
    fontWeight: 'bold',
  },
});
