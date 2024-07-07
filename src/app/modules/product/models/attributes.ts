export type Attribute = {
    id: number;
    name: string;
    admin_name ?: string;
    code?: string;
    type?: string;
    swatch_type?: string;
    options?: {
        id?: number;
        admin_name?: string;
        label?: string;
        swatch_value?: any;
    };
    validation?: string;
    position?: number;
    is_comparable?: number;
    is_configurable?: number;
    is_required?: number;
    is_unique?: number;
    is_filterable?: number;
    is_user_defined?: number;
    is_visible_on_front?: number;
    use_in_flat?: number;
    value_per_locale?: number;
    value_per_channel?: number;
    created_at?: string;
    updated_at?: string;
}

export type Meta = {
    current_page?: number;
    from?: number;
    last_page?: number;
    per_page?: number;
    links?: {
        url?: string | null;
        label?: string;
        active?: boolean;
    }[];
    path?: string;
    to?: number;
    total?: number;
}

export type AttributeResponse = {
    attribute: Attribute;
    meta?: Meta;
}
