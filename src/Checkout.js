import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <img className='checkout-ad' alt='' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png' />
       <div>
            <h2 className='checkout-title'>
                Your Shopping basket
            </h2>

        </div> 
        </div>

        <div className='checkout-right'>
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout
