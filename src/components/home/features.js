import React from "react"
import styles from "./home.module.scss"


const Features = () => {
  return (
    <div className={styles.Features}>
     
      <h1 className={styles.Features__Heading}>
       Why Choose Us?
      </h1>
      <div className={styles.Features__List}>
        <div className={styles.Features__Item}>
       
          <h4 className={styles.Features__Item__Heading}>Over 100 Destinations</h4>
          <p className={styles.Features__Item__Text}>
            Travel to over 100 unique places
          </p>
        </div>
        <div className={styles.Features__Item}>
         
          <h4 className={styles.Features__Item__Heading}>
            1 million Trips Made
          </h4>
          <p className={styles.Features__Item__Text}>
            Over 1 million trips completed last year
          </p>
        </div>
        <div className={styles.Features__Item}>
        
          <h4 className={styles.Features__Item__Heading}>
            Fastest Support
          </h4>
          <p className={styles.Features__Item__Text}>
            Access our support team 24/7
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
