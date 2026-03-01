export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Client {
  id: string;
  name: string;
}

export interface SaleItem {
  product: Product;
  quantity: number;
}

export interface Sale {
  id: string;
  client: Client;
  items: SaleItem[];
  total: number;
  date: string;
  paymentMethod: string;
}