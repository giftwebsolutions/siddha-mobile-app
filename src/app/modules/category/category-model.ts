export type CategoryTranslation = {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    url_path: string;
    description?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    locale_id?: number;
    locale?: string;
}

export type Categories = {
    id: number;
    name: string;
    slug: string;
    display_mode?: string;
    description?: string;
    meta_title?: string;
    meta_description: string;
    meta_keywords?: string;
    status: number;
    banner_url?: string | null;
    logo_url?: string | null;
    translations?: CategoryTranslation[];
    additional?: any[];
    created_at?: string;
    updated_at?: string;
}[];

export type Category = {
    id: number;
    name: string;
    slug: string;
    display_mode?: string;
    description?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    status?: number;
    image_url?: string;
    category_icon_path?: string;
    additional?: any;
    created_at?: string;
    updated_at?: string;
}
