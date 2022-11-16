import React, { useEffect, useState } from 'react';
import { addLocalStorage, deleteSingleProduct, getLocalStorage, removeAllProduct } from '../../utility/fakeData';
import Product from '../Product/Product';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Shop.css';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [randomChose, setRandomChose] = useState(null);

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

    /* Single Product Remove from local storage and show UI*/
    const removeProduct = (product) => {
        deleteSingleProduct(product);
        const getData = getLocalStorage();
        setSelectItem(getData);
    }
    /* ---------------------------------------------- */

    /* Remove all products from the local storage*/
    const removeAll = () => {
        removeAllProduct();
        setSelectItem([]);
    }
    /*------------------------------------------ */

    /* Random select and show UI */
    const randomSelect = () => {
        const random = Math.floor((Math.random() * products.length) + 1);
        const randomProduct = selectItem.find(item => parseInt(item.id) === random);
        if (randomProduct) {
            setRandomChose(randomProduct);
        } else {
            randomSelect();
        }
    }
    console.log(randomChose)
    /* ------------------------- */
    useEffect(() => {
        const getData = getLocalStorage();
        setSelectItem(getData);
    }, [])
    return (
        <div className="row d-flex justify-content-center">
            {
                <div className="col-md-8 col-12 p-5">
                    {
                        randomChose ?
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">This is randomly chosen for you</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex justify-content-evenly">
                                            <img className="w-50" src={randomChose.img} alt="" />
                                            <div>
                                                <h4>{randomChose.name}</h4>
                                                <h5>Price: {randomChose.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            : <p></p>

                    }
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
                    removeAll={removeAll}
                    randomSelect={randomSelect}
                ></SelectProduct>
            </div>
        </div >
    );
};

export default Shop;