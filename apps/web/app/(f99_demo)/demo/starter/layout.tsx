// pages/_app.tsx
import 'vbcc-nextjs-starter/dist/styles/global.css';
import RootLayout from 'vbcc-nextjs-starter/dist/layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
