import React from 'react';
import {Link} from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='md:w-11/12 md:mx-auto h-96 flex flex-col justify-center items-center dark:bg-gray-600 bg-white border'>
            <div className="text-6xl font-extrabold  py-2 px-3 dark:bg-gray-700 rounded-lg">
                <span className='italic tracking-wide dark:text-white'>Error</span>
                <span className='text-red-500'>4</span>
                <span className='dark:text-white'>0</span>
                <span className='text-red-500'>4</span>
            </div>
            <div className="text-center dark:text-white">
                <p className='mb-5 mt-2'>Sorry we can't find this page</p>
                <Link to='/'>
                    <span className='bg-blue-400 py-1 px-2 rounded-lg hover:bg-blue-600 '>Go Back Home</span>
                </Link>
            </div>
        </div>
    );
};

export default Error404;