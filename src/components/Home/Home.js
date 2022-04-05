import React from 'react';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import TopComments from '../TopComments/TopComments';

const Home = () => {
    const navigate =  useNavigate();

    const showReviews =()=>{
        const path="/reviews";
        navigate(path);
    }
    
    return (
        <div>
            <div className='flex justify-between items-center p-8'>
            <div className='w-3/4'>
                <h1 className='text-6xl font-bold'>Your watch 
                <span className='text-green-700 block'>
                Your review
                </span></h1>
                <p className='mt-4'>
                    Welcome to the biggest ever smart watch lover community in bangladesh. You can know about the latest models available in the market in recent times and also can see the authentic user reviews here. We hope that you will be able to select the best product with the help of our valuable reviews.   
                </p>
                <button className='bg-green-800 rounded px-4 py-2 mt-8 text-white font-bold'>Live Demo</button>
            </div>

            <div className='w-1/4 mr-16'>
                <img className='' src="https://www.mytrendyphone.eu/images/Waterproof-Smartwatch-with-Heart-Rate-K12-IP68-Bluetooth-4-Black-10092020-01A-p.jpg" alt="" />
            </div>
        </div>

        <div>
            <h2 className='mt-16 text-3xl text-green-900 font-bold'><u>Customer Reviews</u></h2>
            <TopComments></TopComments>

            <button onClick={showReviews} className='bg-green-800 rounded px-4 py-2 my-8 text-white font-bold'>See All Reviews</button>
        </div>

        </div>
    );
};

export default Home;