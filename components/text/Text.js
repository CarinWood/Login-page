import styles from './text.module.css'
import { GiFlowers } from "react-icons/gi";

const Text = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.heading}>Lots of features</p>
        <p className={styles.subtext}>Get access to our full set of features by registering, including but not limited to:</p>
        
        <section className={styles.listSection}>
        <ul className={styles.list}>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Lorem ipsum</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Dolor eveniet</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Mollitia omnis</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Nobis</li>
        </ul>
        <ul className={styles.list}>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Nam iure sit earum</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Perspiciatis</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Obcaecati</li>
            <li className={styles.listItem}><GiFlowers className={styles.icon}/>Dolor omnis</li>
        </ul>
        </section>
        
    </div>
  )
}

export default Text