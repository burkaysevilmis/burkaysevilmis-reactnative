import React from 'react';
import {useGetProductsMutation} from './store/slice/manageApi';
import {MainStackParamList} from './models/navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateProduct, Home, ProductDetail} from './screen';
const Stack = createStackNavigator<MainStackParamList>();

export default function Router() {
  // const [getProducts]=useGetProductsMutation();
  // React.useEffect(() => {
  //  getProducts().unwrap().then(s=>console.log(s))
  // }, [])
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
