/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import styles from './Card.module.css';
import productLike from '../../assets/productLike.png';
import productHollowLike from '../../assets/productHollowLike.png';

export default function Card({cardData}) {
    const [isColorFilled, setIsColorFilled] = useState(false);


  return (
    <div className={styles.cardContainer}>
    <figure className={styles.productImageContainer}>
        <img src={cardData.image} alt="Product Image" className={styles.productImage}/>
    </figure>
    <section className={styles.cardContextContainer}>
        <div className={styles.productName}>
            <h3>{cardData.title}</h3>
            </div>
        <div className={styles.productSubTextContainer}>
            <div>
                <p className={styles.productSubText}><u>Sign in</u> or Create an account to see pricing</p>
            </div>
            <div onClick={()=>{setIsColorFilled(!isColorFilled)}}>
                {isColorFilled ? 
                (<img src={productLike} alt="Like Button" className={styles.likeButtonStyle} />) 
                : (<img src={productHollowLike} alt="Like Button" className={styles.likeButtonStyle} />)}
            </div>
        </div>
    </section>
    </div>
  )
}
