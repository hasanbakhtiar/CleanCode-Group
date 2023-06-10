import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setProduct(res.data.products));
    }, [])

    return <ProductContext.Provider value={[product, setProduct]}>
        {children}
    </ProductContext.Provider>
}
