'use client';

import { ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function MyThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#199475',
        light: '#cddeab',
        dark: '#222c35',
        contrastText: '#fff',
      },
      secondary: {
        main: "#c9c7c7",
        light: "#fff",
        dark: "#787878",
        contrastText:'#000'
      }
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
