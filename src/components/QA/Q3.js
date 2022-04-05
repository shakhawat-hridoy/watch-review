import React from 'react';

const Q3 = () => {
    return (
            <article className='border-2 border-green-900 rounded-lg p-4 mt-8'>
            <h5 className='text-xl font-bold'>Inline & Block elements</h5>
            <hr />
            <p>
            <span><b></b></span> 
                <br/>
                <span><b>Block Elements</b></span> always starts on a new line and also takes a certain amount of space on both side of itself. Some examples are: 
                <b> paragraph(p) tag, div tag</b> etc.
            </p>
            <p>
                <b>again-</b> <br />
                <span><b>Inline elements</b></span> start  on the same line of the previous element. It doesn't take extra space as well. Just as much space as needed.
                <br />
                <b>Example: span tag, anchor tag, img tag etc</b>
            </p>
        </article>
    );
};

export default Q3;