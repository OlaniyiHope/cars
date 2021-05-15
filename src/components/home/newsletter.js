import React, { useState } from "react"
import styles from "./home.module.scss"

import { Input, Button } from "../common"

const Newsletter = () => {

  const [email, setEmail] = useState("")

  return (
    <div className={styles.Newsletter}>
      <p className={styles.Newsletter__SubHeading}>Get Access to Exclusive Offers</p>
      <h1 className={styles.Newsletter__Heading}>
        Sign up for our newsletter below to get $100 off your first trip!
      </h1>
      <form
        className={styles.NewsletterForm}
        action=""
        onSubmit={e => e.preventDefault()}
      >
        <Input
          className={styles.NewsletterForm__Input}
          label="Email Address"
          placeholder="Enter your email address"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Button className={styles.NewsletterForm__Submit}>Subscribe</Button>
      </form>
    </div>
  )
}

export default Newsletter
