import styles from '../styles/Underlined.module.css'

export default function Underlined({ children }) {
    return <span className={styles.container}>
        {children}
        <img className={styles.image} src="/underline.png"  alt="underlined text"/>
    </span>
}