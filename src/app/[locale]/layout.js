import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from './../../components/footer/Footer';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Kitchens",
  description: "Sustainable pleasure",
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="!scroll-smooth" >
      <body className={`${inter.className} !scroll-smooth `}>
      <NextIntlClientProvider messages={messages}>
          <Navigation/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
