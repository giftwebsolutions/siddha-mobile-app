export type Link = {
    url?: string | null;
    label?: string;
    active?: boolean;
}

export type Meta = {
    current_page?: number;
    from?: number;
    last_page?: number;
    links?: Link[];
    path?: string;
    per_page?: number;
    to?: number;
    total?: number;
}

export type Response = {
    data: any;
    links?: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta?: Meta;
}
