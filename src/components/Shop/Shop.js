import React, { useEffect, useState } from 'react';
import { addLocalStorage, deleteSingleProduct, getLocalStorage } from '../../utility/fakeData';
import Product from '../Product/Product';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Shop.css';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [selectItem, setSelectItem] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    /* product add in local storage and show UI */
    const handleProduct = (product) => {
        addLocalStorage(product);
        const getData = getLocalStorage();
        setSelectItem(getData);
    }

    /* Product Remove from local storage and show UI*/
    const removeProduct = (product) => {
        deleteSingleProduct(product);
        const getData = getLocalStorage();
        setSelectItem(getData);
    }
    /* ---------------------------------------------- */

    useEffect(() => {
        const getData = getLocalStorage();
        setSelectItem(getData);
    }, [])
    return (
        <div className="row d-flex justify-content-center">
            {
                <div className="col-md-8 col-12 p-5">
                    <div className="row row-cols-sm-12 row-cols-md-3 g-4" >
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleProduct={handleProduct}
                            ></Product>)
                        }
                    </div>
                </div>
            }
            <div className="col-md-4 col-12 text-center border border-left">
                <SelectProduct
                    selectItem={selectItem}
                    removeProduct={removeProduct}
                ></SelectProduct>
            </div>
        </div >
    );
};

export default Shop;