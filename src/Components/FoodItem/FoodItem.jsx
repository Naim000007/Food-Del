// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContex'
// const FoodItem = ({id, name , price , image, description}) => {
//   const { cartItems,setCartItems,addToCart,removeFromCart } = useContext(StoreContext)
//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" srcset="" />
//             {
//               ![cartItems[id]] ? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white}/> : <div className='food-item-counter'>
//                 <img  onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                 <p>{cartItems[id]}</p>
//                 <img  onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" srcset="" />
//               </div>
//             }
           
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" srcset="" />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className="food-item-price">${price}</p>
                
         
//         </div>
//     </div>
//   )
// }

// export default FoodItem

import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContex';

const FoodItem = ({ id, name, price, image, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {cartItems[id] === undefined  ? ( // Check if item is not in cart
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
