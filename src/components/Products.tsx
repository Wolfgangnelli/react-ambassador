import React, {useState} from 'react'
import { Filters } from '../models/filters';
import { Product } from '../models/product';
import InputSearch from './InputSearch';
import ProductCard from './ProductCard';
import SelectMenu from './SelectMenu';
import LoadMoreBtn from './LoadMoreBtn';
import { StdButton } from './buttons/StdButton';
import SimpleNotify from './notifications/simpleNotify';
import axios from 'axios';


const Products = (props: {
    page: string, 
    products: Product[], 
    filters: Filters, 
    setFilters: (filters: Filters) => void, 
    lastPage: number}) => {

        const [selected, setSelected] = useState<number[]>([]);
        const [notify, setNotify] = useState({
            show: false,
            error: false,
            message: ''
        })

    const search = (s: string) => {
        props.setFilters({
            ...props.filters,
            page: 1,
            s
        });
    }

    const sort = (sort: string) => {
        props.setFilters({
            ...props.filters,
            page: 1,
            sort
        })
    }

    const load = () => {
        props.setFilters({
            ...props.filters,
            page: props.filters.page + 1
        })
    }

    const select = (id: number) => {
        if(selected.some(s => s === id)) {
            setSelected(selected.filter(el => el !== id));
            return;
        } 
        setSelected([...selected, id]);
    }

    const generate = async () => {
        try {
            const {data} = await axios.post("/links", {
                products: selected
            })
            setNotify({
                show: true,
                error: false,
                message: `Link generated: http://localhost:8000/${data.code}`
            })
        } catch (error) {
            setNotify({
                show: true,
                error: true,
                message: "You should be logged to generate a link!"
            })
        } finally {
            setTimeout(() => {
                setNotify({
                    show: false,
                    error: false,
                    message: ""
                })
            }, 3000);
        }
    }

    let generateButton, info;
    if(selected.length > 0) {
        generateButton= (
            <StdButton testo="Generate Link" generate={generate} />
        )
    }
    if(notify.show) {
        info = (
            <SimpleNotify notify={notify} />
        )
    }

    return (
        <>
        <InputSearch search={search}>
           <SelectMenu sort={sort} />
        </InputSearch>
        {generateButton}
        {info}
        <div className="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
            <h3 className="col-span-3 xl:col-span-1 text-gray-900 font-semibold">Products {props.page}</h3>
            <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                {props.products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} select={select} selected={selected} />
                        )
                    })}
            </div>
        </div>
        {props.filters.page !== props.lastPage &&
        <div className="my-4 text-center">
        <LoadMoreBtn testo="Load More" load={load} />
        </div>
        }
        </>
    )
}


export default Products;
