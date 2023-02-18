import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return <section className="website">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </section>
}

export default MyApp
