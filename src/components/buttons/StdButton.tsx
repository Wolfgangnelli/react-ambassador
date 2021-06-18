import React from 'react'

export const StdButton = (props: any) => {
    return (
        <button onClick={props.generate} className="text-sm mt-1 font-semibold bg-green-600 rounded-lg text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-700 hover:bg-green-500">
        <span>{props.testo}</span>
    </button>
    )
}
