import React, { useState } from "react"
import FormContainer from "../common/form-container"
import styles from "./auth.module.scss"
import cx from "classnames"
import { Input, Button } from "../common"
import { Link } from 'react-router-dom';

const SignInForm = props => {

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
 


  return (
   
    <FormContainer
      className={cx(styles.FormContainer, styles.SignInForm)}
      header="Sign In"
    >
      <form action="/action_page.php" >
        <Input
          type="name"
          value={name}
          className={styles.SignInForm__Input}
          label="First Name"
          
          placeholder="Enter your First Name"
          onChange={({ target }) => setName(target.value)}
          required
        />
        <Input
          type="name"
          value={name2}
          className={styles.SignInForm__Input}
          label="Last Name"
          placeholder="Enter your Last Name"
          onChange={({ target }) => setName2(target.value)}
          required
        />
        <Input
          type="phone"
          value={phone}
          className={styles.SignInForm__Input}
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <Input
          type="password"
          value={password}
          className={styles.SignInForm__Input}
          label="Password"
          placeholder="*****"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <Button  className={styles.SignInForm__Submit} type="Submit">
          Sign In NOw
        </Button>
      </form>
  
    </FormContainer>
  )
}

SignInForm.propTypes = {}

export default SignInForm
