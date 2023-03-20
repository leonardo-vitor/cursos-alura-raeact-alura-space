import favorite from './favorito.png';
import open from './open.png';

export default function Card({styles, image}) {
    return (
        <li className={styles.gallery__card}>
            <img className={styles.gallery__image} src={image.src} alt={image.title} />
            <p className={styles.gallery__description}>{image.title}</p>
            <div>
                <p>{image.credits}</p>
                <span>
                    <img src={favorite} alt='Icone coração de curtir' />
                    <img src={open} alt='iconce de abrir o modal' />
                </span>
            </div>
        </li>
    )
}
