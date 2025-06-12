import React from 'react';
import "./ExploreMenu.css";
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const handleCategoryClick = (menuName) => {
        // Toggle the category between the selected menu item and "All"
        const newCategory = category === menuName ? "All" : menuName;
        console.log(`Setting category to: ${newCategory}`); // Debugging statement
        setCategory(newCategory);
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <div className='explore-menu-text-pyramid'>
                <p className='line'>Choose from a diverse menu featuring a delectable array of dishes.</p>
                <p className='line'>Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            </div>
            <div className="explore-menu-list">
                {menu_list.map((item) => (
                    <div
                        onClick={() => handleCategoryClick(item.menu_name)}
                        key={item.menu_name}
                        className='explore-menu-list-item'
                    >
                        <img
                            className={category === item.menu_name ? "active1" : ""}
                            src={item.menu_image}
                            alt={`${item.menu_name} image`}
                        />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
