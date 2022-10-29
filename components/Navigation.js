import Underlined from "./Underlined";
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
    return <header className={styles.container}>
        <ul>
            <li>
                <Underlined>
                    <a className={styles.link} href="/about">About</a>
                </Underlined>
            </li>
            <li>
                <Underlined>
                    <a className={styles.link} href="/gallery">Gallery</a>
                </Underlined>
            </li>
            <li>
                <Underlined>
                    <a className={styles.link} href="/contact">Contact</a>
                </Underlined>
            </li>
        </ul>
    </header>
}