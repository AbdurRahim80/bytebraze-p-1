import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
            <ScaleLoader size={100} color='#F92FD3'/>
        </div>
    );
};

export default Spinner;