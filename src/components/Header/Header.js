import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav className='bg-green-300'>
               {/* <Link className='mr-4' to="/">Home</Link> */}
               <Link className='mr-4 font-bold' to="/home">Home</Link>
               <Link className='mr-4 font-bold' to="/reviews">Reviews</Link>
               <Link className='mr-4 font-bold' to="/dashboard">Dashboard</Link>
               <Link className='mr-4 font-bold' to="/blogs">Blogs</Link>
               <Link className='mr-4 font-bold' to="/about">About</Link>
           </nav>
        </div>
    );
};

export default Header;