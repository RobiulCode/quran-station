import React from 'react';
import Verse from '../verse/Verse'

const SuraDisplay = ({sura,suraNo}) => {
    //props sura destructure
    const {name,total_verses,translation,transliteration} = sura

    return (
        <div className='mx-1 md:w-11/12 md:mx-auto border'>
            <div className='flex justify-between items-center md:px-10 px-4 py-2 bg-gray-600 text-white shadow-md'>
                <span className='font-english'>{transliteration}</span>
                <span className='font-bangla'>{translation}</span>
                <span className='font-arabic'>{name}</span>
                <span className='font-bangla'>আয়াত : {total_verses}</span>
            </div>
            <div className=" space-y-1 py-2 dark:bg-slate-700">
            {
                sura.verses.length>1 &&
                <div className="">
                    <span className='font-arabic py-0.5 text-xl flex justify-center items-center dark:text-white'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                    <span className='font-bangla flex justify-center items-center dark:text-white'>শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</span>
                </div>
            }
            
                    {
                        sura.verses.map((verse)=><Verse key={verse.id} verse={verse} suraNo={suraNo}/>)
                    }
            </div>
        </div>
    );
};

export default SuraDisplay;