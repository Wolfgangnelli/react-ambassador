import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Product } from '../models/product';



const ProductsFrontend = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("/products/frontend");
                setProducts(data);
            }
        )();
    }, []);
    
    return (
        <Layout>
            <Products page={"frontend"} products={products} /> 
        </Layout>
    )
}

export default ProductsFrontend;
