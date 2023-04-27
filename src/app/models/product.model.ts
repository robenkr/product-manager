export interface Product {
  uid: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  available: boolean;
  store: string;
  created_at: Date;
  updated_at: Date | null;
}
