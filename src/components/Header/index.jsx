import logo from './logo.png'
import search from './search.png'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input type="text" placeholder="O que você procura ?" className={styles.header__input} />
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    )
}