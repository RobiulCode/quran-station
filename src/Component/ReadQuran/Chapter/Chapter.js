import React from 'react';
import { Link } from 'react-router-dom';

const Chapter = ({sura}) => {
    const {id,name,transliteration,translation,total_verses} = sura
    return (
        <Link to={`/sura/${id}`}>
            <div className='bg-white dark:bg-slate-800 dark:text-white border py-3 px-3 flex space-x-3 group hover:border dark:hover:bg-slate-800  hover:border-sky-400 transition duration-100 mx-3 my-2 rounded-md'>
                <div className="w-2/12">
                    <div className="rotate-45 h-10 w-10  bg-slate-200 dark:bg-slate-700 relative flex justify-center items-center rounded-md group-hover:bg-sky-400 dark:group-hover:bg-slate-700">
                        <p className='-rotate-45 absolute group-hover:text-white font-bold '>{id}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-10/12">
                    <div className="">
                        <p className='font-english'>{transliteration}</p>
                        <p className='text-xs text-gray-700 dark:group-hover:text-white dark:text-white group-hover:text-sky-400 font-bangla'>{translation}</p>
                    </div>
                    <div className="text-center">
                        <p className='font-arabic'>{name}</p>
                        <p className='text-xs text-gray-500 group-hover:text-sky-400 font-bangla dark:group-hover:text-white dark:text-white'>{total_verses} আয়াত</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Chapter;