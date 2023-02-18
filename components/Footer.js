import navigationStyles from '../styles/Navigation.module.css'
import Underlined from "./Underlined";

export default function Footer() {
    return <>
        <Underlined width="190px">
            <a className={navigationStyles.link} href="/impressum">Impressum</a>
        </Underlined>
    </>
}