import { Image as IImage } from "sanity";

export interface Product {
  name: string;
  description?: string;
  gender: string;
  price: string;
  category?: string;
  imageUrl: IImage;
  previews?: Array<IImage>;
}
