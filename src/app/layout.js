import { Inter } from "next/font/google";
import "./globals.css";
// Defines the layout of the whole application (wrapping structure)

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Sushant Langhi",
  // Sets the default title and description for your website.
  // Used for SEO and browser tab display.

  description: "My website showcasing my work, skills and projects.",
  icons: {
    icon: "/favicon.ico", // ✅ path to your image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
