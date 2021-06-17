import React from 'react'

export default function TableLayout(props: any) {
    return (
        <div className="bg-gray-100 py-6 mt-10 rounded-lg">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-t-lg">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
