import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { db } from './firebase.js';

export default function Bag() {
  const [cookies, setCookie] = useCookies(['sessionID']);
  const sessionID = cookies.sessionID;

  const [documentData, setDocumentData] = useState(null);
  const [isDocumentFound, setIsDocumentFound] = useState(true); // Initialize as true

  useEffect(() => {
    // Check if there is a session ID in cookies
    if (sessionID) {
      // Use the sessionID to fetch a Firestore document
      db.collection('ShoppingBag')
        .doc(sessionID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // Document exists, set its data to the state
            setDocumentData(doc.data());
          } else {
            // Document not found, set the state variable to false
            setIsDocumentFound(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching document:', error);
        });
    }
  }, [sessionID]);

  // Function to clear the bag
  const handleEmptyBag = () => {
    // Clear the sessionID cookie
    setCookie('sessionID', '', { path: '/' });
    // Additional logic to clear the bag in your application state, if needed
    setDocumentData(null);
    // Perform any other actions related to emptying the bag
    alert('Your shopping bag has been emptied.');
  };

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    // Calculate the subtotal based on the contents of the bag
    // You can add your logic here
  };

  // Function to format currency
  const formatCurrency = (input) => {
    const amount = parseFloat(input);
    if (!isNaN(amount)) {
      const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `$${formattedAmount}`;
    } else {
      return input;
    }
  };

  return (
    <div className='shop_bag'>
      <p className='bag_title'>Shopping bag ({documentData ? 'n' : '0'})</p>
      {isDocumentFound ? (
        documentData ? (
          <div>
            <div className='bag_item'>
              <img alt='Product' src={documentData.img} className='bag_item_img' />
              <div className='bag_item_info'>
                <p className='bag_item_title'>{documentData.name}</p>
                <p className='bag_item_text'>Color: {documentData.color}</p>
                <p className='bag_item_text'>Size: {documentData.size}</p>
                <p className='bag_item_text'>Quantity: {documentData.quantity}</p>
                <p className='bag_item_price'>{formatCurrency(documentData.price)}</p>
              </div>
            </div>
            <div className='subt_box'>
              <p className='bag_item_title'>Subtotal</p>
              <p className='bag_item_price'>{formatCurrency(calculateSubtotal())}</p>
            </div>
            <button className='add_to_bag' onClick={handleEmptyBag}>
              Empty Bag
            </button>
            <button className='add_to_bag'>Checkout</button>
          </div>
        ) : (
          <div className='empty_bag_message'>
            Your shopping bag is empty.
          </div>
        )
      ) : (
        <div className='empty_bag_message'>
          Your shopping bag is empty.
        </div>
      )}
    </div>
  );
}
