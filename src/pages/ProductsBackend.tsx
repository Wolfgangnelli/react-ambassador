import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Product } from '../models/product';


const ProductsBackend = () => {
    const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
    (
        async () => {
            const {data} = await axios.get("/products/backend");
            setProducts(data.data);
        }
    )();
}, [])

    return (
        <Layout>
            <Products page="backend" products={products} />
        </Layout>
    )
}

export default ProductsBackend;
