import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
    <p className="title">Delievery Information</p>
    <div className="multi-feilds">
      <input type="text" placeholder='Enter First Name'/>
      <input type="text" placeholder='Enter Last Name'/>
    </div>
    <input type="email" placeholder='Enter Email'/>
    <input type="text" placeholder='Enter Street'/>
    <div className="multi-feilds">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-feilds">
      <input type="text" placeholder='ZipCode'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
            <p>Delievery Fee</p>
            <p>{getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button>Proceed To Payment</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder