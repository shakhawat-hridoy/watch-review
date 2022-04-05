import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    return (
        <div>
            <h1 className='text-2xl font-bold my-8 text-green-900'>All Reviews</h1>
            {
                <Review></Review>
            }
        </div>
    );
};

export default Reviews;