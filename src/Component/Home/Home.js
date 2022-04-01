import React,{ useState } from 'react';
import Play from '../Play/Play';
import Reciter from '../Reciter/Reciter';
import Sura from '../Sura/Sura';

const Home = () => {
    const [reciter,setReciter] = useState({
        name: 'Mishary Alafasi',
        Server: 'https://server8.mp3quran.net/afs'
    })
    const [sura,setSura] = useState({
        id: 1,
        name: "الفاتحة",
        total_verses: 7,
        transliteration: "Al-Fatihah"
    })
    
    //get reciter server url function
    const getReciter =( reciter) =>{
        setReciter(reciter);
    }
    //get sura no function
    const getSura =(sura) =>{
        setSura(sura);
    }
    

    return (
        <div className="space-y-2 mx-3 md:w-11/12 md:mx-auto">
            <div className=''>
                <Play reciter={reciter} sura={sura}/>
            </div>
            <div className="flex gap-x-4">
                <div className='w-1/2'>
                    <Reciter getReciter={getReciter}/>
                </div>
                <div className='w-1/2'>
                    <Sura getSura={getSura}/>
                </div>
            </div>
        </div>
    );
};

export default Home;