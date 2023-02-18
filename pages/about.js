import styles from '../styles/AboutPage.module.css'
import stylesNavigation from '../styles/Navigation.module.css'
import Underlined from "../components/Underlined";
export default function AboutPage() {
    return <main className={styles.container}>
        <img className={styles.image} src="jenny.jpg"/>
        <h1>JENNY</h1>
        <ul className={styles.list}>
            <li>Self-proclaimed Tattooist</li>
            <li>Artist</li>
            <li>Prospective Piercer</li>
            <li>Based in Bern</li>
        </ul>
        <Underlined width="200px">
            <a className={stylesNavigation.link} href="/gallery">Show my Work</a>
        </Underlined>
    </main>
}