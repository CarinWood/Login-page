import styles from './form.module.css'

const Form = () => {
  return (
    <form className={styles.wrapper}>
        <div className={styles.left}>
            <input type="text" className={styles.input} placeholder="First Name*"/>
            <input type="text" className={styles.input} placeholder="Last Name*"/>
            <input type="text" className={styles.input} placeholder="Email*"/>
        </div>
        <div className={styles.right}>
            <input type="password" className={styles.input} placeholder="Password*" />
            <input type="password" className={styles.input} placeholder="Confirm Password*"/>
            
            <div className={styles.checkboxDiv}>
              <input type="checkbox" id="terms" name="terms" value="terms"/>
              <label className={styles.label} for="terms"><i>I agree to terms and conditions</i></label>
            </div>
          
            <button className={styles.button} type="button">Create Account</button>
        </div>
       
    </form>
  )
}

export default Form