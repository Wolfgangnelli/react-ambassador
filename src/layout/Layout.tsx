import React from 'react';

const Layout = (props: any) => {
    return (
        <main className="container mx-auto h-full min-h-screen">
            {props.children}
        </main>
    )
}

export default Layout;
