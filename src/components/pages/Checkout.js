import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { db } from '../firebase.js';

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet, handle accordingly
      return;
    }

    try {
      // Create a payment method
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        setPaymentError(error.message);
        return;
      }

      // If payment is successful, proceed to upload content and update Firestore
      const uploadResult = await uploadContentToFirebase();
      if (uploadResult.success) {
        await createFirestoreDocument(deliveryAddress, paymentMethod.id);
        alert('Payment successful and document created!');
      } else {
        alert('Payment successful but document upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const uploadContentToFirebase = async () => {
    try {
      // Implement the Firebase storage upload logic here
      // Return an object with success status and any additional data
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  const createFirestoreDocument = async (address, paymentMethodId) => {
    try {
      // Add the delivery address and payment method ID to a new Firestore document
      const collectionRef = db.collection('OrdersDB');

      await collectionRef.add({
        deliveryAddress: address,
        paymentMethodId,
        // Add other document data as needed
      });

    } catch (error) {
      console.error('Firestore error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout">
        <h2>Checkout</h2>

        <div className="checkout-field">
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <input
                type="text"
                id="deliveryAddress"  // Ensure this ID matches the htmlFor of the label
                className="checkout-input"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
                required
            />
        </div>

        <div className="checkout-field">
            <label>Card Details:</label>
            <div className="card-element-container">
                <CardElement className="checkout-card-element" />
            </div>
        </div>

        {paymentError && <div className="error">{paymentError}</div>}
        <button type="submit" className="checkout-button">Pay Now</button>
    </form>
);


}

