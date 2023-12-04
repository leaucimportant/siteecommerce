export type Product = {
  id: number;
  brand?: string;
  name: string;
  description: string;
  // images: string[];
  // imagesSmall: string[];
  image: string;
  price: number;
  isSaleOff: boolean;
  saleOffPrice?: number;
};
