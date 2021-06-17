import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Product } from '../models/product';


const ProductsBackend = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState({
        s: ""
    });


useEffect(() => {
    (
        async () => {
            const arr = [];
            if(filters.s !== "") {
                arr.push(`s=${filters.s}`);
            }
            const {data} = await axios.get(`/products/backend?${arr.join("&")}`);
            setProducts(data.data);
        }
    )();
}, [filters])

    return (
        <Layout>
            <Products page="backend" products={products} filters={filters} setFilters={setFilters} />
        </Layout>
    )
}

export default ProductsBackend;
