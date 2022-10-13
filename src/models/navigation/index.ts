import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { Product } from '../product';
export type MainStackParamList = {
  Home: undefined;
  ProductDetail: {product:Product};
  CreateProduct: undefined;
};
export type MainPropsNavigation<T extends keyof MainStackParamList> =
  StackNavigationProp<MainStackParamList, T>;
export type MainPropsRoute<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
