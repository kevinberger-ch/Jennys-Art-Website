import Underlined from "./Underlined";
import styles from '../styles/Navigation.module.css'

export default function Header() {
    return <header className={styles.container}>
        <nav>
            <ul>
                <li>
                    <Underlined width="80px">
                        <a className={styles.link} href="/">Home</a>
                    </Underlined>
                </li>
                <li>
                    <Underlined width="100px">
                        <a className={styles.link} href="/about">About</a>
                    </Underlined>
                    <Underlined width="110px">
                        <a className={styles.link} href="/gallery">Gallery</a>
                    </Underlined>
                </li>
                <li>
                    <Underlined width="120px">
                        <a className={styles.link} href="/contact">Contact</a>
                    </Underlined>
                </li>
            </ul>
        </nav>
    </header>
}