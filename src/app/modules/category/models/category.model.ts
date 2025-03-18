export interface Category {
    id: number;
    parent_id: number | null;
    name: string;
    slug: string;
    status: number;
    position: number;
    display_mode?: string;
    description?: string;
    logo?: {
        small_image_url?: string;
        medium_image_url?: string;
        large_image_url?: string;
        original_image_url?: string;
    };
    banner?: {
        small_image_url?: string;
        medium_image_url?: string;
        large_image_url?: string;
        original_image_url?: string;
    };
    meta?: {
        title?: string;
        keywords?: string;
        description?: string;
    };
    translations?: any[];
    additional?: any[];
}
