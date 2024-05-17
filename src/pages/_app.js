// pages/_app.js
import store from "@/store/store";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";

function MyApp({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </PrimeReactProvider>
  );
}

export default MyApp;
