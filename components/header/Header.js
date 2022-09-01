import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.headline}>Create Account</p>
        <p className={styles.text}>Dolor eveniet mollitia omnis sequi obcaecati.</p>
        <p className={styles.text}>Nobis sit nam iure sit earum. Dolorem natus dolore perspiciatis accusamus numquam maiores lorem!</p>
    </div>
  )
}

export default Header