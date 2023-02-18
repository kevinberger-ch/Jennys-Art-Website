import styles from "../styles/GalleryPage.module.css";
import GalleryImage from "../components/GalleryImage";


export default function GalleryPage() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

    return <main className={styles.container}>
        <ul>
            {images.map(image => {
                return <li key={image}><GalleryImage src={"/gallery/" + image}/></li>
            })
            }
        </ul>
    </main>
}
