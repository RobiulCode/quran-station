import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Play = ({reciter,sura}) => {
    const {name,Server} = reciter
    const {id,transliteration,total_verses} = sura 

    // make sura no tha match with server linkElement
    let suraNo;
    if(id <10){
        suraNo = `00${id}`
    }else if(id < 100){
        suraNo = `0${id}`
    }else if(id > 100){
        suraNo = id
    }
    // final sura url
    const url = `${Server}/${suraNo}.mp3`
    // console.log(reciter,sura);

    return (
        <div className='px-2 bg-gray-100 dark:bg-gray-700 py-2 dark:text-white border border-pink-100 rounded-md'>
            <div className='text-center'>
                <p className='text-md font-bold border-b-2 border-red-400 py-0.5'>Now playing</p>
                <p className='flex justify-between'>
                    <span>No: {id}</span>
                    <span>Name: {transliteration}</span>
                    <span>Total verse: {total_verses}</span>
                </p>
                <p className=''>Recited by: {name}</p>
            </div>
            
            <AudioPlayer 
                src={url}
                defaultCurrentTime="Loading" defaultDuration="Loading"
            >

            </AudioPlayer>
        </div>
    );
};

export default Play;