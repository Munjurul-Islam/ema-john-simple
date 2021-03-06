import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {name, img, price, stock, seller} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
            <div className='product-details'>
                <h4> {name} </h4><br/>
                <p><small>by : {seller}</small></p><br/>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock --Order soon</small></p>
                <button className='btn-cart' onClick={() => props.addHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;