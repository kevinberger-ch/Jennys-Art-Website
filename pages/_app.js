import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect} from "react";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        document.title = "Jenny's Art";
        document.documentElement.lang = "EN"

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

    });


    return <div className="website">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </div>
}

export default MyApp
