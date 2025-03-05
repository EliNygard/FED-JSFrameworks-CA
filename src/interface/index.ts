interface IProductImage {
  url: string;
  alt: string;
}

interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: IProductImage;
  rating: number;
  tags: string[];
  reviews: IReview[];
  quantity: number;
}
