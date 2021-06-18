import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Filters } from '../models/filters';
import { Product } from '../models/product';


const ProductsFrontend = () => {
    const [AllProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<Filters>({s: "", sort: "", page: 1});
    const [lastPage, setLastPage] = useState(0);
    const perPage = 9;
    


    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("/products/frontend");
                setLastPage(Math.ceil(data.length/perPage));
                setAllProducts(data);
                setFilteredProducts(data.slice(0, filters.page*perPage));
            }
        )();
    }, []);

    useEffect(() => {
        let filtered = AllProducts.filter(product => product.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || product.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
        
        if(filters.sort === "asc") {
            filtered.sort((a: Product, b: Product) => {
                if(a.price > b.price) {
                    return 1;
                } 
                if (b.price > a.price) {
                    return -1;
                }
                return 0;
            })
        } else if (filters.sort === "desc") {
            filtered.sort((a: Product, b: Product) => {
                if(a.price > b.price) {
                    return -1;
                }
                if(b.price > a.price) {
                    return 1;
                }
                return 0;
            })
        }
        setLastPage(Math.ceil(filtered.length/perPage));
        setFilteredProducts(filtered.slice(0, filters.page*perPage));
    }, [filters])

    return (
        <Layout>
            <Products page={"frontend"} products={filteredProducts} filters={filters} setFilters={setFilters} lastPage={lastPage} /> 
        </Layout>
    )
}

export default ProductsFrontend;
