import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const total=cart.reduce((total,prd)=>total+prd.price,0);
  let shippingCost=0;
  if(total>0){
    shippingCost=12.99;
  }
  else if(total>20){
    shippingCost=4.99;
  }
  else if(total>40){
    shippingCost=0;
  }

  const tax=total*0.1;
  const grandTotal=total+shippingCost+Number(tax);
  
  const formatNumber=num=>{
    const precision=(num).toFixed(2);
    return Number(precision);
  }

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p><small>Shipping Cost: {shippingCost}</small></p>
      <p>Tax+VAT: {formatNumber(tax)}</p>
      <p>Total Price: {formatNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;