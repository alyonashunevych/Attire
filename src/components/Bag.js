import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { db } from './firebase.js';
import { useNavigate } from 'react-router-dom';


export default function Bag() {
  const [cookies, setCookie] = useCookies(['sessionID']);
  const sessionID = cookies.sessionID;

  const [items, setItems] = useState([]);
  const [isDocumentFound, setIsDocumentFound] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionID) {
      db.collection('ShoppingBag')
        .doc(sessionID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setItems(data.items || []);
          } else {
            setIsDocumentFound(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching document:', error);
        });
    }
  }, [sessionID]);

  const handleEmptyBag = () => {
    setCookie('sessionID', '', { path: '/' });
    setItems([]);
    alert('Your shopping bag has been emptied.');
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      // Remove the '$' from the price string and parse it as a float
      const price = parseFloat(item.price.replace('$', ''));
      if (isNaN(price)) {
        return total; // Skip this item if the price is not a number
      }
      return total + (price * item.quantity);
    }, 0);
  };
  

  const formatCurrency = (input) => {
    const amount = parseFloat(input);
    if (!isNaN(amount)) {
      return `$${amount.toFixed(2)}`;
    } else {
      return input;
    }
  };

  return (
    <div className='shop_bag'>
      <p className='bag_title'>Shopping bag ({items.length})</p>
      {isDocumentFound ? (
        items.length > 0 ? (
          <div>
            {items.map((item, index) => (
              <div key={index} className='bag_item'>
                <img alt={item.name} src={item.img} className='bag_item_img' />
                <div className='bag_item_info'>
                  <p className='bag_item_title'>{item.name}</p>
                  <p className='bag_item_text'>Color: {item.color}</p>
                  <p className='bag_item_text'>Size: {item.size}</p>
                  <p className='bag_item_text'>Quantity: {item.quantity}</p>
                  <p className='bag_item_price'>{formatCurrency(item.price)}</p>
                </div>
              </div>
            ))}
            <div className='subt_box'>
              <p className='bag_item_title'>Subtotal</p>
              <p className='bag_item_price'>{formatCurrency(calculateSubtotal())}</p>
            </div>
            <button className='checkout' onClick={navigate('/checkout')}>Checkout</button>
            <button className='empty_bag_button' onClick={handleEmptyBag}>Empty the bag</button>
          </div>
        ) : (
          <div className='empty_bag_message'>Your shopping bag is empty.</div>
        )
      ) : (
        <div className='empty_bag_message'>Your shopping bag is empty.</div>
      )}
    </div>
  );
}
