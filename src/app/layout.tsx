import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import DemoSwitcher from "../components/DemoSwitcher";

export const metadata: Metadata = {
  title: "Madhu Mart Australia - Fast, Trusted Online Shopping | Electronics, Fashion & Home",
  description: "Australia's premier online shopping destination. Fast Australia Post Express delivery from Sydney & Melbourne hubs, Afterpay & Zip, and Australian Consumer Law protection.",
  keywords: "ecommerce australia, online shopping sydney, melbourne shopping, afterpay electronics, aussie deals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DemoSwitcher />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
