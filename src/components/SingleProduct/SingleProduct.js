import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleProduct = (props) => {
    const { name, img, price, id } = props.product;
    const { removeProduct } = props;
    return (
        <div className="m-4">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="w-100 h-100" src={img} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body m-2 d-flex align-items-center justify-content-between">
                            <div>
                                <h4 className="card-title">{name}</h4>
                                <h5>Price: {price}</h5>
                            </div>
                            <div>
                                <button onClick={() => removeProduct(props.product)} className="btn btn-danger">
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default SingleProduct;