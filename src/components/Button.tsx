import React from 'react';

const Button = (props: any) => {
    return (
      
        <button 
        onClick={() => props.setIsActive(!props.isActive)}
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            MENU
        </button>
    )
}

export default Button;


  {/* <button className="text-white font-semibold uppercase">
            MENU
        </button> */}