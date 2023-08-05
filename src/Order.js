import React from 'react'
import './Order.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import Orders from './Orders'
// import { useStateValue } from './StateProvider'

function Order({order}) {
  return (
    <div className='order'>
      {order.data.basket.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebutton />
      ))}
    </div>
  )
}

export default Order
