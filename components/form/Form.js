import styles from './form.module.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Form = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }



  return (
    <form className={styles.wrapper}>
        <div className={styles.left}>
            <input type="text" className={styles.input} placeholder="First Name*"/>
            <input type="text" className={styles.input} placeholder="Last Name*"/>
            <input type="text" className={styles.input} placeholder="Email*"/>
        </div>
        <div className={styles.right}>
            <input type={showPassword ?"password":"text"} id="password" className={styles.input} placeholder="Password*"/>
            <span className={styles.eyespan} onClick={() => toggleShowPassword()}>{showPassword ? <FaRegEyeSlash className={styles.eye}/>:<FaRegEye className={styles.eye}/>}</span>
            <input type={showConfirmPassword ? "password" : "text"} id="password" className={styles.input} placeholder="Confirm Password*"/>
            <span className={styles.eyespanTwo} onClick={() => toggleShowConfirmPassword()}>{showConfirmPassword ? <FaRegEyeSlash className={styles.eye}/>:<FaRegEye className={styles.eye}/>}</span>
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