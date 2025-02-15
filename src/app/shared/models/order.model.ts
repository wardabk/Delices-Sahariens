export interface Order {
    id: number;
    userId: number;
    products: { productId: number, quantity: number }[];
    totalAmount: number;
    status: string;
  }

