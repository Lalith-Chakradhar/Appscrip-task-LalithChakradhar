import React from 'react';
import FilterGroup from '../FilterGroup/FilterGroup';
import styles from './FilterMenu.module.css';


const idealForFilters = ['Men', ' Women', 'BabiesAndKids'];
const occasionFilters = ['Casual', 'Formal', 'Party', 'Wedding', 'Sportswear'];
const workFilters = ['Office', 'Remote', 'Field Work', 'Construction', 'Creative'];
const fabricFilters = ['Cotton', 'Polyester', 'Silk', 'Wool', 'Linen', 'Denim'];
const segmentFilters = ['Luxury', 'Economy', 'Premium', 'Budget','Electronics', 'Jewelery'];
const suitableForFilters = ['Summer', 'Winter', 'All Seasons', 'Rainy'];
const rawMaterialsFilters = ['Organic Cotton', 'Recycled Polyester', 'Wool Blend', 'Bamboo', 'Hemp'];
const patternFilters = ['Solid', 'Striped', 'Checked', 'Floral', 'Polka Dots', 'Geometric'];

export default function FilterMenu({ selectedFilters, setSelectedFilters }) {
 
  return (
    <section className={styles.filterContainer}>
        <div className={styles.customCheckboxContainer}>
            <div className={styles.customCheckbox}>
              <input type='checkbox' id="customizble" name="customizble" value="customizble"/>
              <label htmlFor="customizble" className={styles.checkboxText}>CUSTOMIZBLE</label>
            </div>
        </div>
        <div>
            <FilterGroup title="IDEAL FOR" filters={idealForFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="OCCASION"  filters={occasionFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="WORK" filters={workFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="FABRIC" filters={fabricFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="SEGMENT" filters={segmentFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="SUITABLE FOR" filters={suitableForFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="RAW MATERIALS" filters={rawMaterialsFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            <FilterGroup title="PATTERN" filters={patternFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
        </div>       
    </section>
  )
}
