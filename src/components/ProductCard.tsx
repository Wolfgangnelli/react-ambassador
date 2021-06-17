import React from 'react'
import { Product } from '../models/product';
import { formatCurrency } from '../helpers';


const ProductCard = (props: {product: Product}) => {
    return (
        <div className="bg-whit group relative rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
        <figure className="flex flex-col">                                
             <img src={props.product.image} alt={props.product.title} /> 
            <figcaption className="py-3 px-4">
                <p className="text-sm font-medium text-gray-900">{props.product.title}</p>
                <p className="text-sm font-medium text-gray-500">{formatCurrency(+props.product.price)}</p>
            </figcaption>
        </figure>
     </div>
    )
}

export default ProductCard;
