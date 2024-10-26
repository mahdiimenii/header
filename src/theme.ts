'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import {Vazirmatn} from "next/font/google";

const vazirmatn = Vazirmatn({
    subsets: ["arabic", 'latin', 'latin-ext'],
    display: 'swap'

})

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
