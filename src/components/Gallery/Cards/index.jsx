import Card from './Card';

export default function Cards({styles, images}) {
    return (
        <ul className={styles.gallery__cards}>
            {images.map((image) => <Card key={image.id} styles={styles} image={image} />)}
        </ul>
    )
}
