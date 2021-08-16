import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JNuYaSByuDfQEMFyeUEBg6LmubhwOUsiLZCwhvKrKcXCkx333o0Zqcn4dal9W7PoV74wbSrDQ7CnY4GKiOChbeA00oM0Fuxlp'

    const onToken = token => {
        console.log(token);
        alert(`Your Payment of ${price}$ is Successful !!`)
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Fashion Hub Pvt. Ltd.'
            billingAddress
            shippingAddress
            image='https://cdn1.designhill.com/uploads/personal_designs/88451d1f72a3f3da1e544525f0a00e8a-993d5f64dcb7228c3f39a64919b67f4915355222757629.jpg?ver=2.12.0'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;