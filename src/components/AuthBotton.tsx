import React from 'react'

const AuthBotton = (props: any) => {
    return (
        <button className="bg-black bg-opacity-20 hover:bg-opacity-30 flex mr-1 px-3 py-2 text-xs font-medium text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">{props.name}</button>
    )
}

export default AuthBotton;
