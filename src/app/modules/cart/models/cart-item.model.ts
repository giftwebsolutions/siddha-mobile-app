export interface CartItem {
    id: number;
    product_id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
    image?: string;
}
  