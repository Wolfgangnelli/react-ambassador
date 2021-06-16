import React from 'react';
import {Link} from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           <div className="px-1 py-1">
        <ul>
            <li className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-blue-600 hover:text-white"><Link to="/frontend" className="w-full">Frontend</Link></li>
            <li className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-blue-600 hover:text-white"><Link to="/backend" className="w-full">Backend</Link></li>
        </ul>

           </div>
        </div>
    )
}

export default DropdownMenu;
