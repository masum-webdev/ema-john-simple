import React from 'react';

const ReviewItem = (props) => {
  console.log(props);
  const {name,quantity,price,key}=props.product;
  const actualPrice=(quantity*price).toFixed(2);
  const reviewItemStyle={
    borderBottom:'1px solid lightgray',
    padding:'5px',
    marginBottom:'5px',
    paddingBottom:'5px'
  }
  return (
    <div style={reviewItemStyle}>
      <h3>{name}</h3>
  <p>Quantity: {quantity}</p>
  <p>Price: ${actualPrice}</p>
  <button className="main-button" onClick={()=>props.handleRemoveItem(key)}>Remove</button>
    </div>
    
  );
};

export default ReviewItem;