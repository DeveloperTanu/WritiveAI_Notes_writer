import Navbar from "@/components/Navbar";
import "./globals.css";
import LandingPageTop from "@/components/LandingPageTop";
import Footer from "@/components/Footer";
const layout = ({ children }) => {
  return (
    <div>
      <html suppressHydrationWarning>
        <body className="bg-linear-0 from-blue-100 transition-colors dark:bg-zinc-950">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </div>
  );
};

export default layout;
