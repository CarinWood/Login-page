import styles from './popup.module.css'



const Popup = ({firstName, showPopupFunc, setFirstName, setLastName, setEmail, setPassword, setConfirmPassword}) => {


const handleButtonClick=() => {
  showPopupFunc()
  setFirstName('')
  setLastName('')
  setEmail('')
  setPassword('')
  setConfirmPassword('')
}



  return (
    <section className={styles.square}>
        <p className={styles.title}>Congratulations {firstName}!</p>
        <p className={styles.subtext}>You have successfully been registered</p>
        <div className={styles.buttonarea}>
          <button className={styles.btn} onClick={handleButtonClick}>OK</button>
        </div>
    </section>
  )
}

export default Popup