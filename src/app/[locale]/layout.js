import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "../../config";
import { getMessages } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from './../../components/footer/Footer';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Kitchens",
  description: "Sustainable pleasure",
};

export default async function RootLayout({ children }) {
  const locale =  locales.map((locale) => ({locale}));
  const messages = await getMessages();

  return (
    <html lang={locale} >
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
          <Navigation/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
