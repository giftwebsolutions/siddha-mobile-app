export interface User {
    id: number;
    email: string;
    name: string;
    first_name: string;
    last_name: string;
    gender: string | null;
    date_of_birth: string | null;
    phone: string | null;
    status: number;
    group: {
        id: number;
        name: string;
        created_at: string | null;
        updated_at: string | null;
    };
    created_at: string;
    updated_at: string;
    token: string;
}
  