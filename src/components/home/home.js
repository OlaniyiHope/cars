import React from "react"
// import PropTypes from "prop-types"

import styles from "./home.module.scss"
import Destination from "./destination"
import Features from "./features"
import Newsletter from "./newsletter"
import Footer from "../footer"
import Header from "../header"
import { Button } from "../common"



const Home = props => {
  return (
    <div className={styles.Home}>
       <Header>
</Header>


      <div className={styles.Home__Fold}>   
        <div className={styles.Home__Fold__Overlay} />
        <div className={styles.Home__Text}>
    <h4>Model S</h4>
    <p>Order Online for Touchless Delivery</p>
        </div>
       
        <Button className={styles.Home__boot}>
          <p>
            ORDER NOW
          </p>
        </Button>
      
       
      </div>
     
      <Destination />
      <Features />
      <Newsletter />
    <Footer></Footer>
   
    </div>
  )
}

Home.propTypes = {}

export default Home
