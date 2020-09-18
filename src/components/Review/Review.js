import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

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

const [orderPlaced,setOrderPlaced]=useState(false);
const handlePlaceOrder=()=>{
  setCart([]);
  setOrderPlaced(true);
  processOrder();

}
let thankYou;
if(orderPlaced  ){
  thankYou= <img src={happyImage} alt=""/>
  
}

  return (
    <div className="twin-container">      
      <div className="product-container">
      {
        cart.map(pd=><ReviewItem key={pd.key} product={pd} handleRemoveItem={handleRemoveItem}></ReviewItem>)
      }
      {thankYou}
      </div>
      <div>
        <Cart cart={cart}>
        <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;