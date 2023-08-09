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
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}