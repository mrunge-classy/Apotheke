"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "./products";
import type { CartLine } from "./types";

const STORAGE_KEY = "apotheke-stadtpark-cart";
export const FREE_SHIPPING_THRESHOLD = 40;
export const STANDARD_SHIPPING_COST = 3.9;

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  shippingCost: number;
  total: number;
  amountToFreeShipping: number;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  isHydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore write failures (e.g. private browsing quota)
    }
  }, [lines, isHydrated]);

  const addItem = useCallback((slug: string, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) =>
          l.slug === slug ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { slug, quantity }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setLines((prev) => {
      if (quantity <= 0) return prev.filter((l) => l.slug !== slug);
      return prev.map((l) => (l.slug === slug ? { ...l, quantity } : l));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const { itemCount, subtotal } = useMemo(() => {
    let itemCount = 0;
    let subtotal = 0;
    for (const line of lines) {
      const product = getProduct(line.slug);
      if (!product) continue;
      itemCount += line.quantity;
      subtotal += product.price * line.quantity;
    }
    return { itemCount, subtotal };
  }, [lines]);

  const shippingCost =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  const total = subtotal + shippingCost;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const value: CartContextValue = {
    lines,
    itemCount,
    subtotal,
    shippingCost,
    total,
    amountToFreeShipping,
    addItem,
    removeItem,
    setQuantity,
    clear,
    isHydrated,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
