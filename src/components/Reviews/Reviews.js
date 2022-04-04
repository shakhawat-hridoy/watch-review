import React, { useEffect, useState } from 'react';
import UseData from '../../Hooks/UseData';
import Review from '../Review/Review';

const Reviews = () => {
    const [data, setData]= UseData();

    return (
        <div>
            <h1>Review</h1>
            {
                <Review></Review>
            }
        </div>
    );
};

export default Reviews;