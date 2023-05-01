import Layout from '@/components/commonComponents/layout';
import '@/styles/globals.css'
import '@/styles/layout.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Upstate Laundromat</title>
        {/* <p>Upstate Laundromat</p> */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
