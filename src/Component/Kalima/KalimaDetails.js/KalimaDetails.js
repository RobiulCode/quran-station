import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import KalimaData from './../kalimaData/kalimaData'

const KalimaDetails = () => {
    const {id} = useParams()
    const kalima = KalimaData.filter((kalima)=> kalima.id === Number(id))
    
    return (
        <div className='border md:w-11/12 md:mx-auto px-2 font-bangla space-y-2 p-3 dark:text-white dark:bg-gray-600 bg-white'>

            {
                kalima.map((item)=>
                    <div className="space-y-4">
                        <AudioPlayer 
                            src={item.audio}
                            defaultCurrentTime="Loading" 
                            defaultDuration="Loading"
                            showJumpControls={false}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                        >
                        </AudioPlayer>
                        <p className='text-2xl text-center bg-gray-300 dark:text-black py-0.5 shadow rounded'>{item.name}</p>
                        <p className='text-3xl'>{item.arabic}</p>
                        <p className=''>{item.punctuation}</p>
                        <p className=''>{item.bangla}</p>
                    </div>
                )
            }
        </div>
    );
};

export default KalimaDetails;