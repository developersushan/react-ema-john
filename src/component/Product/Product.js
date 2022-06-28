import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
 const {img,name,seller,price,stock,star}=props.product;
 
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-content">
               <h5 className='product-head'>{name}</h5><br/>
                <div className="center-content">
                <div className="left-content">
                <p>by:{seller}</p>
                <h5>$:<span>{price}</span></h5>
                <p>only{stock} left in stock order-soon</p>
                <button className='buttonBtn' onClick={()=>props.buttonHandler(props.product)} ><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
                </div>
                <div className="right-content">
                    <h4>Feature</h4>
                    <p>star:{star}</p>
                </div>
                </div>

            </div>
            
        </div>
    );
};

export default Product;