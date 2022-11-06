import Head from "next/head";
import "../styles/globals.css";
import tekWiza from '../public/images/tekwiza-logo-color.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>TekWiza 2k22</title>
      <link rel="icon" href={tekWiza.src} />
    </Head>
      <video className="bgVideo" playsInline autoPlay muted loop>
        <source src='/videos/bgsynthwave.mp4' type="video/mp4" />
      </video>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
