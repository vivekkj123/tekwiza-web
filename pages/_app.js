import Head from "next/head";
import "../styles/globals.css";
import tekWiza from '../public/images/tekwiza-logo-color.png'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>TekWiza 2k22</title>
      <link rel="icon" href={tekWiza.src} />
    </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
