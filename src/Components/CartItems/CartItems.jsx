import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContex'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalAmt,all_product, CartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
          if(CartItems[e.id] > 0){
            return <div key={e.id}>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className='carticon-product-icon'/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='quantity'>{CartItems[e.id]}</button>
              <p>${e.new_price*CartItems[e.id]}</p>
              <img className='remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
          }
          return null;
        })}
        <div className="cartitem-down">
          <div className="cartitem-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitem-total-item">
                <p>Subtotal</p>
                <p>${getTotalAmt()}</p>
              </div>
              <hr />
              <div className='cartitem-total-item'>
                  <p>Shipping Fee</p>
                  <p>Free</p>
              </div>
              <div className='cartitem-total-item'>
                <h3>Total</h3>
                <h3>${getTotalAmt()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems