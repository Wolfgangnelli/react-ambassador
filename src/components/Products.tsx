import React from 'react'
import { Filters } from '../models/filters';
import { Product } from '../models/product';
import InputSearch from './InputSearch';
import ProductCard from './ProductCard';
import SelectMenu from './SelectMenu';
import StdButton from './StdButton';


const Products = (props: {page: string, products: Product[], filters: Filters, setFilters: (filters: Filters) => void, lastPage: number}) => {

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


    return (
        <>
        <InputSearch search={search}>
           <SelectMenu sort={sort} />
        </InputSearch>
        <div className="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
            <h3 className="col-span-3 xl:col-span-1 text-gray-900 font-semibold">Products {props.page}</h3>
            <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                {props.products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                        )
                    })}
            </div>
        </div>
        {props.filters.page !== props.lastPage &&
        <div className="my-4 text-center">
        <StdButton testo="Load More" load={load} />
        </div>
        }
        </>
    )
}

export default Products;
