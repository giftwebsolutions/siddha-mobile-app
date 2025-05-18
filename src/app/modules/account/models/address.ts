export interface Address {
    id: number;
    first_name: string;
    last_name: string;
    company_name: string;
    vat_id: string | null;
    address: string[];
    country: string;
    country_name: string;
    state: string;
    city: string;
    postcode: string;
    phone: string;
    email: string;
    is_default: boolean;
    created_at: string;
    updated_at: string;
  }