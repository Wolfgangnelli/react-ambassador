import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Products from '../components/Products';
import Layout from '../layout/Layout';
import { Filters } from '../models/filters';
import { Product } from '../models/product';


const ProductsFrontend = () => {
    const [AllProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<Filters>({s: "", sort: ""});



    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("/products/frontend");
                setAllProducts(data);
                setFilteredProducts(data);
            }
        )();
    }, []);

    useEffect(() => {
        let filtered = AllProducts.filter(product => product.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || product.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
        setFilteredProducts(filtered);

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
    }, [filters])

    return (
        <Layout>
            <Products page={"frontend"} products={filteredProducts} filters={filters} setFilters={setFilters} /> 
        </Layout>
    )
}

export default ProductsFrontend;
