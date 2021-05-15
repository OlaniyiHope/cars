import { Link } from "react-router-dom"
import React, { Fragment } from "react"
import cx from "classnames"
import styles from "./header.module.scss"

const Header = () => {

  return (
   
        <header
          className={cx(styles.Header)}
        >
          <Link
            aria-label="Logo"
            className={(styles.Header__logo)}

            to="/"   
          >
            CARRY
          </Link>
          <div className={styles.Header__Nav}>
            <ul className={styles.Header__NavList}>
             
                <Fragment>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/single-page"
                    >
                      <p className={styles.Header__NavItem__text}>TOYOTA</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>LEXUS</p>
                    </Link>
                  </li>
                </Fragment>
             
             
                <Fragment>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>VENZA</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>FERRARI</p>
                    </Link>
                  </li>
               
                </Fragment>
                <Fragment>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>BMW</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/"
                    >
                      <p className={styles.Header__NavItem__text}>BENTLEY</p>
                    </Link>
                  </li>
               
                </Fragment>
         
            </ul>
          </div>
          <div className={styles.Header__Nav}>
            <ul className={styles.Header__NavList}>
             
                <Fragment>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/about"
                    >
                      <p className={styles.Header__NavItem__text}>ABOUT</p>
                    </Link>
                  </li>
                  <li className={styles.Header__NavItem}>
                    <Link
                      activeClassName={styles.Header__NavItem}
                      to="/sign-in-form"
                    >
                      <p className={styles.Header__NavItem__text}>SIGN UP</p>
                    </Link>
                  </li>
                </Fragment>
             
     
           
         
            </ul>
          </div>
     </header>
  
  )
}

export default Header
