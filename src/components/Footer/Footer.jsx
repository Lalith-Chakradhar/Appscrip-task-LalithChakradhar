import React from 'react';
import styles from './Footer.module.css';
import flag from '../../assets/USFlag.png';
import diamond from "../../assets/diamond.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import gpay from "../../assets/gpay.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import amex from "../../assets/amex.png";
import applepay from "../../assets/applepay.png";
import opay from "../../assets/opay.png";

function Footer() {
    
  return (
    <footer className={styles.footerContainer}>
        <section className={styles.sectionContainer} style={{borderBottom: '1px solid white'}}>
            <div className={styles.subSectionTop}>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from mettā muse.</p>
                <div className={styles.emailBox}>
                    <input type="email" placeholder='Enter your e-mail...' className={styles.emailInput}/>
                    <button className={styles.subscribeButton}>SUBSCRIBE</button>
                </div>
            </div>
            <div className={styles.subSectionTop}  style={{marginLeft:'10%'}}>
                <h1>CONTACT US</h1>
                <p style={{fontSize: '16px'}}>+44 221 133 5360</p>
                <p style={{fontSize: '16px'}}>customercare@mettamuse.com</p>
                <h1>CURRENCY</h1>
                <div className={styles.flagContainer}>
                    <img src={flag} alt="Country Flag"/>
                    <img src={diamond} alt="seperator"/>
                    <h3>USD</h3>
                </div>
                <p className={styles.transactionStatement}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </section>
        <section className={styles.sectionContainerBottom}>
            <div>
                <h1>mettā muse</h1>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
            </div>
            <div>
                <h1>QUICK LINKS</h1>
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className={styles.subSectionBottom}>
                <div>
                    <h1>FOLLOW US</h1>
                    <div className={styles.socialHandles}>
                        <img src={instagram} alt="insta icon"/>
                        <img src={linkedin} alt="linkedin icon"/>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}>
                    <h1>mettā muse ACCEPTS</h1>
                    <div  className={styles.paymentModes}>
                        <img src={gpay} alt="gpay icon"/>
                        <img src={mastercard} alt="mastercard icon"/>
                        <img src={paypal} alt="paypal icon"/>
                        <img src={amex} alt="amex icon"/>
                        <img src={applepay} alt="applepay icon"/>
                        <img src={opay} alt="opay icon"/>
                    </div>
                </div>
            </div>
        </section>
        <div><p style={{fontSize: '17px', textAlign: 'center'}}>Copyright © 2023 mettamuse. All rights reserved.</p></div>
    </footer>
  )
}

export default Footer