import React, { useState } from "react";
import styles from './Accordion.module.css';
import arrow from '../../assets/arrowWhite.png';

const Accordion = ({ title, content, icons }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to expand/collapse the options
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} onClick={toggleOptions}>
      <div className={styles.accordionHeader}>
        <h1>{title}</h1>
        <img src={arrow} alt="dropdown arrow" className={`${isOpen ? styles.arrowOpen : styles.arrow}`}/>
      </div>
      {isOpen && (
        <div className={styles.accordionOptions}>
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          {icons && <div className={styles.iconSection}>{icons}</div>}
        </div>
      )}
    </div>
  );
};

export default Accordion;