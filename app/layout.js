import { Bellefair} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const poppins = Bellefair({
  weight:["400"],
  subsets:["latin"]
});

export const metadata = {
  title: "next js course",
  description: "exploring features of next js",
  "keywords":"youtube next react"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
      
      <main className="container">{children}</main></body>
    </html>
  );
}
