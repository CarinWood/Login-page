import styles from './form.module.css'

const Form = () => {
  return (
    <form className={styles.wrapper}>
        <div className={styles.left}>
            <input className={styles.input} placeholder="First Name"/>
            <input className={styles.input} placeholder="Last Name"/>
            <input className={styles.input} placeholder="Email"/>
        </div>
        <div className={styles.right}>
            <input className={styles.input} placeholder="Password" />
            <input className={styles.input} placeholder="Confirm Password"/>
        </div>
    </form>
  )
}

export default Form