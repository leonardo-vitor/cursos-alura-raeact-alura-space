import styles from './tags.module.scss';
import images from '../Gallery/images.json';

export default function Tags({ tags, filterImages, setImages }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return <li key={tag} onClick={() => filterImages(tag)}>
            {tag}
          </li>
        })}

        <li onClick={() => setImages(images)}>Todas</li>
      </ul>
    </div>
  )
}
