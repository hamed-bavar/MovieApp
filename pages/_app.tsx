import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WatchListProvider } from "../hooks/useWatchList";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WatchListProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WatchListProvider>
  );
}

export default MyApp;
