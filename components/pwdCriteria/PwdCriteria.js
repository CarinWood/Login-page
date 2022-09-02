import styles from './pwdCriteria.module.css'
import { FaExclamation } from "react-icons/fa";

const PwdCriteria = ({capsLetterFlag, numberFlag, specialCharFlag}) => {
  return (
    <section className={styles.square}>
        {/* <p className={styles.headline}><FaExclamation className={styles.icon}/>Password must contain:</p>
        <p className={styles.text}><i>1 capital,1 digit and 1 special character</i></p> */}
        <p className={capsLetterFlag}>Must contain 1 capital letter</p>
        <p className={numberFlag}>Must contain 1 number</p>
        <p className={specialCharFlag}>Must contain 1 special character</p>
    </section>
  )
}

export default PwdCriteria