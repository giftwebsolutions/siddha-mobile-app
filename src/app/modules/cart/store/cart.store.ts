import { patchState, signalStore, withState, withMethods } from '@ngrx/signals';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../cart.service';
import { inject } from '@angular/core';
import { SignalsDictionary } from '@ngrx/signals/src/signal-store-models';

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const CartStore = createSignalStore(
    { providedIn: 'root' },

    // ✅ Define initial state
    withState(initialState),

    // ✅ Computed properties from state
    withComputed(({ state }) => ({
        items: () => state().items,
        totalQuantity: () => state().items.reduce((sum, item) => sum + item.quantity, 0),
        totalAmount: () => state().items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    })),

    // ✅ Define store methods
    withMethods(({ setState, update }) => {
        const cartService = inject(CartService);

        return {
            loadCart: () => {
                cartService.getCart().subscribe((res) => {
                    const items: CartItem[] = res.data.map((item: any) => ({
                        id: item.id,
                        product_id: item.product_id,
                        name: item.name,
                        price: +item.price,
                        quantity: +item.qty,
                        total: +item.qty * +item.price,
                        image: item.image ?? '',
                    }));
                    setState({ items });
                });
            },

            addItem: (product_id: number, qty: number) => {
                cartService.addToCart({ product_id, qty }).subscribe(() => {
                    // Re-fetch cart
                });
            },

            updateQty: (itemId: number, qty: number) => {
                cartService.updateQty({ cart_item_id: itemId, qty }).subscribe(() => { });
            },

            removeItem: (itemId: number) => {
                cartService.removeItem(itemId).subscribe(() => { });
            },
        };
    })
);
