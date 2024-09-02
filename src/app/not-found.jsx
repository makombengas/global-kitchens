

import NotFoundPage from './../components/notFound/NotFoundPage';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '../config';




// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default async function NotFound({children}) {
  "use server";
  const locale =  locales.map((locale) => ({locale}));
  const messages = await getMessages();
  return (
    <html lang={locale} >
      <body>
      <NextIntlClientProvider messages={messages}>
      <div className="notFound w-full h-screen">
          <NotFoundPage />
        </div>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}