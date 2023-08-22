import { InferModel } from "drizzle-orm";
import { Image as IImage } from "sanity";
import { cartTable } from "./lib/drizzle";

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

export interface CartAPIModel {
  totalprice: number;
  cartcount: number;
  productid: string;
  name: string;
  category: string;
  imageurl: any,
  price: number;
  quantity: number;
}

export type CartAPIType = InferModel<typeof cartTable>
export type CartAPIInsertType = InferModel<typeof cartTable, "insert">
