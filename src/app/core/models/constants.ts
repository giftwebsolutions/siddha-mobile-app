export type SortFilterItem = {
    key: string;
    title: string;
    slug: string | null;
    sortKey: 'name' | 'created_at' | 'price' | 'PRICE';
    reverse: boolean;
    position: string;
};

export const defaultSort: SortFilterItem = {
    key: '0',
    title: 'From A-Z',
    slug: 'name-asc',
    sortKey: 'name',
    reverse: false, //asc
    position: '1'
};

export const sorting: SortFilterItem[] = [
    defaultSort,
    {
        key: '1',
        title: 'From Z-A',
        slug: 'name-desc',
        sortKey: 'name',
        reverse: true, //'desc',
        position: '2'
    },
    {
        key: '2',
        title: 'Newest First',
        slug: 'created_at-desc',
        sortKey: 'created_at',
        reverse: true, //'desc',
        position: '3'
    },
    {
        key: '3',
        title: 'Oldest First',
        slug: 'created_at-asc',
        sortKey: 'created_at',
        reverse: false, // 'asc',
        position: '4'
    },
    {
        key: '4',
        title: 'Cheapest First',
        slug: 'price-asc',
        sortKey: 'price',
        reverse: false, //'asc',
        position: '5'
    },
    {
        key: '5',
        title: 'Expensive First',
        slug: 'price-desc',
        sortKey: 'price',
        reverse: true, //'desc',
        position: '6'
    }
];

export const TAGS = {
    collections: 'collections',
    products: 'products',
    cart: 'cart'
};

export const FILTER_ATTRIBUTE = {
    sorting: 'sortings'
};
export const CHECKOUT = {
    shipping: 'collections',
    method: 'products',
    cart: 'cart'
};