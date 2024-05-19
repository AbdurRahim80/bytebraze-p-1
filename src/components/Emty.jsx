import React from 'react';
import { Link } from 'react-router-dom';

const Emty = ({ message, address }) => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center font-black text-2xl min-h-[calc(100vh-132px)]'>
            <p>{message} </p>
            <Link to={address}  className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Go to Blogs</span>
            </Link>
            
            
        </div>
    );
};

export default Emty;