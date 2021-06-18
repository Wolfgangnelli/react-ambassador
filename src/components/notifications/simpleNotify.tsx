import React from 'react'

export default function simpleNotify(props: any) {
    return (
        <div className={`${props.notify.error ? "bg-red-200 border-red-300" : "bg-white rounded-lg border-gray-300"} border mt-1 p-3 shadow-lg`}>
            <div className="flex flex-row">
                <div className="px-2">
                    <span className={`${props.notify.error ? "text-red-500" : "text-green-500"}`}>
                    <i className="fas fa-check"></i>
                    </span>
                </div>
                <div className="ml-2 mr-6">
                    <span className="font-semibold">Message</span>
                    <span className="block text-gray-500">{props.notify.message}</span>
                </div>
            </div>
        </div>
    )
}
