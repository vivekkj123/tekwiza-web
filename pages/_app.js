import Head from "next/head";
import "../styles/globals.css";
import tekWiza from '../public/images/tekwiza-logo-color.png'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion, useScroll } from "framer-motion";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <Head>
      <title>TekWiza 2k22</title>
      <link rel="icon" href={tekWiza.src} />
    </Head>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

