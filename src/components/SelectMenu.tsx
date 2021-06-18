import React from 'react'

const SelectMenu = (props: {sort: any}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Select order</label>
            <div className="mt-1">
                <select onChange={(e) => props.sort(e.target.value)} className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-1 text-left focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="">Select</option>
                    <option value="asc">Price Ascending</option>
                    <option value="desc">Price Descending</option>
                </select>
            </div>
        </div>
    )
}

export default SelectMenu;
