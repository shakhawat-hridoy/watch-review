import React from 'react';
import Q1 from '../QA/Q1';
import Q2 from '../QA/Q2';
import Q3 from '../QA/Q3';

const Blogs = () => {
    return (
        <div className='m-8'>
            <h1 className='text-2xl font-bold my-8'>Developer Talkies</h1>
            <Q1></Q1>
            <Q2></Q2>
            <Q3></Q3>
        </div>
    );
};

export default Blogs;