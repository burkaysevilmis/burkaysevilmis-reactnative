import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from 'src/models/product';
import Icon from 'react-native-vector-icons/Entypo';
import {color, FONTS, sizes} from 'src/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {MainPropsNavigation} from 'src/models/navigation';
// type ProductProps = {
//   item: Product;
// };
const ProductItem: React.FC<Product> = props => {
  const {avatar, price} = props;
  const {navigate} = useNavigation<MainPropsNavigation<'ProductDetail'>>();
  const handlePress = ()=>{
    navigate('ProductDetail', {product: props});
  };
  return (
    <Pressable onPress={handlePress} style={styles.box}>
      <View style={styles.imgBox}>
        <Image resizeMode="contain" style={styles.img} source={{uri: avatar}} />
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.txtDetail}>New</Text>
        <View style={styles.bottomPriceBox}>
          <Text style={styles.txtDetail}>${price}</Text>
          <Icon name="edit" size={RFValue(14)} color="white" />
        </View>
      </View>
    </Pressable>
  );
};
export default ProductItem;
const styles = StyleSheet.create({
  box: {
    width: sizes.width * 0.45,
    height: sizes.height / 4,
    backgroundColor: 'white',
    borderRadius: 8,
    ...color.shadow,
    overflow: 'hidden',
  },
  imgBox: {
    width: '100%',
    height: '70%',
    marginTop: 5,
  },
  img: {
    width: '100%',
    height: '90%',
  },
  detailBox: {
    backgroundColor: 'black',
    borderRadius: 8,
    height: '30%',
    padding: 5,
  },
  txtDetail: {
    ...FONTS.f3b,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomPriceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
});
