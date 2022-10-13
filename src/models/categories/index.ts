export interface Category {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface CategoriesModel<T> {
  message: string;
  categories: T;
}