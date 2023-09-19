import "./globals.css";
import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";

const narrow = PT_Sans_Narrow({ subsets: ["latin"], weight: ["400", "700"] });
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Vizualytics - Visualize Your Data Insights",
  description:
    "Vizualytics is your comprehensive data analytics and visualization platform, designed to empower you with intuitive tools for exploring, understanding, and communicating data-driven insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={narrow.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
