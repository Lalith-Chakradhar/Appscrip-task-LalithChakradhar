import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import FilterMenu from '../FilterMenu/FilterMenu';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import styles from './Products.module.css';
import MobileFooter from '../MobileFooter/MobileFooter';
import leftArrow from '../../assets/arrowLeft.png';
import rightArrow from '../../assets/arrowRight.png';
import downArrow from '../../assets/arrowDown.png';
import tickMark from "../../assets/tick.png";


const productsSortCategories = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];

function Products() {


    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [filtersVisible, setIsFiltersVisible] = useState(true);

    const [sortBoxOpen, setIsSortBoxOpen] = useState(false);
    const [sortCategory, setSortCategory] = useState('RECOMMENDED');

    const toggleDropdown = () => {
        setIsSortBoxOpen(!sortBoxOpen);
    };

    const selectSortCategory = (category) => {
        setSortCategory(category);
        setIsSortBoxOpen(false);
    };

    const getData = async() => {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setProductData(result);
            setFilteredData(result);
        }
        catch (error)
        {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    
    useEffect(() => {
        
        if (productData.length) {
            const applyFilters = () => {
                const filtered = productData.filter(product => {
                    return Object.keys(selectedFilters).every(filterKey => {
                        // Check if selectedFilters[filterKey] is an array
                        if (Array.isArray(selectedFilters[filterKey])) {
                            const categories = product.category.split(',').map(cat => cat.trim().toLowerCase());
                            return selectedFilters[filterKey].some(filterValue =>
                            categories.includes(filterValue.toLowerCase())
                            );
                        }
                        return true;
                    });
                });
                setFilteredData(filtered);
                console.log("Filtered Data:",filtered);
            };

            applyFilters();
        }
    }, [selectedFilters, productData]);


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
    <>
    <Header/>
    <main className={styles.mainContainer}>
        <div className={styles.heroText}>
            <div>
                <h1 className={styles.heroHeading}>DISCOVER OUR PRODUCTS</h1>
            </div>
            <div className={styles.heroParagraph}>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus </p>
                <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
        {isMobile ? (<div className={styles.mobileFilterBar}>
            <div>
                <h3>FILTER</h3>
            </div>
            <div>
                <button className={styles.dropdownButton} onClick={toggleDropdown}>
                    {sortCategory}<img src={downArrow} alt="Down Arrow"/>
                </button>
                {sortBoxOpen && (
                <div className={styles.mobileDropdownMenu}>
                    {productsSortCategories.map((item,index) => (
                        <div
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => selectSortCategory(item)}
                        >
                           {item===sortCategory ? 
                           ( <>
                            <img src={tickMark} alt="tick"/>
                            <span><strong>{item}</strong></span>
                            </>
                           ) : <>
                           <span>{item}</span>
                           </>}
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>) :
        <div className={styles.filterBar}>
            <div style={{fontSize:'18px', fontWeight: '700'}}>{filteredData.length} ITEMS</div>
            <div onClick={() => setIsFiltersVisible(!filtersVisible)} className={styles.toggleFilters}>
                {filtersVisible ? 
                (<>
                <img src={leftArrow} alt='Hide Filters'/>
                <span className={styles.filterToggle}>HIDE FILTERS</span>
                </>) :
                (<>
                <img src={rightArrow} alt='Show Filters'/>
                <span className={styles.filterToggle}>SHOW FILTERS</span>
                </>)}
            </div>
            <div>
                <button className={styles.dropdownButton} onClick={toggleDropdown}>
                    {sortCategory}<img src={downArrow} alt="Down Arrow"/>
                </button>
                
                {sortBoxOpen && (
                <div className={styles.dropdownMenu}>
                    {productsSortCategories.map((item,index) => (
                        <div
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => selectSortCategory(item)}
                        >
                           {item===sortCategory ? 
                           ( <>
                            <img src={tickMark} alt="tick"/>
                            <span><strong>{item}</strong></span>
                            </>
                           ) : <>
                           <span>{item}</span>
                           </>}
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>}

        <div className={styles.gridContainer}>
            {filtersVisible ? 
            (<div className={styles.productGridAndFilters}>
                 <FilterMenu selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                <div className={styles.compressedProductGrid}>
                    {filteredData.map(product => (
                        <Card key={product.id} cardData={product} />
                    ))}
                </div>
            </div>):
            (<div className={styles.productGrid}>
                {filteredData.map(product => (
                    <Card key={product.id} cardData={product} />
                ))}
            </div>)}   
        </div>
    </main>
    {isMobile ? <MobileFooter/> : <Footer/>}
    </>
  )
}

export default Products;