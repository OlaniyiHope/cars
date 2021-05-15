import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";





const Footer = () => {

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__About}>
      
        <p>
          SPICE
        </p>
       <h1>We strive to create the best
         <br />experiences for our
         customer
       </h1>
      </div>
      <div className={styles.Footer__UsefullLinks}>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Contact Us</strong>
          </li>
          <li>
            <Link to="/about" className={styles.Footer__LinksList__hope}>About</Link>
          </li>
         <li>
            <Link to="/terms" className={styles.Footer__LinksList__hope}>Terms</Link>
          </li>
          
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Destination</Link>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Sponsorship</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Video</strong>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Submit Video</Link>
          </li>

         <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Ambassador</Link>
              </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Agency</Link>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Influencer</Link>
          </li>
        </ul>
        <ul className={styles.Footer__LinksList}>
          <li>
            <strong>Social</strong>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Facebook</Link>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Instagram</Link>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Twitter</Link>
          </li>
          <li>
            <Link to="/" className={styles.Footer__LinksList__hope}>Youtube</Link>
        
          </li>
          
        </ul>

        
      </div>
    
    </footer>
  
  )

}



export default Footer

