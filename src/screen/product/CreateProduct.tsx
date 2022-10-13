import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomInput from 'src/components/CustomInput';
import {FONTS, sizes} from 'src/constants';
import {GeneralMessage} from 'src/models/manage';
import {
  useAddProductsMutation,
  useGetCategoriesMutation,
} from 'src/store/slice/manageApi';
import {Category} from 'src/models/categories';
import CategoryItem from 'src/components/CategoryItem';
import {useFormik} from 'formik';
import {ProductRequest} from 'src/models/product';
import * as Yup from 'yup';
import {useAppDispatch} from 'src/store/hook';
import {setSnackBarText} from 'src/store/slice/manageSlice';
import {useNavigation} from '@react-navigation/native';
import {MainPropsNavigation} from 'src/models/navigation';

const ValidSchema = Yup.object().shape({
  avatar: Yup.string()
    .required('Image link required')
    .min(10, 'Image link required'),
  category: Yup.string().required('Category required'),
  description: Yup.string()
    .required('Description required')
    .min(5, 'description minimum length 5 character'),
  name: Yup.string()
    .required('Name required')
    .min(2, 'name minimum length 2 haracter'),
  price: Yup.number()
    .required('Price required')
    .positive()
    .min(1, 'name minimum length 2 haracter'),
});
const CreateProduct = () => {
  const initialValues: ProductRequest = {
    avatar: '',
    category: '',
    description: '',
    developerEmail: 'burkay.sevilmis@gmail.com',
    name: '',
    price: 0,
  };
  const {replace} = useNavigation<MainPropsNavigation<'CreateProduct'>>();
  const dispatch = useAppDispatch();
  const [getCategories] = useGetCategoriesMutation();
  const [addProduct] = useAddProductsMutation();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories({_id: '-1'})
      .unwrap()
      .then(res => {
        if (res.message === GeneralMessage.success) {
          setCategories(res.categories);
        }
      });
  }, []);

  const {
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    isValid,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: async value => {
      addProduct(value)
        .unwrap()
        .then(res => {
          if (res.message === GeneralMessage.success) {
            dispatch(
              setSnackBarText('The product has been successfully added'),
            );
            replace('Home');
          }
        });
    },
    validationSchema: ValidSchema,
  });
  const handleCategory = (categoryName: string) => {
    const item = categories.findIndex(
      s => s.name.toLocaleLowerCase() === categoryName.toLocaleLowerCase(),
    );
    if (item > -1) {
      setFieldValue('category', categories[item].name);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputBox}>
        <CustomInput
          onBlur={() => {
            setFieldTouched('name', false);
          }}
          onFocus={() => {
            setFieldTouched('name', true);
          }}
          value={values.name}
          onChangeText={handleChange('name')}
          placeholder="Product Title"
        />
        {errors.name && touched.name && (
          <Text style={styles.txtError}>{errors.name}</Text>
        )}
      </View>
      <View style={styles.inputBox}>
        <CustomInput
          keyboardType="number-pad"
          onBlur={() => {
            setFieldTouched('price', false);
          }}
          onFocus={() => {
            setFieldTouched('price', true);
          }}
          value={values.price.toString()}
          onChangeText={text => {
            if (text !== '') {
              setFieldValue('price', parseInt(text.toString()));
            }
          }}
          placeholder="Price"
        />
        {errors.price && touched.price && (
          <Text style={styles.txtError}>{errors.price}</Text>
        )}
      </View>
      <View style={styles.inputBox}>
        <CustomInput
          onBlur={() => {
            setFieldTouched('description', false);
          }}
          onFocus={() => {
            setFieldTouched('description', true);
          }}
          value={values.description}
          onChangeText={handleChange('description')}
          placeholder="Decription"
          style={styles.inputDescription}
          multiline
        />
        {errors.description && touched.description && (
          <Text style={styles.txtError}>{errors.description}</Text>
        )}
      </View>
      <View style={styles.inputBox}>
        <CustomInput
          onBlur={() => {
            setFieldTouched('avatar', false);
          }}
          onFocus={() => {
            setFieldTouched('avatar', true);
          }}
          value={values.avatar}
          onChangeText={handleChange('avatar')}
          placeholder="Image Link"
          style={styles.inputDescription}
          multiline
        />
        {errors.avatar && touched.avatar && (
          <Text style={styles.txtError}>{errors.avatar}</Text>
        )}
      </View>
      <View style={styles.categoryBox}>
        <Text style={styles.txtCategory}>
          Selected Category: {values.category}
        </Text>
        <FlatList
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return (
              <View style={styles.itemBox}>
                <CategoryItem
                  handleCategory={handleCategory}
                  item={item}
                  key={item._id}
                />
              </View>
            );
          }}
          data={categories}
        />
        {errors.category && (
          <Text style={styles.txtError}>{errors.category}</Text>
        )}
      </View>
      <View style={styles.buttonBox}>
        <Pressable
          disabled={!isValid}
          onPress={handleSubmit}
          style={[styles.btn, {backgroundColor: isValid ? 'black' : 'gray'}]}>
          <Text style={styles.txtBtn}>Add Product</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputBox: {
    marginTop: 10,
  },
  txtError: {
    ...FONTS.f1,
    color: 'red',
    marginTop: 5,
  },
  inputDescription: {height: 70, textAlignVertical: 'top'},
  txtCategory: {
    ...FONTS.f4,
    marginBottom: 10,
  },
  categoryBox: {marginTop: 10},
  itemBox: {
    marginRight: 5,
    flex: 1,
    height: 40,
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    height: 42,
    backgroundColor: 'black',
    width: sizes.width / 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    ...FONTS.f3,
    fontWeight: 'bold',
    color: 'white',
  },
});
