import React from 'react';
import reciterlist from './../../DataFile/reciterslist.json';

const Reciter = ({getReciter}) => {
    return (
        <div className='shadow-md text-center px-1'>
            <p className='bg-gray-300 py-1 text-xl dark:bg-gray-700 dark:text-white'>Reciters</p>
            <select
                className='outline-none px-2 py-1 border space-y-1 bg-gray-100 w-full dark:bg-gray-700 dark:text-white'
               multiple size='10'
            >
                {
                   reciterlist.map((reciter) =>
                        <option
                            className='border px-2 py-1 bg-white dark:bg-gray-600 rounded-md'
                            onClick={()=>getReciter(reciter)}
                        >
                            {reciter.name}
                        </option>
                   ) 
                }
            </select>
        </div>
    );
};

export default Reciter;