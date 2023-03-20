import styles from './popular.module.scss';
import images from './popular.json';
import Button from 'components/Button';

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Fotos populares</h2>

      <ul className={styles.popular__images}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <img src={image.path} alt={image.alt} />
            </li>
          )
        })}
      </ul>

      <Button label="Ver mais fotos" />
    </aside>
  )
}
