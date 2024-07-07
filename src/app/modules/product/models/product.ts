export type Product = {
    id?: number;
    sku?: string;
    name?: string;
    url_key?: string;
    price?: number;
    formatted_price?: string;
    short_description?: string;
    description?: string;
    images?: ProductImages;
    videos?: ProductVideos;
    base_image?: ProductBaseImage;
    created_at?: string;
    updated_at?: string;
    reviews?: ProductReviews;
    in_stock?: boolean;
    is_saved?: boolean;
    is_item_in_cart?: boolean;
    show_quantity_changer?: boolean;
    currency_options?: ProductCurrencyOptions;
    special_price?: number;
    formatted_special_price?: string;
    regular_price?: number;
    formatted_regular_price?: string;
    variants?: ProductVariants;
    super_attributes?: ProductSuperAttributes;
    grouped_products?: ProductGroupedProducts;
    downloadable_links?: ProductDownloadableLinks;
    downloadable_samples?: ProductDownloadableSamples;
    bundle_options?: ProductBundleOptions;
    booking?: ProductBooking;
    slot_index_route?: string;
    today_slots_html?: string;
    week_slot_durations?: ProductWeekSlotDurations[];
    event_date?: string;
}

export type ProductImages = {
    id?: number;
    type?: string;
    path?: string;
    url?: string;
    original_image_url?: string;
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    product_id?: number;
    position?: number;
}

export type ProductVideos = {
    id?: number;
    type?: string;
    path?: string;
    url?: string;
}

export type ProductBaseImage = {
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    original_image_url?: string;
}

export type ProductReviews = {
    total?: number;
    total_rating?: string;
    average_rating?: string;
    percentage?: {
        [key: string]: number;
    };
}

export type ProductCurrencyOptions = {
    symbol?: string;
    decimal?: string;
    format?: string;
}

export type ProductVariants = {
    id?: number;
    type?: string;
    attribute_family_id?: number;
    sku?: string;
    product_number?: string;
    name?: string;
    url_key?: string;
    tax_category_id?: number;
    new?: boolean;
    featured?: boolean;
    visible_individually?: boolean;
    guest_checkout?: boolean;
    status?: boolean;
    color?: number;
    size?: number;
    brand?: any;
    short_description?: string;
    description?: string;
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    price?: number;
    cost?: number;
    special_price?: number;
    special_price_from?: string;
    special_price_to?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    inventories?: ProductInventories;
    ordered_inventories?: ProductOrderedInventories;
    customer_group_prices?: ProductCustomerGroupPrices;
    attribute_values?: ProductAttributeValues;
    additional?: any[];
    parent_id?: number;
    qty?: number;
    isSaleable?: boolean;
    formatted_price?: string;
    show_quantity_changer?: boolean;
}

export type ProductInventories = {
    id?: number;
    qty?: number;
    product_id?: number;
    inventory_source_id?: number;
    vendor_id?: number;
}

export type ProductOrderedInventories = {
    id?: number;
    qty?: number;
    product_id?: number;
    channel_id?: number;
}

export type ProductCustomerGroupPrices = {
    id?: number;
    qty?: number;
    value_type?: string;
    value?: number;
    product_id?: number;
    customer_group_id?: number;
    created_at?: string;
    updated_at?: string;
}

export type ProductAttributeValues = {
    id?: number;
    locale?: string;
    channel?: string;
    text_value?: string;
    boolean_value?: boolean;
    integer_value?: number;
    float_value?: number;
    datetime_value?: string;
    date_value?: string;
    json_value?: {
        [key: string]: any;
    };
    product_id?: number;
    attribute_id?: number;
}

