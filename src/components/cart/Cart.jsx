import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total,crs) => total + crs.price,0);
    let total = 0;
    for (let i = 0; i< cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    // const formatNumber = num => {
    //     const precision = num.toFixed(2);
    //     return Number(precision)
    // }
    return (
        <div className="cart text-white">
            <h3>Course Order Summary</h3>
            <h5>Course Order: {cart.length}</h5>
            <h4>Course Total Price:{total}</h4>
            <button className="btn btn-warning text-black text-uppercase font-weight-bold mt-4" href="#">Review your order </button>
        </div>
    );
};

export default Cart;