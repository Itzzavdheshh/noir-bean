"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CurrencyCode = "INR" | "USD";

interface CurrencyContextValue {
  currency: CurrencyCode;
  symbol: string;
  toggle: () => void;
  format: (value: number | string) => string;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "INR",
  symbol: "₹",
  toggle: () => {},
  format: (v) => `₹${Number(v).toFixed(0)}`,
});

// 1 INR ≈ 0.012 USD (fixed rate for display)
const USD_RATE = 0.012;

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  useEffect(() => {
    const saved = localStorage.getItem("noir-currency") as CurrencyCode | null;
    if (saved === "INR" || saved === "USD") setCurrency(saved);
  }, []);

  const toggle = () => {
    const next: CurrencyCode = currency === "INR" ? "USD" : "INR";
    setCurrency(next);
    localStorage.setItem("noir-currency", next);
  };

  const symbol = currency === "INR" ? "₹" : "$";

  const format = (value: number | string) => {
    const num = Number(value);
    if (currency === "USD") {
      return `$${(num * USD_RATE).toFixed(2)}`;
    }
    return `₹${num.toFixed(0)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol, toggle, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
