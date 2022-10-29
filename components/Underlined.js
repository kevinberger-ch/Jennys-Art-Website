import styles from '../styles/Underlined.module.css'

export default function Underlined({ children, width }) {
    return <span className={styles.container} style={{width: width}}>
        {children}
        <img className={styles.image} src="/underline.png"  alt="underlined text"/>
    </span>
}