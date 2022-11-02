import styles from '../styles/LandingPage.module.css'

export default function NotFoundPage() {
    return <main className={styles.container}>
        <div className={styles.opening}>
            <h1>404</h1>
            <h2>This page could not be found.</h2>
        </div>
    </main>
}