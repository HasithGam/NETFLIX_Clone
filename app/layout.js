import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "NETFLIX_Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>

      </body>
    </html>
  );
}