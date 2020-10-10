import "../styles/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";
import { SWRConfig } from 'swr'
import axios from 'axios'

export function MyApp({ Component, pageProps }) {
  return <SWRConfig value={{ fetcher: (url) => axios(url).then(res => res.json()) }}><Component {...pageProps} /></SWRConfig>;
}

export default MyApp;
