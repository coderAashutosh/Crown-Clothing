import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='card-items' />
        <CustomButton>Checkout</CustomButton>
    </div>
)

export default CartDropdown;