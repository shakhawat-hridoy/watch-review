import React from 'react';
import UseData from '../../Hooks/UseData';

const Review = () => 
{
    const [data , setData] = UseData();
    return (
        <div>
            <div class="grid grid-cols-3 gap-4 py-4 px-8">
            {
                data.map(data =>
                    <div className='h-48 bg-green-200 p-4 rounded-lg shadow-lg'>
                        <div>
                        <h3 className='text-lg font-bold'> {data.name}</h3>

                        <p className='mt-4'>{data.comment}</p>
                        <p>Ratting : <span className='font-bold'>{data.ratting}</span></p>
                    </div>
                    </div>
                    
                 )
            }
            </div>
            
        </div>
    );
};

export default Review;