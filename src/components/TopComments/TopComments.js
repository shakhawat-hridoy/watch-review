import React from 'react';
import UseData from '../../Hooks/UseData';

const TopComments = () => {
    const url = "comments.json";
    const [comments, setComments]= UseData(url);
    const short= comments.slice(0,3);
    console.log(short);
    return (
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 m-4 gap-4 p-4 ">
            {
                short.map(comment =>
                    <div className='bg-green-50 py-16 shadow-xl border-2  border-green-200 rounded-lg'>
                        <div>
                        <img className='h-24 w-24 mb-4 rounded-full mx-auto' src={comment.image} alt="" />
                        <h3 className='text-lg font-bold'> {comment.name}</h3>

                        <p className='mt-4'>{comment.comment}</p>
                        <p>Ratting : <span className='font-bold'>{comment.ratting}/5</span></p>
                    </div>
                    </div> 
                 )
            }
            </div>
        </div>
    );
};

export default TopComments;