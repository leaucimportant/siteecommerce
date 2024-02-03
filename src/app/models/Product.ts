import { Feedback } from './Feedback';

export type Product = {
  id: number;
  brand?: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  isSaleOff: boolean;
  saleOffPrice?: number;
  feedbacks: Feedback[];
};
