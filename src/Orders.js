import React, { useState,useEffect } from 'react'
import './Orders.css'
import { db } from './Firebase';
import {query, collection, onSnapshot, orderBy, doc,setDoc, onSnapshotsInSync} from 'firebase/firestore'
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders,setOrders]= useState([]);

  useEffect(() => {
    if(user){
    const ref = collection(db,"user",user.uid,"orders")
    const orderedOrders = query(ref, orderBy('created', 'desc'))
    onSnapshot(orderedOrders,docsSnap => {
         setOrders(docsSnap.forEach.map(doc => ({
          id: doc.id,
          data: doc.data() 
         console.log(doc.data)

         })))
      })  
      console.log("hi")
    } else {
      console.log("hi from else part")
      setOrders([])
    }
  }, [user])
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders-order'>
        {orders&&orders.map(order => (
        <Order order={order}/>
        ))}
      </div>
    </div>
  )
}

export default Orders
