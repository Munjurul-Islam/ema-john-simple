import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    const vat = Math.round(total * 0.1);
    return (
        <div>
            <h3>Oder Summary</h3>
            <h4>Items Ordered : {cart.length}</h4>
            <h5>Vat : {vat}</h5>
            <h4>product price : {total}</h4>
            <h3>Total : {total + vat}</h3>
        </div>
    );
};

export default Cart;