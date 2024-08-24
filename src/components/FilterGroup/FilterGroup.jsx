import React, {useState} from 'react';
import styles from "./FilterGroup.module.css";
import downArrow from '../../assets/arrowDown.png';
import upArrow from '../../assets/arrowUp.png';


export default function FilterGroup({ title, filters, selectedFilters, setSelectedFilters }) {
    const [expanded, setExpanded] = useState(false);
     

    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setSelectedFilters(prevState => ({
          ...prevState,
          [title]: {
              ...prevState[title],
              [name]: checked,
          }
      }));
  };

  const handleUnselectAll = () => {
    setSelectedFilters(prevState => ({
        ...prevState,
        [title]: filters.reduce((acc, filter) => ({ ...acc, [filter]: false }), {})
    }));
};

  return (
    <div className={`${expanded ? styles.filterTypeContainerExpanded : styles.filterTypeContainer}`}>
            <div>
                <div className={styles.titleText}>{title}</div>
                <div onClick={()=>setExpanded(!expanded)}>
                    {expanded ? 
                    (<img src={upArrow} alt="Less Options"/>) : 
                    (<img src={downArrow} alt="More Options"/>)}
                </div>
            </div>
            <div  className={styles.allText}>All</div>
            {expanded &&
            (<div className={styles.expandedFilters}>
                <div onClick={handleUnselectAll} className={styles.unselectAll}><u>Unselect All</u></div>
                {filters.map((filter, index) => (
                    <div key={index}>
                        <input 
                            type="checkbox" 
                            id={filter} 
                            name={filter} 
                            checked={(selectedFilters[title] && selectedFilters[title][filter]) || false}
                            onChange={handleCheckboxChange} 
                        />
                        <label htmlFor={filter}>{filter}</label>
                    </div>
                ))}
            </div>)}
    </div>
  )
}
