import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51J8ie8SBKXlb8Zl872dYvUKq8pIxE7D6rXhCAy2lPADAjrFVHwEcRX4XFfQxo0W8KsUVXbak5DaM0f0gwAlUlbvt003DGbvZ6L';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Tiwari Clothing Ltd'
			stripeKey={publishableKey}
			amount={priceForStripe}
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}`}
			panelLabel='Pay Now'
			currency='USD'
			token={onToken}
		/>
	);
};

export default StripeCheckoutButton;
