import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

const Alphabet = ({alphabet}) => {
    
    const {img,meaning,audio,punctuation} = alphabet
    return (
        <div className='relative shadow-md shadow-slate-400 p-2 bg-white dark:bg-slate-600 dark:text-white rounded-md'>
            <div className="text-center flex flex-col space-y-3" onClick={()=>new Audio(audio).play()}>
                <img src={img} alt="" className='h-40 sm:h-36'/>
                <span className='mt-3 font-bangla text-xl sm:text-2xl md:text-3xl font-extrabold  pb-2'>{meaning}</span>
            </div>
            <AiOutlineInfoCircle className='absolute right-0 bottom-0' size='20px'color='red' onClick={()=>new Audio(punctuation).play()}/>
        </div>
    );
};

export default Alphabet;