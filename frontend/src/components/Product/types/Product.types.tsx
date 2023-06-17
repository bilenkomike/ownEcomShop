import { UserType } from "components/AuthComponents/Login/store/useAuth";

export type Attribute = {
  id: string;
  type: "color" | "text";
  items: {
    name: string;
    value: string;
  }[];
  selectedValue?: string;
};

export interface ProductAttribbute {
  id?: string;
  type?: "color" | "text";
  items?:
    | {
        name: string;
        value: string;
      }[]
    | undefined;

  qty: number;
  attribute: {
    attribute: string;
    id: number;
    values: {
      id: number;
      value: string;
      displayValue: string;
      attribute: number;
    }[];
  }[];
  values: {
    id: number;
    value: string;
    displayValue: string;
    attribute: number;
  }[];
  selectedValue?: string;
}

export type Attributes = Attribute[];

type GallaryItemType = string | undefined;

// interface ProductInterface {
//   id: string;
//   name: string;
//   price: number;
//   currency: string;
//   rating?: number;
//   sale?: number;
//   wishlist?: boolean;
//   size: "small" | "large";
//   gallary: string[];
//   attributes?: Attributes;
// }

// export default ProductInterface;

type ProductImage = {
  id: number;
  image: string;
  alt: string;
};

type Currency = {
  currency: string;
  symbol: string;
};

type ProductPrice = {
  id: number;
  amount: string;
  currency: Currency;
};

type ProductReview = {
  id: number;
  likes: number;
  dislikes: number;
  review: string;
  date: string;
  rating: string;
  product: number;
  author: UserType;
  reply: null | number;
};

interface ProductInterface {
  id: number;
  images: ProductImage | ProductImage[];
  video: string | null;
  prices: ProductPrice[];
  type: string;
  categry: string;
  reviews: ProductReview[] | null;
  // productDetails: {}
}

export default ProductInterface;

export interface ProductCartInterface {
  id: string;

  title: string;
  price?: number;
  prices: {
    amount: number;
    currency: {
      currency: string;
      symbol: string;
    };
    id: number;
  }[];
  currency: string;
  rating?: number;
  sale?: number;
  wishlist?: boolean;
  size: "small" | "large";
  // gallary: GallaryItemType;
  gallary: GallaryItemType[];
  attributes?: ProductAttribbute[];
  art_no?: string | number;
  image_1?: GallaryItemType;
  image_2?: GallaryItemType;
  image_3?: GallaryItemType;
  image_4?: GallaryItemType;
}
