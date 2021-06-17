import React from 'react';

export default function Table(props: any) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            {props.children}
        </table>
    )
}
