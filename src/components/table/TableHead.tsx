import React from 'react'

export default function TableHead(props: any) {
    return (
        <thead className="bg-gray-50">
            {props.children}
        </thead>
    )
}
