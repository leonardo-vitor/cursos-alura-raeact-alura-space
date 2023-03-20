import Tags from '../Tags';
import styles from './gallery.module.scss';
import listImages from './images.json';
import Cards from './Cards';
import { useState } from 'react';

export default function Gallery() {
    const [images, setImages] = useState(listImages);
    const tags = [...new Set(listImages.map((image) => image.tag))];
    const filterImages = (tag) => {
        const filtredImages = listImages.filter((image) => image.tag === tag);
        setImages(filtredImages)
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>

            <Tags tags={tags} filterImages={filterImages}  setImages={setImages}/>
            <Cards styles={styles} images={images} />
        </section>
    )
}
