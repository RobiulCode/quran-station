import React from 'react';
import { Link } from 'react-router-dom';

const HomeItem = ({item}) => {
    const {name,img,details} = item
    return (
        <div className=''>
            <Link to={details}
                className='font-bangla flex flex-col justify-center items-center p-2 bg-white dark:bg-gray-600 dark:text-white shadow-md space-y-3 rounded-lg'
            >
                <div className='ring-4 ring-pink-500 rounded-full h-16 w-16 p-2'>
                    <img className='h-12 w-12' src={img} alt="" />
                </div>
                <span className=''>{name}</span> 
            </Link>
        </div>
    );
};

export default HomeItem;