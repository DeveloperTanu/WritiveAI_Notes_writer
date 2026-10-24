import Navbar from "@/components/Navbar";
import "./globals.css";

import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-linear-0 from-blue-100 transition-colors dark:bg-zinc-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}