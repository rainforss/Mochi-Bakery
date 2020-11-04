import "../styles/scss/style.scss";
import "bootswatch/dist/minty/bootstrap.min.css";
import "swiper/swiper.scss";
import { SWRConfig } from "swr";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "next-auth/client";

export function MyApp({ Component, pageProps }) {
  return (
    <Provider
      options={{ clientMaxAge: 0, keepAlive: 0 }}
      session={pageProps.session}
    >
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
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
