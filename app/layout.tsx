import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Dubbelspexet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      
      <body className="h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
