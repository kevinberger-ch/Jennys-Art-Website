import styles from '../styles/LandingPage.module.css'

export default function NotFoundPage() {
    return <main className={styles.container}>
        <section className={styles.opening}>
            <h1>404</h1>
            <h2>This page could not be found.</h2>
        </section>
    </main>
}