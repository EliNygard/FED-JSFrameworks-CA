export interface IProductImage {
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

export interface IOrderDetails {
  email: string;
  firstName: string;
  lastName: string;
  streetName: string;
  city: string;
  cardNumber: string;
}

export interface ICartState {
  products: IProduct[];
  cartTotal: number;
  cartQuantity: number;
  discountTotal: number;
}

export interface IProductProps {
  product: IProduct;
}

export interface ProductsListProps {
  data: IProduct[];
}

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface CartTotalsProps {
  cartTotal: number;
  discountTotal: number;
}

export interface CheckoutSuccessDisplayProps {
  orderDetails: IOrderDetails;
  cartItems: IProduct[];
  cartTotal: number;
  discountTotal: number;
}

export interface CheckoutSuccessItemProps {
  price: number;
  discountedPrice: number;
  quantity: number;
  image: IProductImage;
  title: string;
}
