import React from 'react';


const Main = (props: any) => {
    return (       
        <main className="container mx-auto h-full min-h-screen">
            {props.children}
        </main>
    )
}

export default Main;
