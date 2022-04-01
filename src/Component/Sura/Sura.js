import React from 'react';
import playlist from './../../DataFile/playlist.json'

const Sura = ({getSura}) => {
    return (
        <div className='shadow-md text-center bg-gray-200'>
            <p className='bg-gray-300 py-1 text-xl dark:bg-gray-700 dark:text-white'>Suras</p>
            <select
                className='outline-none px-2 py-1 border space-y-1 bg-gray-100 w-full dark:bg-gray-700 dark:text-white'
                size='10'
            >
                {
                   playlist.map((sura) =>
                        <option
                            className='border px-2 py-1 bg-white dark:bg-gray-600 rounded-md'
                            onClick={()=>getSura(sura)}
                        >
                            {sura.id}. {sura.transliteration} ({sura.name})
                        </option>
                   ) 
                }
            </select>
        </div>
    );
};

export default Sura;