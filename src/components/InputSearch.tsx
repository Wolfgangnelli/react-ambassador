import React from 'react'

const InputSearch = (props: {search: any}) => {
    return (
        <div className="p-8 flex items-center justify-center bg-white rounded-xl ring-1 ring-gray-100 shadow">
            <div className="w-full max-w-xs mx-auto">
                <div>
                    <label htmlFor="search_product" className="block text-sm font-medium text-gray-700">Search product</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input onChange={(e) => props.search(e.target.value)} type="text" name="search_product" id="search_product" placeholder="Search..." className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 py-1 pr-12 focus:outline-none sm:text-sm border-gray-300 rounded-md border" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputSearch;
