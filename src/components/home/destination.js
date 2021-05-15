import React from "react"
// import PropTypes from "prop-types"

import styles from "./dest.module.scss"

import { Button } from "../common"

const Dest = props => {
  return (
    <div className={styles.Home}>
  
      <div className={styles.Home__Fold}>  
        <div className={styles.Home__Fold__Overlay} />
        <div className={styles.Home__Text}>
    <h4>Model S</h4>
    <p>Order Online for Touchless Delivery</p>
        </div>
       
        <Button className={styles.Home__boot}>CUSTOM ORDER</Button>
      </div>
   
 
   
    </div>
  )
}

Dest.propTypes = {}

export default Dest
