import "./globals.css";

import Navbar from "@app/components/navbar/Navbar";
import ClientOnly from "@app/components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";

import { Nunito } from "next/font/google";
import getCurrentuser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone using Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentuser();

  return (
    <html lang="en">
      <body className={nunito.className} suppressHydrationWarning={true}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
