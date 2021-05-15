import React from "react"
import styles from "./home.module.scss"
import { Link } from "react-router-dom"


const PopularTrips = () => {
  return (
    <div className={styles.PopularTrips}>
      <p className={styles.PopularTrips__SubHeading}>POPULAR TRIPS</p>
      <h1 className={styles.PopularTrips__Heading}>
        Book a travel ticket in one click.
      </h1>
      <div className={styles.PopularTrips__TripListWrapper}>
        <ul className={styles.PopularTrips__TripList}>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Benin</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Abuja</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Port Harcourt</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Warri</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Enugu</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Onitsha</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Lagos to Owerri</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/terms">Lagos to Bayelsa</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Abuja to Benin</Link>
          </li>

          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Abuja to Port Harcourt</Link>
          </li>
          <li className={styles.PopularTrips__Trip}>
            <Link to="/#">Abuja to Lagos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PopularTrips
