import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav >
               {/* <Link className='mr-4' to="/">Home</Link> */}
               <Link className='mr-4' to="/home">Home</Link>
               <Link className='mr-4' to="/reviews">Reviews</Link>
               <Link className='mr-4' to="/dashboard">Dashboard</Link>
               <Link className='mr-4' to="/blogs">Blogs</Link>
               <Link className='mr-4' to="/about">About</Link>
           </nav>
        </div>
    );
};

export default Header;