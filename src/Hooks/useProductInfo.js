import React, { useState, useEffect } from 'react';

function useProductInfo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products))
            .catch(err => console.error('Failed to fetch products:', err));
    }, []); // Make sure to pass an empty dependency array for useEffect

    // Return the products state so that it can be used in components
    return products;
}

export default useProductInfo;
