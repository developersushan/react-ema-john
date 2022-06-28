import React from 'react';
import './cart.css'
const Cart = (props) => {
    const cart = props.cart
    const total =cart.reduce((total,prd)=>total+prd.price,0)
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i]
    //     total = total + product.price

    // }
    let shipping = 0;
    if (total > 35) {
        shipping = 0
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }
    const formatNumber = num => {
        const decession = num.toFixed(2)
        return Number(decession)
    }
    const tax =total/10;
    return (
        <div className='cart'>
            <div className="cart-basic">
            <h3 className='order'>Order summary</h3>
            <p className='item'>item ordered:{cart.length}</p>
            <p>product price:${formatNumber(total)}</p>
            <p>shipping:${shipping}</p>
            <p>Tax-VAT:${formatNumber(tax)}</p>
            </div>
            <div className="total-cart">
            <p className='total'>Total price:${formatNumber(total+shipping+tax)}</p>
            </div>
        </div>

    );
};

export default Cart;