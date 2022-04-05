import React from 'react';
import UseData from '../../Hooks/UseData';

const TopComments = () => {
    const url = "comments.json";
    const [comments, setComments]= UseData(url);
    const short= comments.slice(0,3);
    console.log(short);
    return (
        <div>
            <div class="grid grid-cols-3 m-4 gap-4 p-4 border-2  border-green-400 rounded-lg">
            {
                short.map(comment =>
                    <div className='h-48 bg-green-200 p-4 rounded-lg shadow-lg'>
                        <div>
                        <h3 className='text-lg font-bold'> {comment.name}</h3>

                        <p className='mt-4'>{comment.comment}</p>
                        <p>Ratting : <span className='font-bold'>{comment.ratting}</span></p>
                    </div>
                    </div>
                    
                 )
            }
            </div>
        </div>
    );
};

export default TopComments;