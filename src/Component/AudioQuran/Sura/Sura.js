import React from 'react';
import playlist from './../../../DataFile/playlist.json'

const Sura = ({getSura}) => {
    return (
        <div className='shadow-md text-center px-1 relative border-l-4 rounded-l-lg border-blue-500'>
            <p className='bg-gray-500 text-white py-1 text-xl dark:bg-gray-700 dark:text-white rounded-t-lg'>
                Suras
                <span className='text-xs text-white h-6 w-6 bg-red-500 rounded-full inline-flex items-center justify-center absolute -right-1 -top-1'>{playlist.length}</span>
            </p>
            <ul
                className='outline-none px-2 py-1 border space-y-1 bg-gray-100 w-full dark:bg-gray-700 dark:text-white overflow-auto h-96'
            >
                {
                   playlist.map((sura) =>
                        <li
                            key={sura.id}
                            className='border px-2 py-1 bg-white dark:bg-gray-600 rounded-md text-left'
                            onClick={()=>getSura(sura)}
                        >
                            {sura.id}. {sura.transliteration} ({sura.name})
                        </li>
                   ) 
                }
            </ul>
        </div>
    );
};

export default Sura;