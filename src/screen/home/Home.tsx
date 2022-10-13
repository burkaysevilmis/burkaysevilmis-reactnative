import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color, FONTS} from 'src/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import TabItem from 'src/components/TabItem';
import {Category} from 'src/models/categories';
import {
  useGetCategoriesMutation,
  useGetProductsMutation,
} from 'src/store/slice/manageApi';
import {GeneralMessage} from 'src/models/manage';
import {Product} from 'src/models/product';
import ProductItem from '../product/ProductItem';
import { useNavigation } from '@react-navigation/native';
import { MainPropsNavigation } from 'src/models/navigation';

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [getCategories] = useGetCategoriesMutation();
  const [getProducts] = useGetProductsMutation();
  const {navigate}=useNavigation<MainPropsNavigation<'Home'>>();
  useEffect(() => {
    getCategories({_id: '-1'})
      .unwrap()
      .then(res => {
        if (res.message === GeneralMessage.success) {
          let dataCategory: Category[] = [
            {
              __v: -1,
              _id: '-1',
              createdAt: new Date(),
              name: 'All',
              updatedAt: new Date(),
            },
          ];
          dataCategory = dataCategory.concat(res.categories);
          setCategories(dataCategory);
          getProducts({_id: '-1'})
            .unwrap()
            .then(response => {
              if (res.message === GeneralMessage.success) {
                setProducts(response.products);
                setFilterProducts(response.products);
              }
            });
        }
      });
  }, []);
  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products);
    } else {
      const filter = products.filter(s =>
        s.category
          .toLocaleLowerCase()
          .includes(categories[activeCategory].name.toLocaleLowerCase()),
      );
      setFilterProducts(filter);
    }
  }, [activeCategory]);
  const handleCreateButton=()=>{
    navigate('CreateProduct');
  }
  return (
    <SafeAreaView style={styles.flex}>
      <Pressable onPress={handleCreateButton} style={styles.plusBox}>
        <Icon name="plus" size={RFValue(22)} color="black" />
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Upayments Store</Text>
        <Icon name="search" size={RFValue(22)} color="black" />
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{maxHeight: 40}}
          horizontal
          data={categories}
          renderItem={({item, index}) => {
            return (
              <TabItem
                _id={item._id}
                indexNumber={index}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                isActive={activeCategory === index ? true : false}
                label={item.name}
              />
            );
          }}
        />
      </View>
      <View style={styles.productBox}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          columnWrapperStyle={{justifyContent: 'space-between', marginTop: 10}}
          numColumns={2}
          data={filterProducts}
          renderItem={({item, index}) => {
            return <ProductItem {...item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.gray,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  txtHeader: {
    ...FONTS.f7b,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  productBox: {
    flex: 1,
    marginTop: 10,
  },
  plusBox: {
    position: 'absolute',
    zIndex: 99,
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: RFValue(18),
    width: RFValue(36),
    height: RFValue(36),
  },
});
