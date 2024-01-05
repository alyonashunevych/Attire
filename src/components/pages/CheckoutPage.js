import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51OUUwdLmleEzUTY9Jskycr6ihc8lXIVreu5lG6fveIzLZ0U87csv1AUwbexrlNSeu9K8ZY2GpHNazjx0LhUvn8l200A2UrYTkx'); // Replace with your Stripe public key

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default CheckoutPage;
