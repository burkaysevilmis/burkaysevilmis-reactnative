import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import {useRoute} from '@react-navigation/native';
import {MainPropsRoute} from 'src/models/navigation';
import {FONTS, sizes} from 'src/constants';

const ProductDetail = () => {
  const {
    params: {product},
  } = useRoute<MainPropsRoute<'ProductDetail'>>();
  return (
    <Fragment>
      <SafeAreaView style={styles.flex0} />
      <SafeAreaView style={styles.container}>
        <View style={styles.ImageBox}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{uri: product.avatar}}
          />
        </View>
        <View style={styles.productDetailBox}>
          <View style={styles.detailBoxHeader}>
            <Text style={styles.txtName}>
              {product.name.toLocaleUpperCase()}
            </Text>
            <Text style={styles.txtPrice}>${product.price}</Text>
          </View>
          <View style={styles.productDescription}>
            <Text style={styles.txtDescription}>{product.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ImageBox: {
    width: sizes.width,
    height: sizes.height / 2,
    backgroundColor: 'white',
  },
  flex0: {
    flex: 0,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  productDetailBox: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailBoxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  txtName: {
    ...FONTS.f5b,
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
  },
  txtPrice: {
    ...FONTS.f4b,
    color: 'white',
    fontWeight: 'bold',
  },
  productDescription: {
    flex: 1,
    margin: 20,
  },
  txtDescription: {
    ...FONTS.f2,
    color: 'white',
  },
});
