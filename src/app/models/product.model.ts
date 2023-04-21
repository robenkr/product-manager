export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number | null;
  available: boolean;
  storeName: string;
  createdAt: Date;
  updatedAt: Date | null;
}
