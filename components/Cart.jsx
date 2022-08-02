import { Typography, Button } from 'antd';
import React from 'react'
import { useGlobalContext } from '../context/conetxt'
import { urlFor } from '../lib/client';
import {LeftOutlined, RightOutlined,MinusCircleOutlined} from '@ant-design/icons'
import getStripe from '../lib/getStripe'

function Cart() {
  const {totalPrice, onRemove ,totalQuantities, cartItems, qty ,setShowCart,toggleCartItemQuanitity,} = useGlobalContext();


  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json().catch((err)=> console.log(err));
    
    stripe.redirectToCheckout({ sessionId: data.id });
  }

  if(cartItems.length <=0){
    return(
      <div>
        <Typography.Paragraph>Your Cart is Empty</Typography.Paragraph>
      </div>
    )
  }
  if(cartItems.length>=1){
    
  return (
    <section>
        {cartItems.map((item, index)=>
        <section key={index} className='grid grid-cols-2 my-5'>
          <img className='h-32 mt-5 rounded-xl' src={urlFor(item.images[0])} alt={item.title} />
          <div className='mt-5'>
          <Typography.Title level={4}>{item.title}</Typography.Title>
          <Typography.Paragraph className='my-10'>$ {item.price}</Typography.Paragraph>
          <div className='lg:my-10'>
          <Button onClick={()=> toggleCartItemQuanitity(item._id, 'dec')}><LeftOutlined /></Button>
        <Button>{item.quantity}</Button>
        <Button onClick={()=> toggleCartItemQuanitity(item._id, 'inc')}><RightOutlined /></Button>
            <button className='ml-3' onClick={()=> onRemove(item, qty)}><MinusCircleOutlined style={{fontSize: '20px'}} /></button>
          </div>
          </div>
        </section> 
        )}
        <div className='flex justify-between items-center border-t-2 mt-10'>
          <Typography.Title level={4} type='success'>Total</Typography.Title>
          <Typography.Paragraph type='success'>$ {totalPrice}</Typography.Paragraph>
        </div>
        <div className='text-center my-10'>
          <Button onClick={handleCheckout} className='w-1/2'>Pay With Stripe</Button>
        </div>
    </section>
  )
  }
}

export default Cart