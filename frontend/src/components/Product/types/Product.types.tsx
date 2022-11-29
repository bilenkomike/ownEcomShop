export type Attribute = {
  id: string;
  type: "color" | "text";
  items: {
    name: string;
    value: string;
  }[];
  selectedValue?: string;
};

export type Attributes = Attribute[];

interface ProductInterface {
  id: string;

  name: string;
  price: number;
  currency: string;
  rating?: number;
  sale?: number;
  wishlist?: boolean;
  size: "small" | "large";
  gallary: string[];
  attributes?: Attributes;
}

export default ProductInterface;
