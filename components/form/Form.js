import styles from './form.module.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Popup from '../popup/Popup';
import PwdCriteria from '../pwdCriteria/PwdCriteria';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/react'

const loaderCSS = css`
  margin-top: 5px;
  margin-bottom: 25px;
  margin-left: 200px;
`

const Form = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [pwdCriteria, setPwdCriteria] = useState(false)
  const [checks, setChecks] = useState({
    capsLetterCheck:false,
    numberCheck:false,
    specialCharCheck:false,
  })
  const [loading, setLoading] = useState(false)

 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
       e.preventDefault();
       if(password === confirmPassword) {
        setLoading(true)
        setTimeout(() =>{
          setLoading(false)
          setShowPopup(true)
         }, 2000)
        
      
       } else {
        alert('Password and Confirm password fields must match!')
       }    
  }

  const showPopupFunc = () => {
    setShowPopup(false)
  }

  const handleOnFocus = () => {
    setPwdCriteria(true)
  }
 
  const handleOnBlur = () => {
    setPwdCriteria(false)
  }

  const handleKeyUp = (e) => {
    const { value } = e.target

      const capsLetterCheck=/[A-Z]/.test(value)
      const numberCheck=/[0-9]/.test(value)
      const specialCharCheck = /[!@#$%^&*]/.test(value)
      setChecks({
        capsLetterCheck,
        numberCheck,
        specialCharCheck,
      })
  }



  return (
    <>
   {loading? <div className={styles.empty}>
   {loading && <BeatLoader css={loaderCSS} size={42} color="pink" loading />}
   </div>
   :<form className={styles.wrapper} onSubmit={handleSubmit}>

        <div className={styles.left}>
            {/* first name input */}
            <input 
              required
              type="text" className={styles.input} placeholder="First Name*"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            {/* last name input */}
            <input 
              required
              type="text" className={styles.input} placeholder="Last Name*"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            {/* email input */}
            <input 
              required
              type="text" className={styles.input} placeholder="Email*"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
        </div>
       
        <div className={styles.right}>
            {/* password input */}
            <input 
              required
              type={showPassword ?"text" : "password"} 
              className={styles.input} 
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onKeyUp={handleKeyUp}
            />
            <span className={styles.eyespan} 
            onClick={() => toggleShowPassword()}
            >
            {showPassword ? <FaRegEye className={styles.eye}/>:<FaRegEyeSlash className={styles.eye}/>}
            </span>

            {pwdCriteria && <PwdCriteria 
            capsLetterFlag={checks.capsLetterCheck ? "valid": "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
            />}

            {/* Confirm password input */}
            <input 
              required
              type={showConfirmPassword ? "text" : "password"} 
              className={styles.input} 
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span 
              className={styles.eyespanTwo} 
              onClick={() => toggleShowConfirmPassword()}
            >
              {showConfirmPassword ? <FaRegEye className={styles.eye}/>:<FaRegEyeSlash className={styles.eye}/>}
            </span>

            {/* checkbox */}

            <div className={styles.checkboxDiv}>
              <input 
                required
                id="terms"
                type="checkbox" 
                name="terms" 
                value="terms"
                onClick={(e) => setTerms(e.target.checked)}
              />
              <label htmlFor='terms' className={styles.label}><i>I agree to terms and conditions</i></label>
            </div>

            {/* submit button */}

            <button className={styles.button} type="submit">Create Account</button>
        </div> 
       
    </form>}

    {/* popup when submit */}
   
    {showPopup && <Popup firstName={firstName} showPopupFunc={showPopupFunc}/>}
    </>
  )
}

export default Form