import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import Head from 'next/head';

import toast, { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "NETFLIX Clone | Developed by Hasith",
  description: "Developed by Hasith as a third mini project while studing in IOD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>

        <Toaster position="top-right" />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>

      </body>
    </html>
  );
}