import React,{ useState,useEffect} from 'react';
// import axios from 'axios';
import Chapter from './Chapter/Chapter';
import Jumborton from './Jumborton/Jumborton';

const ReadQuran = () => {
    const [suras,setSuras] = useState([])


    //load data with hook
    useEffect(()=>{
        getSura()
        .catch(error => console.log(error))
    },[])

    //fetch data load function
    const getSura=async()=>{
        const data = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json')
        .then(data=> data.json())
        setSuras(data)
    }

    //--------------------------------------
    const getSearchSura=async(event)=>{
        const data = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json')
        .then(data=>data.json())
        const searchSura =data.filter((sura)=>sura.id === Number(event.target.value))
        setSuras(searchSura)
        if (searchSura.length>0){
            setSuras(searchSura)
        }else{
            setSuras(data.data)
        }
    }


    console.log(suras)
    return (
        <div className="md:w-11/12 md:mx-auto dark:bg-slate-700">
            <Jumborton  handleSearch={getSearchSura}/>
            {
                suras.length>0 ?
                <div className='sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 pt-2 pb-2 border-2'>
                    {
                        suras.map((sura)=><Chapter sura={sura} key={sura.id}/>)
                    }
                </div>:
                <div className="mt-32 mb-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 w-28 mx-auto rounded-full relative animate-spin flex justify-center items-center">
                <div className="absolute bg-gray-300 h-24 w-24 mx-auto rounded-full"></div>
                </div>
            }
            
        </div>
    );
};

export default ReadQuran;