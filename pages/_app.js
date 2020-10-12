import "../styles/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";
import { SWRConfig } from "swr";
import axios from "axios";

export function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          axios({
            method: "get",
            url,
            headers: {
              "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`,
            },
          }).then((res) => res.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
