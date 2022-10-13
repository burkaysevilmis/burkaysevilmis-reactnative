export interface Product {
  _id: string;
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ProductsModel<T> {
  message: string;
  products: T;
}

export interface ProductRequest {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}
