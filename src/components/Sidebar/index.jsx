import styles from './sidebar.module.scss';
import icons from './icons.json';
import Icon from '../Icon';

export default function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {icons.map((icon) => <Icon key={icon.id} style={styles} icon={icon} />)}
            </ul>
        </nav>
    )
}
