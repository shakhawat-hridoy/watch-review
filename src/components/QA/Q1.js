import React from 'react';

const Q1 = () => {
    return (
        <article className='border-2 border-green-900 rounded-lg p-4 mt-8'>
            <h5 className='text-xl font-bold'>What is context API?</h5>
            <hr />
            <p className='mt-4'>
            <span><b>Context API</b></span> is a process of passing data towards the child components without the interference of intermediate components between them.
                <br/>
                Generally props passes the data in a top down approach, which is not convenient in  every case.In that case <span><b>Context API</b></span> can help us out. It makes the data <span><b>global</b></span> and accessable for all the components without maintaining the tree hierarchy.

            </p>
        </article>
    );
};

export default Q1;