import React from 'react';
import { FcSearch } from "react-icons/fc";
// import Quran_Kareem from '../../images/quran.png';


const Jumborton = ({handleSearch}) => {
    return (
        <div className='flex flex-col justify-center items-center py-6 h-40 md:h-72 bg-center bg-cover bg-no-repeat ' style={{ 
            backgroundImage: `url("https://studioarabiya.com/images/easyblog_articles/249/b2ap3_large_scientific_miracles_in_quran-1.jpg")` 
          }}>
            <div className='md:w-10/12 md:mx-auto'>
            <p className='font-english text-xl mx-4 text-white'>The month of Ramadan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion” (Surah Al-Baqarah, 2:185)</p>
                {/* <img src={Quran_Kareem} alt="" className='h-24 mx-auto mb-2'/> */}
                <div className="flex flex-col md:flex relative items-center w-96 text-white ">
                    {/* <input type="text" name='search' placeholder='Enter Sura No (1-114)' className='w-full py-1 px-6 rounded-md shadow-md shadow-pink-300/50 outline-none' onChange={handleSearch}/>
                    <FcSearch className='absolute top-2 left-1'/> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Jumborton;