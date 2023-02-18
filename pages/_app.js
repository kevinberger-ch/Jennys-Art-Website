import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Jenny's Art";
  });

  return <section className="website">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </section>
}

export default MyApp
