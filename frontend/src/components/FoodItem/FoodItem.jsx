import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id, name, price, description, image}) => {
    const{cartItems,addtoCart,removeCart,url} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="fooditem-image-container">
            <img className='fooditem-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={() =>addtoCart(id)} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
            }
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem