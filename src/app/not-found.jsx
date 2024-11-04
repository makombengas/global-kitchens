
import { Inter } from "next/font/google";
import "../app/[locale]/globals.css";
import NotFoundPage from './../components/notFound/NotFoundPage';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';



const inter = Inter({ subsets: ["latin"] });



// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default async function NotFound({children, params }) {
  "use server";
  const locale = await params;
  const messages = await getMessages();
  return (
 

<html lang={locale} >
<body className={inter.className}>
<NextIntlClientProvider messages={messages}>
  
    <NotFoundPage />
    {children}

  </NextIntlClientProvider>
</body>
</html>
  );
}