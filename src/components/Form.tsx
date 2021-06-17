import React from 'react';

const Form = (props: any) => {

    return (
        <form onSubmit={props.handleForm} id={props.info}>
            <div className="shadow overflow-hidden sm:rounded-md">
                {props.children}
            </div>
                {props.message !== null && 
                <div className="w-full p-4 bg-indigo-600 text-white font-semibold">{props.message}</div>
                }
        </form>
    )
}

export default Form;
