import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {

    const { handleProduct, product } = props;
    const { name, img, price } = product;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card h-100">
                <img className="w-100 h-75" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: {price}Tk</h6>
                </div>
                <button onClick={() => handleProduct(product)} className="bth btn-primary border border-0 p-2">
                    Select item <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div >
    );
};

export default Product;



