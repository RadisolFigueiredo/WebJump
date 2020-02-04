export interface Product {
  id: number;
  sku: string;
  path: string;
  name: string;
  image: string;
  price: number;
  specialPrice?: number;
}
