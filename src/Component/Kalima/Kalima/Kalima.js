import React from 'react';
import { Link } from 'react-router-dom';

const Kalima = ({kalima}) => {
    return (
        <div className='border py-1 px-2 rounded bg-white shadow hover:bg-blue-500 hover:text-white transition-all duration-200'>
            <Link to ={`/kalima/${kalima.id}`} className='block space-x-3 '>
                <span className='h-5 w-5 bg-slate-400 rounded px-1 text-white '>{`0${kalima.id}`}</span>
                <span >{kalima.name}</span>
            </Link>

        </div>
    );
};

export default Kalima;