export type ProductSuperAttributes = {
    id?: number;
    name?: string;
    admin_name?: string;
    code?: string;
    type?: string;
    swatch_type?: string;
    options?: ProductSuperAttributeOptions;
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

export type ProductSuperAttributeOptions = {
    id?: number;
    admin_name?: string;
    label?: string;
    swatch_value?: any;
}

export type ProductGroupedProducts = {
    id?: number;
    type?: string;
    attribute_family_id?: number;
    sku?: string;
    product_number?: string;
    name?: string;
    url_key?: string;
    tax_category_id?: number;
    new?: boolean;
    featured?: boolean;
    visible_individually?: boolean;
    guest_checkout?: boolean;
    status?: boolean;
    color?: number;
    size?: number;
    brand?: any;
    short_description?: string;
    description?: string;
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    price?: number;
    cost?: number;
    special_price?: number;
    special_price_from?: string;
    special_price_to?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    inventories?: ProductInventories;
    ordered_inventories?: ProductOrderedInventories;
    customer_group_prices?: ProductCustomerGroupPrices;
    attribute_values?: ProductAttributeValues;
    additional?: any[];
    parent_id?: number;
    qty?: number;
    isSaleable?: boolean;
    formatted_price?: string;
    show_quantity_changer?: boolean;
}

export type ProductDownloadableLinks = {
    id?: number;
    title?: string;
    translations?: ProductDownloadableLinkTranslations;
    type?: string;
    url?: string;
    file?: string;
    file_name?: string;
    file_url?: string;
    price?: string;
    sample_type?: string;
    sample_url?: string;
    sample_file?: string;
    sample_file_name?: string;
    sample_file_url?: string;
    sample_download_url?: string;
    downloads?: number;
    sort_order?: number;
    product_id?: number;
    created_at?: string;
    updated_at?: string;
}

export type ProductDownloadableLinkTranslations = {
    id?: number;
    locale?: string;
    title?: string;
    product_downloadable_link_id?: number;
}

export type ProductDownloadableSamples = {
    id?: number;
    title?: string;
    translations?: ProductDownloadableSampleTranslations;
    type?: string;
    url?: string;
    file?: string;
    file_name?: string;
    file_url?: string;
    download_url?: string;
    sort_order?: number;
    product_id?: number;
    created_at?: string;
    updated_at?: string;
}

export type ProductDownloadableSampleTranslations = {
    id?: number;
    locale?: string;
    title?: string;
    product_downloadable_sample_id?: number;
}

export type ProductBundleOptions = {
    options?: ProductBundleOption[];
}

export type ProductBundleOption = {
    id?: number;
    label?: string;
    type?: string;
    is_required?: number;
    sort_order?: number;
    products?: ProductBundleOptionProduct[];
}

export type ProductBundleOptionProduct = {
    id?: number;
    qty?: number;
    name?: string;
    product_id?: number;
    is_default?: number;
    sort_order?: number;
    in_stock?: boolean;
    inventory?: number;
    price?: ProductBundleOptionProductPrice;
}

export type ProductBundleOptionProductPrice = {
    regular_price?: ProductPrice;
    final_price?: ProductPrice;
}

export type ProductPrice = {
    price?: number;
    formated_price?: string;
}

export type ProductBooking = {
    id?: number;
    type?: string;
    qty?: number;
    location?: string;
    show_location?: number;
    available_every_week?: any;
    available_from?: string;
    available_to?: string;
    product_id?: number;
    created_at?: string;
    updated_at?: string;
    default_slot?: ProductDefaultSlot;
    appointment_slot?: ProductAppointmentSlot;
    event_tickets?: ProductEventTicket[];
    rental_slot?: ProductRentalSlot;
    table_slot?: ProductTableSlot;
}

export type ProductDefaultSlot = {
    id?: number;
    booking_type?: string;
    duration?: number;
    break_time?: number;
    booking_product_id?: number;
    slots?: ProductDefaultSlotTime[];
}

export type ProductDefaultSlotTime = {
    from?: string;
    to?: string;
    from_day?: string;
    to_day?: string;
}

export type ProductAppointmentSlot = {
    id?: number;
    duration?: number;
    break_time?: number;
    same_slot_all_days?: number;
    booking_product_id?: number;
    slots?: {
        [key: string]: ProductAppointmentSlotTime[];
    };
}

export type ProductAppointmentSlotTime = {
    from?: string;
    to?: string;
}

export type ProductEventTicket = {
    id?: number;
    price?: string;
    qty?: number;
    special_price?: number;
    special_price_from?: string;
    special_price_to?: string;
    booking_product_id?: number;
    original_converted_price?: number;
    original_formated_price?: string;
    converted_price?: number;
    formated_price?: string;
    formated_price_text?: string;
    name?: string;
    description?: string;
    translations?: ProductEventTicketTranslation[];
}

export type ProductEventTicketTranslation = {
    id?: number;
    locale?: string;
    name?: string;
    description?: string;
    booking_product_event_ticket_id?: number;
}

export type ProductRentalSlot = {
    id?: number;
    renting_type?: string;
    daily_price?: number;
    hourly_price?: number;
    same_slot_all_days?: number;
    booking_product_id?: number;
    slots?: ProductRentalSlotTime[][];
}

export type ProductRentalSlotTime = {
    from?: string;
    to?: string;
}

export type ProductTableSlot = {
    id?: number;
    price_type?: string;
    guest_limit?: number;
    duration?: number;
    break_time?: number;
    prevent_scheduling_before?: number;
    same_slot_all_days?: number;
    booking_product_id?: number;
    slots?: ProductTableSlotTime[][];
}

export type ProductTableSlotTime = {
    from?: string;
    to?: string;
}

export type ProductWeekSlotDurations = {
    name?: string;
    slots?: ProductWeekSlotDuration[];
}

export type ProductWeekSlotDuration = {
    id?: string;
    from?: string;
    to?: string;
}
