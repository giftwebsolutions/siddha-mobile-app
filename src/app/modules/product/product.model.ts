export interface ProductResponse {
    data: Product[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

export interface Product {
    id: number;
    sku: string;
    name: string;
    description: string;
    url_key: string;
    base_image: ProductImage;
    images: ProductImage[];
    is_new: boolean;
    is_featured: boolean;
    on_sale: boolean;
    is_saleable: boolean;
    is_wishlist?: boolean;
    min_price: string;
    prices: {
        regular: PriceDetail;
        final: PriceDetail;
    };
    price_html?: string;
    ratings?: {
        average?: string;
        total?: number;
    };
    reviews?: {
        total?: number;
    };
    quantity: number,
    weight?: string;
}

export interface ProductImage {
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    original_image_url: string;
}

export interface PriceDetail {
    price: string;
    formatted_price: string;
}

export interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}
