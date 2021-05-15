import React, { useState } from "react"
import styles from "./home.module.scss"
import cars from "../../assets/images/e.jpeg"
import { Input, Button } from "../common"
import cx from "classnames"

const Picture = () => {

  return (
      <div className={styles.rek}>
    <div
    className={cx(styles.all)}
  >
      
      <div className={styles.all__pic}>
   <img src={cars} alt="" />
   </div>
   <div className={styles.all__text}>
       <h2>Reliable and Flexible</h2>
<p>Exterior designs conbines an iconic look with elegant propertion, it is fast and trustable</p>
   </div>
  
 
</div>
    <div
    className={cx(styles.all)}
  >
      

   <div className={styles.all__text}>
       <h2>Reliable and Flexible</h2>
<p>Exterior designs conbines an iconic look with elegant propertion, it is fast and trustable</p>
   </div>
   <div className={styles.all__pic}>
   <img src={cars} alt="" />
   </div>
 
</div>
</div>
  )
}

export default Picture;
