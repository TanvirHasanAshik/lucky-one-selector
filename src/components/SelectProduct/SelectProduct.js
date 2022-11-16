import { faCheckSquare, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { removeAll } from '../../utility/fakeData';
import SingleProduct from '../SingleProduct/SingleProduct';
import './SelectProduct.css';

const SelectProduct = (props) => {
    const {
        selectItem,
        removeProduct,
        removeAll,
        randomSelect
    } = props;
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
            {
                selectItem.length ?
                    <div className="pb-5">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={randomSelect} className="btn btn-success mb-2 w-50">Chose one <FontAwesomeIcon icon={faHeartCircleCheck} />
                        </button><br />
                        <button onClick={removeAll} className="btn btn-secondary w-50">Reselect <FontAwesomeIcon icon={faCheckSquare} /></button>
                    </div>
                    : <p></p>
            }
        </div >
    );
};

export default SelectProduct;