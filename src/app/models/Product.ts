export type Product = {
    brand?: string;
    productTitle: string;
    description: string;
    images: string[];
    imagesSmall: string[];
    price: number;
    isSaleOff: boolean;
    saleOffPrice?: number;
}
