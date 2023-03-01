import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Aos from "aos";

import "aos/dist/aos.css";
import { useEffect } from 'react';
function getLibrary(provider: any) {
  return new Web3(provider)
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
