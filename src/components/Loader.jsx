import React from 'react';
import { ScaleLoader } from 'react-spinners';

const loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center '>
                <ScaleLoader size={100} color='#F92FD3' />
            </div>
        </div>
    );
};

export default loader;