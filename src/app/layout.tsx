import type { Metadata } from 'next';

import Header from '@/components/Header';
import MyThemeProvider from '@/components/MyThemeProvider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar } from '@mui/material';

import './globals.css';

export const metadata: Metadata = {
  title: "Joãozinho PDV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <MyThemeProvider>
          <Header>{children}</Header>
        </MyThemeProvider>
      </body>
    </html>
  );
}
