import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

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
  const newCart=cart.filter(pd=>pd.key!==key);
  setCart(newCart);
  removeFromDatabaseCart(key);
}

  return (
    <div className="twin-container">      
      <div className="product-container">
      {
        cart.map(pd=><ReviewItem key={pd.key} product={pd} handleRemoveItem={handleRemoveItem}></ReviewItem>)
      }
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;