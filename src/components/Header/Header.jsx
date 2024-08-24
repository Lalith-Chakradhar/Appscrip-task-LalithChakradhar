import React from 'react';
import styles from "./Header.module.css";
import NavBar from '../NavBar/NavBar';
import thumbnail from "../../assets/thumbnail.png";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
    <div className={styles.thumbnailTextContainer}>
        <div className={styles.thumbnailOptional}>
            <div><img src={thumbnail} alt="thumbnail" className={styles.thumbnailText}/></div>
            <div className={styles.thumbnailText}>Lorem ipsum dolor</div>
        </div>
        <div className={styles.thumbnailMain}>
          <div><img src={thumbnail} alt="thumbnail" className={styles.thumbnailText}/></div>
            <div className={styles.thumbnailText}>Lorem ipsum dolor</div>
        </div>
        <div className={styles.thumbnailOptional}>
            <div><img src={thumbnail} alt="thumbnail" className={styles.thumbnailText}/></div>
            <div className={styles.thumbnailText}>Lorem ipsum dolor</div>
        </div>
    </div>
    <NavBar/>
    </header>
  )
}
