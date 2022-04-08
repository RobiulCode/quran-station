import React,{ useState} from 'react';
import {BsCloudDownload} from 'react-icons/bs'
import ReactPlayer from 'react-player';
import QuranCourseData from './../DataFile/QuranCourseData'


const QuranCourse = () => {
    const [url,setUrl] = useState('https://youtu.be/_SNHEFBEyaQ')
    const getUrl=(url)=>{
        setUrl(url)
    }
    return (
        <div className="font-bangla dark:text-white md:flex md:space-x-1">
            <div className='flex justify-center md:w-1/2 border-4 border-gray-700 rounded-lg md:mb-0'>
                <ReactPlayer url={url} controls={true} width='640px' autoplay/>
            </div>
            <div className="pb-2 border md:w-1/2">
                <p className='bg-blue-400 text-xl py-1 mb-1 dark:bg-gray-600 text-center font-bold text-white'>24 Hours Quran Learning</p>
                <ul className='h-80 overflow-auto space-y-1 px-2'>
                    {
                       QuranCourseData.map((item)=><li
                            className='flex justify-between items-center border bg-white dark:bg-gray-600 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 py-1 hover:py-2 shadow-md transition-all duration-300 rounded-lg px-5 cursor-pointer'
                            onClick={()=>getUrl(item.classUrl)}
                       >
                            <span>{item.name}</span>
                            <a href={item.noteUrl} target='_blank' rel="noreferrer" className='hover:bg-white hover:py-1 px-1 rounded-full text-black'><BsCloudDownload/></a>
                       </li>) 
                    }
                </ul>
            </div>
        </div>
    );
};

export default QuranCourse;