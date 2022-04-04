import React from 'react';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <div className='flex justify-between items-center px-8 bg-green-100'>
            <div className='site-description'>
                <h1 className='text-6xl font-bold'>Your watch 
                <span className='text-green-600 block'>
                Your review
                </span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum porro beatae quibusdam debitis.
                </p>
                <button className='bg-green-800 rounded px-4 py-2 mt-8 text-white font-bold'>Live Demo</button>
            </div>

            <div className='site-image h-96'>
                <img className='h-full w-full bg-green-100' src="watch-bg.png" alt="" />
            </div>
        </div>

        <div>
            <h2 className='mt-8 text-3xl font-bold'>Customer Reviews</h2>
            <Review></Review>

            <button className='bg-green-800 rounded px-4 py-2 mt-8 text-white font-bold'>See All Reviews</button>
        </div>

        </div>
    );
};

export default Home;