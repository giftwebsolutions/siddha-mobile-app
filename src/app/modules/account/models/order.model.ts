export interface OrderItem {
    id: number;
    sku: string;
    name: string;
    qty_ordered: number;
    qty_shipped: number;
    qty_invoiced: number;
    qty_canceled: number;
    qty_refunded: number;
    price: number;
    formatted_price: string;
    base_price: number;
    formatted_base_price: string;
    total: number;
    formatted_total: string;
    base_total: number;
    formatted_base_total: string;
    tax_percent: string;
    tax_amount: number;
    base_tax_amount: string;
    product_id: number;
    product_type: string;
    order_id: number;
    parent_id: number;
    created_at: string;
    updated_at: string;
}

export interface Order {
    id: number;
    increment_id: string;
    customer_email: string;
    customer_first_name: string;
    customer_last_name: string;
    status: string;
    payment_title: string;
    base_currency_code: string;
    order_currency_code: string;
    grand_total: number;
    formatted_grand_total: string;
    base_grand_total: number;
    formatted_based_grand_total: string;
    items: OrderItem[];
    created_at: string;
    updated_at: string;
}
  