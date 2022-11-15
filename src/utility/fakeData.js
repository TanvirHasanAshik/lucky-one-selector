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
const getLocalStorage = () => {
    const getData = localStorage.getItem('products');
    const parseGetData = JSON.parse(getData);
    return parseGetData;
}
const deleteSingleProduct = (product) => {
    const getData = localStorage.getItem('products');
    const parseGetData = JSON.parse(getData);
    const deleteData = parseGetData.filter(data => data.id !== product.id);
    localStorage.setItem('products', JSON.stringify(deleteData));

}

export {
    addLocalStorage,
    getLocalStorage,
    deleteSingleProduct
};