import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage.tsx';
import { createTheme, MantineProvider } from '@mantine/core';
import  "@mantine/core/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs' : '768px',
      'lg': '900px',
      'xl': '1024px',
      '2xl': '1280px',
    }
  })

  return (
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
