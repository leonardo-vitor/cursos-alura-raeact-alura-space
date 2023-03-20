import styles from './button.module.scss'

export default function Button({label}) {
  return (
    <button className={styles.button}>{label}</button>
  )
}
