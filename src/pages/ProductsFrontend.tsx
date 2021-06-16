import React from 'react';
import Layout from '../layout/Layout';


const ProductsFrontend = () => {
    return (
        <Layout>
        <div className="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
            <h3 className="col-span-3 xl:col-span-1 text-gray-900 font-semibold">Products</h3>
            <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
                    OOOOK card 1!
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
                    OOOOK card 1!
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
                    OOOOK card 1!
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default ProductsFrontend;
