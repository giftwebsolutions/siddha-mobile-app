import { CartItem } from './cart-item.model';

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}
