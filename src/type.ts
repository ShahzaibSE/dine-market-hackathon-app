import { Image as IImage } from "sanity";

export interface Product {
  _id: string;
  name: string;
  description?: string;
  gender: string;
  price: string;
  category?: string;
  imageUrl: IImage;
  previews: Array<IImage>;
  // quantity: number;
  user_id?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartAPIRequest {
  user_id: string;
  totalPrice: number;
  cartCount: number;
  cartDetails: Array<CartItem>
}