import React from 'react';
import styles from './MobileFooter.module.css';
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
import Accordion from '../Accordion/Accordion';

function MobileFooter() {

    
  return (
    <footer className={styles.footerContainer}>
        <section>
            <div className={styles.subSection}>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    this is simply dummy text.</p>
                <div className={styles.emailBox}>
                    <input type="email" placeholder='Enter your e-mail...' className={styles.emailInput}/>
                    <button className={styles.subscribeButton}>SUBSCRIBE</button>
                </div>
            </div>
            <div className={styles.subSection}>
                <h1>CALL US</h1>
                <div className={styles.subSectionText}>
                    <p>+44 221 133 5360</p>
                    <div>
                        <img src={diamond} alt="seperator"/>
                    </div>
                    <p>customercare@mettamuse.com</p>
                </div>
            </div>
            <div className={styles.subSection}>
                <h1>CURRENCY</h1>
                <div className={styles.subSectionText}>
                    <div><img src={flag} alt="Country Flag"/></div>
                    <div><img src={diamond} alt="seperator"/></div>
                     <h3>USD</h3>
                </div>
            </div>
            <div className={styles.subSection}>
                <Accordion
                    title="mettā muse"
                    content={[
                    "About Us",
                    "Stories",
                    "Artisans",
                    "Boutiques",
                    "Contact Us",
                    "EU Compliances Docs",
                    ]}
                />
            </div>
            <div className={styles.subSection}>
                <Accordion
                    title="QUICK LINKS"
                    content={[
                    "Orders & Shipping",
                    "Join/Login as a Seller",
                    "Payment & Pricing",
                    "Return & Refunds",
                    "FAQs",
                    "Privacy Policy",
                    "Terms & Conditions",
                    ]}
                />
            </div>
            <div className={styles.subSection}>
                <Accordion
                    title="FOLLOW US"
                    content={[]}
                    icons={
                    <>
                        <img src={instagram} alt="insta icon" />
                        <img src={linkedin} alt="linkedin icon" />
                    </>
                    }
                />
            </div>
            <div>
                    <h2>mettā muse ACCEPTS</h2>
                    <div className={styles.paymentModes}>
                        <img src={gpay} alt="gpay icon"/>
                        <img src={mastercard} alt="mastercard icon"/>
                        <img src={paypal} alt="paypal icon"/>
                        <img src={amex} alt="amex icon"/>
                        <img src={applepay} alt="applepay icon"/>
                        <img src={opay} alt="opay icon"/>
                    </div>
            </div>
        </section>
        <div className={styles.copyright}><p>Copyright © 2023 mettamuse. All rights reserved.</p></div>
    </footer>
  )
}

export default MobileFooter;