import navigationStyles from '../styles/Navigation.module.css'
import Underlined from "./Underlined";

export default function Footer() {
    return <>
        <Underlined>
            <a className={navigationStyles.link} href="/about">Impressum</a>
        </Underlined>
    </>
}