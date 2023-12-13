import React from 'react'

export default function Bag({ product }) {
  function formatCurrency(input) {
    const amount = parseFloat(input);
    if (!isNaN(amount)) {
      const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: 1,
      });
      return `US$ ${formattedAmount}`;
    } else {
      return input;
    }
  }
  return (
    <div className='shop_bag'>
      <p className='bag_title'>Shopping bag (n)</p>
      <div className='bag_item'>
        <img alt='Product' src={product.img} className='bag_item_img' />
        <div className='bag_item_info'>
          <p className='bag_item_title'>{product.product_name}</p>
          <p className='bag_item_text'>Color: {product.color[0]}</p>
          <p className='bag_item_text'>Size: {product.sizes[0]}</p>
          <p className='bag_item_text'>Quantity: n</p>
          <p className='bag_item_price'>{formatCurrency(product.price)}</p>
          <button className='remove'>Remove</button>
        </div>
      </div>
      <div className='bag_item'>
        <img alt='Product' src={product.img} className='bag_item_img' />
        <div className='bag_item_info'>
          <p className='bag_item_title'>{product.product_name}</p>
          <p className='bag_item_text'>Color: {product.color[0]}</p>
          <p className='bag_item_text'>Size: {product.sizes[0]}</p>
          <p className='bag_item_text'>Quantity: n</p>
          <p className='bag_item_price'>{formatCurrency(product.price)}</p>
          <button className='remove'>Remove</button>
        </div>
      </div>
      <div className='subt_box'>
        <p className='bag_item_title'>Subtotal</p>
        <p className='bag_item_price'>{formatCurrency(product.price)}</p>
      </div>
      <button className='add_to_bag'>Checkout</button>
    </div>
  )
}
