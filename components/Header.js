import Underlined from "./Underlined";
import styles from '../styles/Navigation.module.css'
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    function onMenuClick() {
        const newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }

    return <header className={styles.container}>
        <img className={styles.menu} src={isOpen ? "./cross.png" : "./menu.png"} onClick={onMenuClick}/>
        <nav style={isOpen ? {display: "block"} : {display: "none"}}>
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