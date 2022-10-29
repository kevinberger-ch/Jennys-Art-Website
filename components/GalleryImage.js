import styles from '../styles/GalleryImage.module.css'

export default function GalleryImage({ src, alt }) {
    return  <img className={styles.image} alt={alt} src={src} />
    // return <article className={styles.container}>
    //     <img className={styles.image} alt={alt} src={src} />
    // </article>
}