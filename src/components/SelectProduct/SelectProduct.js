import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './SelectProduct.css';

const SelectProduct = (props) => {
    const { selectItem, removeProduct } = props;
    return (
        <div className="selected-product ">
            <h2>Selected Item: {selectItem ? selectItem.length : 0}</h2>
            {
                selectItem?.map(product => <SingleProduct
                    product={product}
                    key={product.id}
                    removeProduct={removeProduct}
                ></SingleProduct>)
            }
        </div >
    );
};

export default SelectProduct;