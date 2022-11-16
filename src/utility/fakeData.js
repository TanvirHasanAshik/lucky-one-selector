/* Add product in local storage*/
const addLocalStorage = (singleProduct) => {
    let products = [];
    const getData = localStorage.getItem('products');
    if (getData) {
        products = JSON.parse(getData);
        if (products.length < 4) {
            const checkDuplicate = products.find(product => product.id === singleProduct.id);
            if (!checkDuplicate) {
                products.push(singleProduct);
                localStorage.setItem('products', JSON.stringify(products));
            }
        }
    } else {
        products.push(singleProduct);
        localStorage.setItem('products', JSON.stringify(products));
    }
}
/* -------------------------------------------- */

/* get product data from localStorage and show UI */
const getLocalStorage = () => {
    const getData = localStorage.getItem('products');
    const parseGetData = JSON.parse(getData);
    return parseGetData;
}
/* ------------------------------------ */

/* Delete single product and show data */
const deleteSingleProduct = (product) => {
    const getData = localStorage.getItem('products');
    const parseGetData = JSON.parse(getData);
    const deleteData = parseGetData.filter(data => data.id !== product.id);
    localStorage.setItem('products', JSON.stringify(deleteData));
}
/* ------------------------------------ */

/* Remove all products data from the local storage */
const removeAllProduct = () => {
    const getData = localStorage.getItem('products');
    if (getData.length > 0) {
        localStorage.removeItem('products');
        localStorage.setItem('products', JSON.stringify([]));
    }
}
/* ----------------------------------------------- */
export {
    addLocalStorage,
    getLocalStorage,
    deleteSingleProduct,
    removeAllProduct
};