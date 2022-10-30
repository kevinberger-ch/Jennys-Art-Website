import navigationStyles from '../styles/Navigation.module.css'
import styles from '../styles/Footer.module.css'
import Underlined from "./Underlined";

export default function Footer() {
    return <footer className={styles.container}>
        <Underlined width="170px">
            <a className={navigationStyles.link} href="/impressum">Impressum</a>
        </Underlined>
    </footer>
}