import React from 'react';

const Header = (props: {title: string}) => {
    return (
        <header className="text-4xl text-center py-4">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;
