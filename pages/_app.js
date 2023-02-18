import '../styles/globals.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return <section className="website">
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </section>
}

export default MyApp
