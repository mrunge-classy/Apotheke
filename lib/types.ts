import type { IconName } from "@/components/shared/Icon";

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: IconName;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  packSize: string;
  brand: string;
  activeIngredient?: string;
  shortDescription: string;
  description: string;
  usage: string;
  freeOfPrescription: true;
  isNew?: boolean;
  isFeatured?: boolean;
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  readTimeMinutes: number;
  publishedAt: string;
  author: string;
  authorRole: string;
  content: ContentBlock[];
};

export type CartLine = {
  slug: string;
  quantity: number;
};

export type Address = {
  fullName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  email: string;
  phone?: string;
};

export type ShippingMethod = "standard" | "express" | "pickup";
export type PaymentMethod = "card" | "sepa" | "invoice";

export type OrderItem = {
  slug: string;
  name: string;
  quantity: number;
  unitPrice: number;
};

export type Order = {
  id: string;
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
  address: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
};
