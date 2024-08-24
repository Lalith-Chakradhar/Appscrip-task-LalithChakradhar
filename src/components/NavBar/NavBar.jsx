import React from 'react';
import styles from './NavBar.module.css';
import Logo from '../../assets/Logo.png';
import search from '../../assets/search.png';
import hollowLike from '../../assets/productHollowLike.png';
import shoppingBag from '../../assets/shoppingBag.png';
import profile from '../../assets/profile.png';


export default function NavBar() {

  
  return (
    <div className={styles.navContainer}>
        <div className={styles.navTop}>
            <div className={styles.navLogo}><img src={Logo} alt="Logo"/></div>
            <div><h1 className={styles.navTitle}>LOGO</h1></div>
            <div className={styles.navSettings}>
              <img src={search} alt="Search"/>
              <img src={hollowLike} alt="hollowLike"/>
              <img src={shoppingBag} alt="shoppingBag"/>
              <img src={profile} alt="myAccount" className={styles.showComponent}/>
              <span>
              <select name="Language" className={styles.Lang}>
                    <option value="english">ENG</option>
                    <option value="german">DEU</option>
                    <option value="spanish">ESP</option>
              </select>
              </span>
            </div>
        </div>
        <nav className={styles.navigationMenu}>
            <ul className={styles.navigationMenuList}>
              <li className={styles.navigationMenuListItem}>SHOP</li>
              <li className={styles.navigationMenuListItem}>SKILLS</li>
              <li className={styles.navigationMenuListItem}>STORIES</li>
              <li className={styles.navigationMenuListItem}>ABOUT</li>
              <li className={styles.navigationMenuListItem}>CONTACT US</li>
            </ul>
        </nav>
    </div>
  )
}
