import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart,setCart]=useState([]);

useEffect(()=>{
  const savedCart=getDatabaseCart();
  const productKeys=Object.keys(savedCart);
  // const count=Object.values(savedCart);
  // const count=productKeys.map(key=>savedCart[key]);
  const cartProducts=productKeys.map(key=>{
      const product= fakeData.find(pd=>pd.key===key); 
      product.quantity=savedCart[key];
      return product;
  })
  setCart(cartProducts);
},[]);

const handleRemoveItem=(key) => {
  removeFromDatabaseCart(key);
}
  return (
    <div>
      <h1>Order Items: {cart.length}</h1>
      {
        cart.map(pd=><ReviewItem key={pd.key} product={pd} handleRemoveItem={handleRemoveItem}></ReviewItem>)
      }
    </div>
  );
};

export default Review;