import styles from "../styles/ImpressumPage.module.css";

export default function ImpressumPage() {
    return <main className={styles.container}>
        <div className={styles.content}>
            <h1>Impressum</h1>
            <p>Herr Kevin Berger</p>
            <p>Alte Strasse 55<br/>
                CH-3713 Reichenbach i. K.</p>
            <p>mail@kevinberger.ch</p>
        </div>
    </main>
}