import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
        <p>&copy; 2022 Designed and built by <span ><a className={styles.carin} href="http://portfolio.carinwood.se/">Carin Wood</a></span></p>
    </footer>
  )
}

export default Footer