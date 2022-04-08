import React from 'react';
import alphabetData from '../DataFile/arabic_words'
import Alphabet from './Alphabet';

const Alphabets = () => {
    console.log(alphabetData)
    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 '>
            {
              alphabetData.map((alphabet)=><Alphabet alphabet={alphabet} key={alphabet.id}/>)  
            }
        </div>
    );
};

export default Alphabets;