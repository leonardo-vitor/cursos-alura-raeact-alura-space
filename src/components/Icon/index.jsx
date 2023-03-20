export default function Icon({style, icon}) {
  return (
    <li className={style.sidebar__item} key={icon.id}>
      <img src={icon.path} alt={icon.alt} />
      <a href='/'>{icon.title}</a>
    </li>
  )
}
