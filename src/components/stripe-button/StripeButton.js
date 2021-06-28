import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J7F5JSIYfFvU4VTJZTxzz9cj138Jrf232zhm2LSI7UEUI2bXouJKSZmnw7X2B9GsuJMNNJhUaTumFGP1868fHik00NRuNc8sc';

  const onToken = token => {
    console.log(token);
    alert('Payment Susscessfull');
  }

  return (
    <div>
      <StripeCheckout
        label='Pay now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeButton;
