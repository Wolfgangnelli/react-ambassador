import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Filters } from '../models/filters';
import { Product } from '../models/product';


const ProductsBackend = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<Filters>({
        s: "",
        sort: "",
        page: 1,
    });
    const [lastPage, setLastPage] = useState(0);


useEffect(() => {
    (
        async () => {
            const arr = [];
            if(filters.s) {
                arr.push(`s=${filters.s}`);
            }
            if(filters.sort) {
                arr.push(`sort=${filters.sort}`)
            }
            if(filters.page) {
                arr.push(`page=${filters.page}`)
            }
            const {data} = await axios.get(`/products/backend?${arr.join("&")}`);
            setProducts(filters.page === 1 ? data.data : [...products, ...data.data]);
            setLastPage(data.meta.last_page);
        }
    )();
}, [filters])

    return (
        <Layout>
            <Products page="backend" products={products} filters={filters} setFilters={setFilters} lastPage={lastPage} />
        </Layout>
    )
}

export default ProductsBackend;
