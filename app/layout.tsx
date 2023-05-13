import "./globals.css";

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
