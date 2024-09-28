import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import Providers from "@/lib/Redux/Providers/Provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DNK",
  description: "Discover the latest trends in fashion, accessories, and lifestyle products at DNK. Shop our curated collection of men's and women's clothing, exclusive deals, and more. Experience quality, style, and affordability all in one place."
};

export default function RootLayout({ children }) {
  return (
  
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
      <div className="min-h-screen">
      <Providers>
      {children}
      </Providers>
      </div>
      <Footer></Footer>
      </body>
    </html>
    
  );
}
