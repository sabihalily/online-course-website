import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const total = cart[i];
        totalPrice = totalPrice + total.price;
    }
    const total = totalPrice.toFixed(2);
    return (
        <div>
            <h4>Enrolled Item: {cart.length}</h4>
            <h3>Total Price: {total}</h3>
        </div>
    );
};

export default Cart;