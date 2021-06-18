import React from 'react';

const StdButton = (props: any) => {
    return (
        <button onClick={props.load} className="text-sm font-semibold bg-green-600 rounded-lg text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-700 hover:bg-green-500">
            <span className="mr-2">
                <i className="fas fa-arrow-right animate-bounce-left"/>
            </span>
            <span>{props.testo}</span>
            <span className="ml-2">
                <i className="fas fa-arrow-left animate-bounce-right"/>
            </span>
        </button>
    )
}

export default StdButton;
